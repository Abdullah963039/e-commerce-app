// components
import {
  BrandsSection,
  DiscountSection,
  HomeCategory,
  HomeSlider,
  ProductsList,
} from "../../components/Home";
import { Suspense } from "react";
import { Loading } from "../../components/Utility";

// hooks
import { HomeProductListHook } from "../../Listeners/Product";

export default function Home() {
  const { mostSold, fashionProducts, mostRated } = HomeProductListHook();

  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
}
