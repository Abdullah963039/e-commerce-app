import { Product } from "../Product";
import { SubTitle } from "../Utility";

export default function ProductsList({
  title,
  buttonContent,
  productsList = [],
}) {
  return (
    <>
      {productsList.length > 0 && (
        <div className="container">
          {title && buttonContent && (
            <SubTitle
              title={title}
              buttonContent={buttonContent}
              href="/products"
            />
          )}
          <div className="mb-5 flex w-full flex-wrap items-stretch gap-4">
            {productsList.map((product, index) => (
              <Product product={product} key={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
