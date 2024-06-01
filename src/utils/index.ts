export const normalizeString = (str: string = "") =>
  str.toLowerCase().normalize("NFKD").replace(/[^\w]/g, "");
