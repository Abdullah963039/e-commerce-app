import Pagination from "../Utility/Pagination";
import SubTitle from "../Utility/SubTitle";
import BrandCard from "./BrandCard";
import { Loading } from "../Utility/Loading";

import AllBrandsContainerHook from "../../Listeners/Brand/AllBrandsContainer.hook";

export default function AllBrandsContainer() {
  const { brands, loading, totalPages, getPageNumber } =
    AllBrandsContainerHook();

  return (
    <>
      <div className="container py-4">
        <div className=" min-h-[calc(100vh-65px)]">
          <SubTitle title={"كل الماركات"} />
          <div className="my-8 flex flex-wrap justify-center gap-4">
            {brands.map((brand, index) => (
              <BrandCard
                img={brand["image"]}
                title={brand["name"]}
                key={index}
              />
            ))}
          </div>
          <Pagination totalPages={totalPages} onClick={getPageNumber} />
        </div>
      </div>
      {loading && <Loading />}
    </>
  );
}
