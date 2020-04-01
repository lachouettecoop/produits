# Produits

Cette application est créée dans le cadre de l'Équipe Thématique « Qu'est-ce qu'il manque ? ».
Elle vise à permettre l'exploration des références actuelles afin de pouvoir détecter les typologies de produits devant être référencés.

## Installation

```
git clone git@github.com:lachouettecoop/produits.git
cd produits
npm install
```

## Utilisation

### Consulter l'explorateur en local

```
npm run start
```

Ouvrez ensuite http://localhost:8080/

### Réindexer les données sur Algolia

1. téléchargez un fichier d'export à jour depuis Odoo (Champs « Drive »)
2. placez le fichier `product.template.csv` téléchargé en 1. à la racine du projet
3. exécutez `ALGOLIA_SECRET_KEY=xxxx npm run index` (où `ALGOLIA_SECRET_KEY` correspond à la clé secrète permettant d'ajouter des objets à l'index)
4. commiter les fichiers image à jour et pousser sur Github
