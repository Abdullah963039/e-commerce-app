import SubTitle from "../Utility/SubTitle";
import CategoryCard from "../Category/CategoryCard";
import { Loading } from "../Utility/Loading";
import AllCategoryContainerHook from "../../Listeners/Category/AllCategoryContainer.hook";

export default function HomeCategory() {
  const { categories } = AllCategoryContainerHook(6); //? All Component Logics

  return (
    <>
      {categories?.length > 0 && (
        <div className="mt-5">
          <div className="container mx-auto">
            <SubTitle
              title="التصنيفات"
              buttonContent="المزيد"
              href="/categories"
            />
            <div className="flex flex-wrap items-center py-3">
              {categories?.length > 0 &&
                categories.map((categroy, index) => (
                  <CategoryCard
                    key={index}
                    categroyTitle={categroy.name}
                    img={categroy.image}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
