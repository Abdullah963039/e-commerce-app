import ProductsList from "../../components/Home/ProductsList";
import ProductDetails from "../../components/Product/Details/ProductDetails";
import RateContainer from "../../components/Rates/RateContainer";

export default function ProductDetailsPage() {
  return (
    <div className="container flex flex-col gap-6">
      {/* Product Description */}
      <ProductDetails />
      {/* Rate Component */}
      <RateContainer />
      {/* Products May You Like */}
      <div className="mb-6 rounded-lg px-2">
        <ProductsList title={"منتجات قد تعجبك"} buttonContent={"المزيد"} />
      </div>
    </div>
  );
}
