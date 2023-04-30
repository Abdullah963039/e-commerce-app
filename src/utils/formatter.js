export const currencyFormatter = (number) => {
  const fr = new Intl.NumberFormat("ar-EG", {
    style: "currency",
    currency: "EGP",
    currencyDisplay: "name",
    maximumFractionDigits: 0,
  });

  return fr.format(number);
};

export const numberFormatter = (number) => {
  const fr = new Intl.NumberFormat("ar-EG", {
    useGrouping: true,
    maximumFractionDigits: 2,
  });

  return fr.format(number);
};
