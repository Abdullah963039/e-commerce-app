import { useStore } from "../../hooks";
import { useEffect } from "react";

export default function AllBrandsContainerHook(limit) {
  const { allBrands, loading, getAllBrands, getAllBrandsByPage } = useStore();
  const { data: brands } = allBrands;

  useEffect(() => {
    getAllBrands(limit);
  }, []);

  let totalPages = 0; //> Controll Pagenation

  if (allBrands?.paginationResult)
    //> Avoid undefined value
    totalPages = allBrands.paginationResult.numberOfPages; //> Wait For Load Data

  const getPageNumber = (pageNumber) => getAllBrandsByPage(limit, pageNumber); //> Handle Click On Pagination

  return { brands, loading, totalPages, getPageNumber };
}
