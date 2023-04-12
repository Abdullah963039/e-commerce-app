import img from "../../assets/imgs/brand1.png";
import Pagination from "../Utility/Pagination";
import SubTitle from "../Utility/SubTitle";
import BrandCard from "./BrandCard";

export default function AllBrandsContainer() {
  return (
    <div className="container">
      <div className=" min-h-[calc(100vh-65px)]">
        <SubTitle title={"كل الماركات"} />
        <div className="my-8 flex flex-wrap justify-center gap-4">
          <BrandCard img={img} categroyTitle={"cloth"} />
          <BrandCard img={img} categroyTitle={"cloth"} />
          <BrandCard img={img} categroyTitle={"cloth"} />
          <BrandCard img={img} categroyTitle={"cloth"} />
          <BrandCard img={img} categroyTitle={"cloth"} />
          <BrandCard img={img} categroyTitle={"cloth"} />
          <BrandCard img={img} categroyTitle={"cloth"} />
          <BrandCard img={img} categroyTitle={"cloth"} />
          <BrandCard img={img} categroyTitle={"cloth"} />
          <BrandCard img={img} categroyTitle={"cloth"} />
          <BrandCard img={img} categroyTitle={"cloth"} />
          <BrandCard img={img} categroyTitle={"cloth"} />
          <BrandCard img={img} categroyTitle={"cloth"} />
          <BrandCard img={img} categroyTitle={"cloth"} />
          <BrandCard img={img} categroyTitle={"cloth"} />
          <BrandCard img={img} categroyTitle={"cloth"} />
          <BrandCard img={img} categroyTitle={"cloth"} />
          <BrandCard img={img} categroyTitle={"cloth"} />
        </div>
        <Pagination />
      </div>
    </div>
  );
}
