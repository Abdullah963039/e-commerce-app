import { Pagination, SubTitle } from "../Utility";
import { BrandCard } from "./";
import { Loading } from "../Utility";

import { AllBrandsContainerHook } from "../../Listeners/Brand";

export default function AllBrandsContainer() {
  const { brands, loading, totalPages, getPageNumber } =
    AllBrandsContainerHook();

  return (
    <>
      <div className="container py-4">
        <div className=" min-h-[calc(100vh-65px)]">
          <SubTitle title={"كل الماركات"} />
          <div className="my-8 flex flex-wrap justify-center gap-4">
            {brands?.map((brand) => (
              <BrandCard brand={brand} key={brand["_id"]} />
            ))}
          </div>
          <Pagination totalPages={totalPages} onClick={getPageNumber} />
        </div>
      </div>
      {loading && <Loading />}
    </>
  );
}
