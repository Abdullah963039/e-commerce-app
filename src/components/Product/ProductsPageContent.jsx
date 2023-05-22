// hooks
import ProductsPageContentHook from "../../Listeners/Product/ProductsPageContent.hook";

// components
import { Loading } from "../Utility/Loading";
import ProductsContainer from "./ProductsContainer";
import SelectionSidbar from "./SelectionSidbar";
import { SortMenu } from "./SortMenu";

export default function ProductsPageContent() {
  const { loading, allProducts } = ProductsPageContentHook();
  return (
    <>
      {loading && <Loading />}
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
