import { SubTitle } from "../Utility";
import { CategoryCard } from "../Category";
import { AllCategoryContainerHook } from "../../Listeners/Category";

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
            <div className="flex flex-wrap items-center justify-evenly py-3">
              {categories?.length > 0 &&
                categories.map((categroy) => (
                  <CategoryCard key={categroy["_id"]} category={categroy} />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
