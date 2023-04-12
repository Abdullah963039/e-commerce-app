import { HomeSlider } from "../../components/Home/Slider";
import HomeCategory from "../../components/Home/HomeCategory";
import ProductsList from "../../components/Home/ProductsList";
import DiscountSection from "../../components/Home/DiscountSection";
import BrandsSection from "../../components/Home/BrandsSection";

const slides = [
  {
    img: "/src/assets/svgs/shopping.svg",
    text: "حسم قد يصل الى 40%",
  },
  {
    img: "/src/assets/svgs/shopping_app.svg",
    text: "حسم قد يصل الى 40%",
  },
  {
    img: "/src/assets/svgs/window-shopping.svg",
    text: "حسم قد يصل الى 40%",
  },
  {
    img: "/src/assets/svgs/shopping.svg",
    text: "حسم قد يصل الى 40%",
  },
  {
    img: "/src/assets/svgs/shopping_app.svg",
    text: "حسم قد يصل الى 40%",
  },
  {
    img: "/src/assets/svgs/window-shopping.svg",
    text: "حسم قد يصل الى 40%",
  },
];

export default function Home() {
  return (
    <div className="bg-slate-50">
      <div className="h-[300px] overflow-hidden bg-sky-100 py-8 text-slate-600">
        <HomeSlider slides={slides} />
      </div>
      <HomeCategory />
      <ProductsList title={"الاكثر مبيعا"} buttonContent={"المزيد"} />
      <DiscountSection />
      <ProductsList title={"الاكثر تقييما"} buttonContent={"المزيد"} />
      <ProductsList title={"أحدث الأزياء"} buttonContent={"المزيد"} />
      <BrandsSection />
    </div>
  );
}
