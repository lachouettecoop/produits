const algoliasearch = require("algoliasearch");
const csv = require("neat-csv");
const fs = require("fs");
const path = require("path");

// const ALGOLIA_APP_ID = "M6AKDBX36Z"; // v1
const ALGOLIA_APP_ID = "ZSB27F96MU"; // v2

if (!process.env.ALGOLIA_SECRET_KEY) {
  console.error("Veuillez exécuter le script avec la clé secrète Algolia");
  console.error("> ALGOLIA_SECRET_KEY=xxxxx npm run index");
  process.exit(2);
}

const client = algoliasearch(ALGOLIA_APP_ID, process.env.ALGOLIA_SECRET_KEY);
const index = client.initIndex("produits");
const odooExport = fs.createReadStream(
  path.join(__dirname, "product.template.csv")
);

const prepareForIndexing = async (row) => {
  const categories = row["Catégorie interne/Nom affiché"]
    .split(" / ")
    .filter((cat) => cat !== "");

  const categoryValue = (level) => {
    const offset = 2;
    if (categories.length < level + offset) return "";
    return categories.slice(offset, level + offset).join(" > ");
  };

  const saleStateValues = (row) => {
    if (row["Actif"] === "False") {
      return [1000, "Archivé"];
    }
    if (row["Peut être vendu"] === "False") {
      return [700, "Requalification en cours"];
    }
    if (row["Peut être acheté"] === "False") {
      if (
        row["Catégorie du point de vente/Nom affiché"].trim() === "Supermarché"
      ) {
        return [200, "Vente au Supermarché"];
      }
      return [500, "Déréférencé"];
    }
    return [0, "Vente au Lab"];
  };

  let imgPath = null;
  if (row["Image de taille moyenne"]) {
    imgPath = `images/${row["External ID"]}.jpg`;
    fs.writeFileSync(imgPath, row["Image de taille moyenne"], "base64");
  }

  const [saleStateScore, saleStateValue] = saleStateValues(row);
  return {
    objectID: row["External ID"],
    thumbnailPath: imgPath,
    active: row["Actif"] === "True",
    barCode: row["Code Barre"],
    name: row["Nom affiché"],
    labels: row["Labels/Nom affiché"],
    price: Number(row["Prix de vente"]),
    supplier: row["Fournisseur/Nom affiché"],
    origin: row["Pays d'origine/Nom du pays"],
    saleState: saleStateValue,
    saleStateScore: saleStateScore,
    qtyInStock: Number(row["Quantité en stock"]),
    isVrac: row["A peser avec une balance"] === "True",
    "categories.lvl1": categoryValue(1),
    "categories.lvl2": categoryValue(2),
    "categories.lvl3": categoryValue(3),
    "categories.lvl4": categoryValue(4),
    "categories.lvl5": categoryValue(5),
    "categories.lvl6": categoryValue(6),
  };
};

csv(odooExport)
  .then((rows) => {
    console.log(rows.length, "rows found. Converting.");
    return Promise.all(rows.map(prepareForIndexing));
  })
  .then(
    (records) =>
      console.log("sending records to Algolia") ||
      index.saveObjects(records, { autoGenerateObjectIDIfNotExist: true })
  )
  .then((v) => console.log("Finished!"))
  .catch((e) => console.log("ERROR", e));
