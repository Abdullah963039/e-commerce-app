// hooks
import { ProductsPageContentHook } from "../../Listeners/Product";

// components
import { ProductsContainer, SelectionSidbar, SortMenu } from "./";

export default function ProductsPageContent() {
  const { allProducts } = ProductsPageContentHook();
  return (
    <>
      <div className="container mb-4">
        <div className="flex items-center justify-between py-4">
          {/* Stack : Products Count & SortBy Menu */}
          <div className="text-2xl font-bold">
            {allProducts.length === 0
              ? "لايوجد منتجات لعرضها"
              : `يوجد ${allProducts["results"]} منتج`}
          </div>
          <SortMenu />
        </div>

        <div className="flex">
          <SelectionSidbar />
          <ProductsContainer productsList={allProducts["data"]} />
        </div>
      </div>
    </>
  );
}
