import { Pagination, SubTitle, Loading } from "../Utility";
import { CategoryCard } from "./";
import { AllCategoryContainerHook } from "../../Listeners/Category";

export default function AllCategoryContainer() {
  const { categories, loading, totalPages, getPageNumber } =
    AllCategoryContainerHook(18); //? All Component Logics

  return (
    <div className="container py-4">
      <div className=" min-h-[calc(100vh-65px)]">
        <SubTitle title={"كل التصنيفات"} />
        <div className="my-8 flex flex-wrap justify-start gap-0">
          {loading ? (
            <Loading />
          ) : (
            categories?.length > 0 &&
            categories.map((categroy, index) => (
              <CategoryCard
                key={index}
                categroyTitle={categroy.name}
                img={categroy.image}
              />
            ))
          )}
        </div>
        <Pagination totalPages={totalPages} onClick={getPageNumber} />
      </div>
    </div>
  );
}
