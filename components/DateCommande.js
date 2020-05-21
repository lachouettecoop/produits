const DateCommande = ({ date }) =>
  `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
    .toString()
    .padStart(
      2,
      "0"
    )}/${date.getFullYear()} à ${date.getHours()}h${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

export default DateCommande;
