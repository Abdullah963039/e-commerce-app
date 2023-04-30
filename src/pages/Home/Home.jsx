import { HomeSlider } from "../../components/Home/Slider";
import HomeCategory from "../../components/Home/HomeCategory";
import ProductsList from "../../components/Home/ProductsList";
import DiscountSection from "../../components/Home/DiscountSection";
import BrandsSection from "../../components/Home/BrandsSection";
import HomeProductListHook from "../../Listeners/Product/Home.ProductList.hook";
import { Loading } from "../../components/Utility/Loading";

export default function Home() {
  const { mostSold, fashionProducts, mostRated, loading } =
    HomeProductListHook();

  return (
    <>
      {loading && <Loading />}
      <div className="bg-slate-200">
        <div className="h-[300px] overflow-hidden bg-slate-300 py-8 text-slate-600">
          <HomeSlider />
        </div>
        <HomeCategory />
        <ProductsList
          title={"الاكثر مبيعا"}
          buttonContent={"المزيد"}
          productsList={mostSold}
        />
        <DiscountSection />
        <ProductsList
          title={"الاكثر تقييما"}
          buttonContent={"المزيد"}
          productsList={mostRated}
        />
        <ProductsList
          title={"أحدث الأزياء"}
          buttonContent={"المزيد"}
          productsList={fashionProducts}
        />
        <BrandsSection />
      </div>
    </>
  );
}
