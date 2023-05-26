export const currencyFormatter = (number) => {
  const fr = new Intl.NumberFormat("ar-EG", {
    style: "currency",
    currency: "EGP",
    currencyDisplay: "name",
    maximumFractionDigits: 0,
    useGrouping: false,
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

export const dateFormatter = (date) => {
  const d = new Date(date);
  const f = new Intl.DateTimeFormat("en-US");

  return f.format(d);
};
