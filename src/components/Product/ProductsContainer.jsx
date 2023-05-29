import { Product } from "./";

const STYLE = {
  gridContainer: "grid grid-cols-12 gap-4",
  singleCard: "col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 max-h-80",
};

export default function ProductsContainer({ productsList = [] }) {
  return (
    <div className={STYLE.gridContainer}>
      {productsList?.map((product, index) => (
        <Product key={index} className={STYLE.singleCard} product={product} />
      ))}
    </div>
  );
}
