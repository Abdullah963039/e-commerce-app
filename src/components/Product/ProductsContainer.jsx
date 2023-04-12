import Product from "./Product";

const STYLE = {
  gridContainer: "grid grid-cols-12 gap-4",
  singleCard: "col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3",
};

export default function ProductsContainer() {
  return (
    <div className={STYLE.gridContainer}>
      <Product className={STYLE.singleCard} />
      <Product className={STYLE.singleCard} />
      <Product className={STYLE.singleCard} />
      <Product className={STYLE.singleCard} />
      <Product className={STYLE.singleCard} />
      <Product className={STYLE.singleCard} />
      <Product className={STYLE.singleCard} />
      <Product className={STYLE.singleCard} />
    </div>
  );
}
