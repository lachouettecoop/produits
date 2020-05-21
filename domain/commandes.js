const statutWorkflow = [
  "nouvelle",
  "imprimee",
  "preparation",
  "prete",
  "livree",
];

export const classForStatut = (value) => ({
  "bg-green-400": value === "nouvelle",
  "bg-green-500": value === "imprimee",
  "bg-green-600": value === "preparation",
  "bg-green-700": value === "prete",
  "bg-green-900": value === "livree",
});

export const sortByWorkflow = (a, b) => {
  return statutWorkflow.indexOf(a) - statutWorkflow.indexOf(b);
};
