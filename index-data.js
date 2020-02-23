const algoliasearch = require("algoliasearch");
const csv = require("neat-csv");
const fs = require("fs");
const path = require("path");

if (!process.env.ALGOLIA_SECRET_KEY) {
  console.error("Veuillez exécuter le script avec la clé secrète Algolia");
  console.error("> ALGOLIA_SECRET_KEY=xxxxx npm run index");
  process.exit(2);
}

const client = algoliasearch("M6AKDBX36Z", process.env.ALGOLIA_SECRET_KEY);
const index = client.initIndex("produits");
const odooExport = fs.createReadStream(
  path.join(__dirname, "product.template.csv")
);

const prepareForIndexing = row => {
  const categories = row["Catégorie interne/Nom affiché"]
    .split(" / ")
    .filter(cat => cat !== "");

  const categoryValue = level => {
    if (categories.length < level) return "";
    return categories.slice(0, level).join(" > ");
  };

  // 'Quantité en stock': '9.0',
  // 'Quantité prévue': '9.0',
  return {
    objectID: row["External ID"],
    active: row["Actif"] === "True",
    barCode: row["Code Barre"],
    name: row["Nom affiché"],
    labels: row["Labels/Nom affiché"],
    price: Number(row["Prix de vente"]),
    supplier: row["Fournisseur/Nom affiché"],
    origin: row["Pays d'origine/Nom du pays"],
    "categories.lvl1": categoryValue(1),
    "categories.lvl2": categoryValue(2),
    "categories.lvl3": categoryValue(3),
    "categories.lvl4": categoryValue(4),
    "categories.lvl5": categoryValue(5),
    "categories.lvl6": categoryValue(6)
  };
};

csv(odooExport)
  .then(
    rows =>
      console.log(rows.length, "rows found. Converting.") ||
      rows.map(prepareForIndexing)
  )
  .then(
    records =>
      console.log("sending records to Algolia") ||
      index.saveObjects(records, { autoGenerateObjectIDIfNotExist: true })
  )
  .then(v => console.log("Finished!"));
