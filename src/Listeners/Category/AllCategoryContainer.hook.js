import { useEffect } from "react";
import { useStore } from "../../hooks/useStore";

export default function AllCategoryContainerHook(limit) {
  //> Use Categories Store ..
  const { allCategories, getAllCategories, loading, getAllCategoriesByPage } =
    useStore(); //> Use Global Store
  const { data: categories } = allCategories; //> Destruct All Categories

  //> Fetching Data ..
  useEffect(() => {
    getAllCategories(limit);
  }, []);

  let totalPages = 0; //> Controll Pagenation
  if (allCategories?.paginationResult)
    //> Avoid undefined value
    totalPages = allCategories.paginationResult.numberOfPages; //> Wait For Load Data

  const getPageNumber = (pageNumber) =>
    getAllCategoriesByPage(limit, pageNumber); //> Handle Click On Pagination

  return { categories, loading, totalPages, getPageNumber };
}
