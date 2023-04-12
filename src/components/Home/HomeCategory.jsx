import SubTitle from "../Utility/SubTitle";
import CategoryCard from "../Category/CategoryCard";
import img from "../../assets/imgs/clothe.png";
import img2 from "../../assets/imgs/cat2.png";

export default function HomeCategory() {
  return (
    <div className="mt-5">
      <div className="container mx-auto">
        <SubTitle title="التصنيفات" buttonContent="المزيد" href="/categories" />
        <div className="flex flex-wrap items-center justify-between py-3">
          <CategoryCard categroyTitle="ملابس" img={img} />
          <CategoryCard categroyTitle="ملابس" img={img2} />
          <CategoryCard categroyTitle="ملابس" img={img} />
          <CategoryCard categroyTitle="ملابس" img={img} />
          <CategoryCard categroyTitle="ملابس" img={img} />
          <CategoryCard categroyTitle="ملابس" img={img} />
        </div>
      </div>
    </div>
  );
}
