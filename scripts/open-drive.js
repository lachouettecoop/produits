const algoliasearch = require("algoliasearch");
const fs = require("fs");
const path = require("path");
const replace = require("replace-in-file");
const got = require("got");
const Odoo = require("odoo-xmlrpc");

// const ALGOLIA_APP_ID = "M6AKDBX36Z"; // v1
const ALGOLIA_APP_ID = "ZSB27F96MU"; // v2
const IS_TEST_MODE = process.env.LCC_DRY_RUN || false;

if (!process.env.ALGOLIA_SECRET_KEY) {
  console.error("Veuillez exécuter le script avec la clé secrète Algolia");
  console.error("> ALGOLIA_SECRET_KEY=xxxxx npm run index");
  process.exit(2);
}
if (!process.env.ODOO_USER || !process.env.ODOO_PASSWORD) {
  console.error("Veuillez exécuter le script avec les identifiants Odoo");
  console.error("> ODOO_USER=xxxxx ODOO_PASSWORD=xxxxx npm run index");
  process.exit(2);
}

const odooClient = new Odoo({
  db: "dbsas",
  url: "https://sas.lachouettecoop.fr",
  username: process.env.ODOO_USER,
  password: process.env.ODOO_PASSWORD,
});
const client = algoliasearch(ALGOLIA_APP_ID, process.env.ALGOLIA_SECRET_KEY);
const index = client.initIndex("produits");

const prepareForIndexing = async (row) => {
  const valueOfIdField = (field, fallback) => {
    if (!Array.isArray(row[field])) {
      if (typeof fallback !== "undefined") {
        return fallback;
      }
      throw new Error(
        `Array expected for ${field}. Value was: ${JSON.stringify(row[field])}`
      );
    }
    return row[field].slice(-1)[0];
  };

  const categories = valueOfIdField("categ_id")
    .split(" / ")
    .filter((cat) => cat !== "");

  const categoryValue = (level) => {
    const offset = 2;
    if (categories.length < level + offset) return "";
    return categories.slice(offset, level + offset).join(" > ");
  };

  const saleStateValues = (row) => {
    if (!row.active) {
      return [1000, "Archivé"];
    }
    if (!row.sale_ok) {
      return [700, "Requalification en cours"];
    }
    if (!row.purchase_ok) {
      if (valueOfIdField("pos_categ_id", "").trim() === "Supermarché") {
        return [200, "Vente au Supermarché"];
      }
      return [500, "Déréférencé"];
    }
    return [0, "Vente au Lab"];
  };

  let imgPath = null;
  if (row.image_medium) {
    imgPath = `images/${row.id}.jpg`;
    fs.writeFileSync(
      path.join(__dirname, "../public", imgPath),
      row.image_medium,
      "base64"
    );
  }

  const [saleStateScore, saleStateValue] = saleStateValues(row);
  if (row.barcode === "4046871002992") {
    console.log("doit être Bryo", valueOfIdField("seller_ids"));
    console.log(row);
  }
  return {
    objectID: `__export__.product_template_${row.id}`,
    // id: row.id,
    thumbnailPath: imgPath,
    active: row.active,
    barCode: row.barcode,
    name: row.display_name,
    labels: valueOfIdField("label_ids", ""),
    price: row.list_price,
    supplier: valueOfIdField("default_seller_id", ""),
    origin: valueOfIdField("country_id", ""),
    saleState: saleStateValue,
    saleStateScore: saleStateScore,
    qtyInStock: row.qty_available,
    isVrac: row.to_weight,
    "categories.lvl1": categoryValue(1),
    "categories.lvl2": categoryValue(2),
    "categories.lvl3": categoryValue(3),
    "categories.lvl4": categoryValue(4),
    "categories.lvl5": categoryValue(5),
    "categories.lvl6": categoryValue(6),
  };
};

const nextClosingDate = () => {
  const CLOSING_HOUR = {
    WEEKDAY: 16,
    SATURDAY: 13,
  };

  const currDay = new Date().getDay();
  if ([0, 1, 2].includes(currDay)) {
    return Date.now() - 1;
  }

  const closingDate = new Date();
  if (currDay === 5 && new Date().getHours() > 19) {
    // saturday's stock could be updated on friday evening too
    const ONE_DAY = 24 * 60 * 60 * 1000;
    closingDate.setHours(CLOSING_HOUR.SATURDAY, 0, 0);
    return closingDate.getTime() + ONE_DAY;
  }

  const closingHour =
    currDay === 6 ? CLOSING_HOUR.SATURDAY : CLOSING_HOUR.WEEKDAY;
  closingDate.setHours(closingHour, 0, 0);
  return closingDate.getTime();
};

const fakeAlgoliaIndex = {
  clearObjects: () => Promise.resolve(),
  saveObjects: (records) => {
    console.log(`Faking saving ${records.length} records in Algolia`);
    return Promise.resolve();
  },
};

const algoliaIndexFacade = IS_TEST_MODE ? fakeAlgoliaIndex : index;
if (IS_TEST_MODE) {
  console.log("TEST MODE enabled, no data will be hurt!");
}

const getOdooProducts = async (odoo) => {
  return new Promise((resolve, reject) => {
    console.log("Connecting to Odoo server…");
    odoo.connect(function (err) {
      if (err) {
        return reject(err);
      }
      console.log("Connected to Odoo server.");
      /*
        active -> Actif
        other_information -> Autres Informations
        attribute_line_ids/display_name -> Caractéristiques d'articles/Nom affiché
        barcode -> Code Barre
        fresh_category -> Catégorie de produits frais
        category_print_id/display_name -> Catégorie d'étiquette/Nom affiché
        pos_categ_id/display_name -> Catégorie du point de vente/Nom affiché
        categ_id/display_name -> Catégorie interne/Nom affiché
        description -> Description
        description_sale -> Description vente
        available_in_pos -> Disponible dans le point de vente
        seller_ids/display_name -> Fournisseur/Nom affiché
        ingredients -> Ingrédients
        label_ids/display_name -> Labels/Nom affiché
        display_name -> Nom affiché
        country_id/name -> Pays d'origine/Nom du pays
        purchase_ok -> Peut être acheté
        sale_ok -> Peut être vendu
        list_price -> Prix de vente
        price_volume -> Prix/L
        price_weight_net -> Prix/kg
        qty_available -> Quantité en stock
        virtual_available -> Quantité prévue
        rack_location -> Rayon
        fresh_range -> Spécificités alimentaires
        image_medium -> Image de taille moyenne
        to_weight -> A peser avec une balance
      */
      const fields = [
        "id",
        "active",
        "other_information",
        "attribute_line_ids",
        "barcode",
        "fresh_category",
        "category_print_id",
        "pos_categ_id",
        "categ_id",
        "description",
        "description_sale",
        "available_in_pos",
        "seller_ids",
        "default_seller_id",
        "pricetag_origin",
        "ingredients",
        "label_ids",
        "display_name",
        "country_id",
        "purchase_ok",
        "sale_ok",
        "list_price",
        "price_volume", // prix au L
        "price_weight_net", // prix au Kg
        "qty_available",
        "virtual_available",
        "rack_location",
        "fresh_range",
        "image_medium",
        "to_weight",
        // ToDo, play with it
        // "average_consumption",
        // "department_id",
      ];

      const params = [
        [
          ["active", "=", true],
          ["sale_ok", "=", true],
        ],
        fields, // set null to get all
        // 0, // offset
        // 50, // limit
      ];

      console.log("fetching all products");
      odoo.execute_kw("product.product", "search_read", [params], function (
        err,
        value
      ) {
        if (err) {
          return reject(err);
        }
        console.log(`${value.length} products found`);
        resolve(value);
      });
    });
  });
};

(async () => {
  await index.getSettings(); // fail early if Algolia tokens are invalid

  console.log("Let's opening the Drive!");
  const rows = await getOdooProducts(odooClient);

  console.log(rows.length, "rows found in Odoo. Converting.");
  const records = await Promise.all(rows.map(prepareForIndexing));

  console.log("clearing Algolia's index");
  await algoliaIndexFacade.clearObjects();

  console.log("sending records to Algolia");
  await algoliaIndexFacade.saveObjects(records, {
    autoGenerateObjectIDIfNotExist: true,
  });
  console.log("Algolia indexation Finished!");

  console.log("Opening the Drive!");
  await replace({
    files: path.join(__dirname, "../public/js/fermeture.js"),
    from: /const CLOSED_TIMESTAMP =.*/g,
    to: `const CLOSED_TIMESTAMP = ${nextClosingDate()};`,
  });

  console.log("Archiving delivered orders");
  const ADMIN_URL = "https://admin.lachouettecoop.fr";
  const commandes = await got(`${ADMIN_URL}/commandes?statut_eq=livree`).json();

  console.log(commandes.length, "orders will be archived");
  if (IS_TEST_MODE) {
    console.log("TEST MODE enabled. Doing nothing");
  } else {
    const orders = await Promise.all(
      commandes.map((commande) =>
        got.put(`${ADMIN_URL}/commandes/${commande.id}`, {
          json: { statut: "archivee" },
        })
      )
    );
    console.log(orders.length, "orders have been archived");
  }
})().catch((e) => console.log("ERROR", e));
