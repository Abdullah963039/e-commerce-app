import img from "../../assets/imgs/cat2.png";
import Pagination from "../Utility/Pagination";
import SubTitle from "../Utility/SubTitle";
import CategoryCard from "./CategoryCard";

export default function AllCategoryContainer() {
  return (
    <div className="container py-4">
      <div className=" min-h-[calc(100vh-65px)]">
        <SubTitle title={"كل التصنيفات"} />
        <div className="my-8 flex flex-wrap justify-center gap-0">
          <CategoryCard img={img} categroyTitle={"cloth"} />
          <CategoryCard img={img} categroyTitle={"cloth"} />
          <CategoryCard img={img} categroyTitle={"cloth"} />
          <CategoryCard img={img} categroyTitle={"cloth"} />
          <CategoryCard img={img} categroyTitle={"cloth"} />
          <CategoryCard img={img} categroyTitle={"cloth"} />
          <CategoryCard img={img} categroyTitle={"cloth"} />
          <CategoryCard img={img} categroyTitle={"cloth"} />
          <CategoryCard img={img} categroyTitle={"cloth"} />
          <CategoryCard img={img} categroyTitle={"cloth"} />
          <CategoryCard img={img} categroyTitle={"cloth"} />
          <CategoryCard img={img} categroyTitle={"cloth"} />
        </div>
        <Pagination />
      </div>
    </div>
  );
}
