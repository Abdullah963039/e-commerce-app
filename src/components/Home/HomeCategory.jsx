import SubTitle from "../Utility/SubTitle";
import CategoryCard from "../Category/CategoryCard";
import { Loading } from "../Utility/Loading";
import HomeCategoryHook from "../../logics/Category/HomeCategory.hook";

export default function HomeCategory() {
  const { categories, loading } = HomeCategoryHook(); //? All Component Logics

  return (
    <>
      <div className="mt-5">
        <div className="container mx-auto">
          <SubTitle
            title="التصنيفات"
            buttonContent="المزيد"
            href="/categories"
          />
          <div className="flex flex-wrap items-center justify-start py-3">
            {loading ? (
              <Loading />
            ) : (
              categories?.length > 0 &&
              categories
                .slice(0, 6)
                .map((categroy, index) => (
                  <CategoryCard
                    key={index}
                    categroyTitle={categroy.name}
                    img={categroy.image}
                  />
                ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
