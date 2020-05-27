const statutWorkflow = ["nouvelle", "imprimee", "preparee", "caisse", "livree"];
const labels = ["Nouvelle", "Imprimée", "Préparée", "Caisse OK", "Livrée"];

export const classForStatut = (value) => ({
  "bg-green-400": value === statutWorkflow[0],
  "bg-green-500": value === statutWorkflow[1],
  "bg-green-600": value === statutWorkflow[2],
  "bg-green-700": value === statutWorkflow[3],
  "bg-green-900": value === statutWorkflow[4],
});

export const sortByWorkflow = (a, b) => {
  return statutWorkflow.indexOf(a) - statutWorkflow.indexOf(b);
};

export const previousStatutOf = (statut) => {
  const index = statutWorkflow.indexOf(statut);
  if (index <= 0) {
    return null;
  }
  return statutWorkflow[index - 1];
};

export const nextStatutOf = (statut) => {
  const index = statutWorkflow.indexOf(statut);
  if (index === -1 || index + 1 > statutWorkflow.length - 1) {
    return null;
  }
  return statutWorkflow[index + 1];
};

export const labelOf = (statut) => labels[statutWorkflow.indexOf(statut)];
