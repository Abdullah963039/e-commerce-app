import { useEffect } from "react";
import img from "../../assets/imgs/brand1.png";
import Pagination from "../Utility/Pagination";
import SubTitle from "../Utility/SubTitle";
import BrandCard from "./BrandCard";
import { useStore } from "../../hooks/useStore";

export default function AllBrandsContainer() {
  const { allBrands, loading, getAllBrands, getAllBrandsByPage } = useStore();
  const { data: brands } = allBrands;

  useEffect(() => {
    getAllBrands();
  }, []);

  let totalPages = 0; //> Controll Pagenation
  if (allBrands?.paginationResult)
    //> Avoid undefined value
    totalPages = allBrands.paginationResult.numberOfPages; //> Wait For Load Data
  const getPageNumber = (pageNumber) => getAllBrandsByPage(pageNumber); //> Handle Click On Pagination

  return (
    <div className="container py-4">
      <div className=" min-h-[calc(100vh-65px)]">
        <SubTitle title={"كل الماركات"} />
        <div className="my-8 flex flex-wrap justify-center gap-4">
          {brands.map((brand, index) => (
            <BrandCard img={brand["image"]} title={brand["name"]} key={index} />
          ))}
        </div>
        <Pagination totalPages={totalPages} onClick={getPageNumber} />
      </div>
    </div>
  );
}
