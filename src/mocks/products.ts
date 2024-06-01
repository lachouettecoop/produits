const products = [
  {
    id: "1",
    label: "Lentilles blondes France 500g",
    description: "9,70 € / Kg",
    price: "74,35 €",
    priceDetails: "500g",
    pictureUrl:
      "https://www.biocoop.fr/media/catalog/product/2/4/2486627559-3322693000936-monbio-lentilles_blondes_france_500g-qu1049.jpeg?quality=80&bg-color=255,255,255&fit=bounds&height=206&width=206&canvas=206:206",
    categories: ["Épicerie", "Légumineuse"],
  },
  {
    id: "2",
    label: "Oeufs (6) calibre 53/63 moyen",
    description: "2,75 € / unité",
    price: "2,75 €",
    priceDetails: "6 unités",
    pictureUrl:
      "https://www.biocoop.fr/media/catalog/product/8/9/891750509-3568600000037-biocoop-oeufs_6_calibre_53_63_moyen-na6311.jpeg?quality=80&bg-color=255,255,255&fit=bounds&height=206&width=206&canvas=206:206",
    categories: ["Crémerie", "Oeuf"],
  },
  {
    id: "11",
    label: "Lentilles blondes France 500g",
    description: "9,70 € / Kg",
    price: "44,35 €",
    priceDetails: "500g",
    pictureUrl:
      "https://www.biocoop.fr/media/catalog/product/2/4/2486627559-3322693000936-monbio-lentilles_blondes_france_500g-qu1049.jpeg?quality=80&bg-color=255,255,255&fit=bounds&height=206&width=206&canvas=206:206",
    categories: ["Épicerie", "Légumineuse"],
  },
  {
    id: "21",
    label: "Oeufs (6) calibre 53/63 moyen",
    description: "2,75 € / unité",
    price: "2,75 €",
    priceDetails: "6 unités",
    pictureUrl:
      "https://www.biocoop.fr/media/catalog/product/8/9/891750509-3568600000037-biocoop-oeufs_6_calibre_53_63_moyen-na6311.jpeg?quality=80&bg-color=255,255,255&fit=bounds&height=206&width=206&canvas=206:206",
    categories: ["Crémerie", "Oeuf"],
  },
  {
    id: "13",
    label: "Lentilles blondes France 500g",
    description: "9,70 € / Kg",
    price: "4,35 €",
    priceDetails: "500g",
    pictureUrl:
      "https://www.biocoop.fr/media/catalog/product/2/4/2486627559-3322693000936-monbio-lentilles_blondes_france_500g-qu1049.jpeg?quality=80&bg-color=255,255,255&fit=bounds&height=206&width=206&canvas=206:206",
    categories: ["Épicerie", "Légumineuse"],
  },
  {
    id: "23",
    label: "Oeufs (6) calibre 53/63 moyen",
    description: "2,75 € / unité",
    price: "2,75 €",
    priceDetails: "6 unités",
    pictureUrl:
      "https://www.biocoop.fr/media/catalog/product/8/9/891750509-3568600000037-biocoop-oeufs_6_calibre_53_63_moyen-na6311.jpeg?quality=80&bg-color=255,255,255&fit=bounds&height=206&width=206&canvas=206:206",
    categories: ["Crémerie", "Oeuf"],
  },
  {
    id: "14",
    label: "Lentilles blondes France 500g",
    description: "9,70 € / Kg",
    price: "4,35 €",
    priceDetails: "500g",
    pictureUrl:
      "https://www.biocoop.fr/media/catalog/product/2/4/2486627559-3322693000936-monbio-lentilles_blondes_france_500g-qu1049.jpeg?quality=80&bg-color=255,255,255&fit=bounds&height=206&width=206&canvas=206:206",
    categories: ["Épicerie", "Légumineuse"],
  },
  {
    id: "24",
    label: "Oeufs (6) calibre 53/63 moyen",
    description: "2,75 € / unité",
    price: "2,75 €",
    priceDetails: "6 unités",
    pictureUrl:
      "https://www.biocoop.fr/media/catalog/product/8/9/891750509-3568600000037-biocoop-oeufs_6_calibre_53_63_moyen-na6311.jpeg?quality=80&bg-color=255,255,255&fit=bounds&height=206&width=206&canvas=206:206",
    categories: ["Crémerie", "Oeuf"],
  },
  {
    id: "15",
    label: "Lentilles blondes France 500g",
    description: "9,70 € / Kg",
    price: "4,35 €",
    priceDetails: "500g",
    pictureUrl:
      "https://www.biocoop.fr/media/catalog/product/2/4/2486627559-3322693000936-monbio-lentilles_blondes_france_500g-qu1049.jpeg?quality=80&bg-color=255,255,255&fit=bounds&height=206&width=206&canvas=206:206",
    categories: ["Épicerie", "Légumineuse"],
  },
  {
    id: "25",
    label: "Oeufs (6) calibre 53/63 moyen",
    description: "2,75 € / unité",
    price: "2,75 €",
    priceDetails: "6 unités",
    pictureUrl:
      "https://www.biocoop.fr/media/catalog/product/8/9/891750509-3568600000037-biocoop-oeufs_6_calibre_53_63_moyen-na6311.jpeg?quality=80&bg-color=255,255,255&fit=bounds&height=206&width=206&canvas=206:206",
    categories: ["Crémerie", "Oeuf"],
  },
  {
    id: "16",
    label: "Lentilles blondes France 500g",
    description: "9,70 € / Kg",
    price: "4,35 €",
    priceDetails: "500g",
    pictureUrl:
      "https://www.biocoop.fr/media/catalog/product/2/4/2486627559-3322693000936-monbio-lentilles_blondes_france_500g-qu1049.jpeg?quality=80&bg-color=255,255,255&fit=bounds&height=206&width=206&canvas=206:206",
    categories: ["Épicerie", "Légumineuse"],
  },
  {
    id: "26",
    label: "Oeufs (6) calibre 53/63 moyen",
    description: "2,75 € / unité",
    price: "2,75 €",
    priceDetails: "6 unités",
    pictureUrl:
      "https://www.biocoop.fr/media/catalog/product/8/9/891750509-3568600000037-biocoop-oeufs_6_calibre_53_63_moyen-na6311.jpeg?quality=80&bg-color=255,255,255&fit=bounds&height=206&width=206&canvas=206:206",
    categories: ["Crémerie", "Oeuf"],
  },
  {
    id: "17",
    label: "Lentilles blondes France 500g",
    description: "9,70 € / Kg",
    price: "4,35 €",
    priceDetails: "500g",
    pictureUrl:
      "https://www.biocoop.fr/media/catalog/product/2/4/2486627559-3322693000936-monbio-lentilles_blondes_france_500g-qu1049.jpeg?quality=80&bg-color=255,255,255&fit=bounds&height=206&width=206&canvas=206:206",
    categories: ["Épicerie", "Légumineuse"],
  },
  {
    id: "27",
    label: "Oeufs (6) calibre 53/63 moyen",
    description: "2,75 € / unité",
    price: "2,75 €",
    priceDetails: "6 unités",
    pictureUrl:
      "https://www.biocoop.fr/media/catalog/product/8/9/891750509-3568600000037-biocoop-oeufs_6_calibre_53_63_moyen-na6311.jpeg?quality=80&bg-color=255,255,255&fit=bounds&height=206&width=206&canvas=206:206",
    categories: ["Crémerie", "Oeuf"],
  },
];

export default products;
