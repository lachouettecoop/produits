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

### Ouvrir le Drive

Procédure pour :

- Récupérer les données depuis Odoo
- Réindexer les données sur Algolia
- Mettre à jour la date de fermeture du Drive (pour le réouvrir)
- Archiver les commandes livrées précédemment

> Pour tester cela sans risque de casser les données de production sur Algolia,
> ajouter la variable d'environnement `LCC_DRY_RUN=true` à l'étape 3.
>
> Exemple : `ALGOLIA_SECRET_KEY=xxxx ODOO_USER=yyyy ODOO_PASSWORD=zzzz LCC_DRY_RUN=true npm run index`

1. téléchargez un fichier d'export à jour depuis Odoo (Champs « Drive »)
2. placez le fichier `product.template.csv` téléchargé en 1. à la racine du projet
3. exécutez `ALGOLIA_SECRET_KEY=xxxx ODOO_USER=yyyy ODOO_PASSWORD=zzzz npm run index` avec :

- `ALGOLIA_SECRET_KEY` : la clé secrète permettant d'ajouter des objets à l'index
- `ODOO_USER` : un compte utilisateur Odoo pouvant accéder aux produits
- `ODOO_PASSWORD` : le mot de passe du compte utilisateur précédent

4. commiter les fichiers image à jour et pousser sur Github

### En cas de dépassement de quota Algolia

Il faut recréer une nouvelle application avec un index `produits`, puis mettre à jour les variables `ALGOLIA_CONFIG` et `ALGOLIA_APP_ID` dans le code.

Une fois l'application créé, il faut configurer l'indice tel que détaillé dans les captures d'écran de [cette documentation](./docs).
