import { useEffect } from "react";
import { useStore } from "../../hooks/useStore";

export default function AllCategoryContainerHook() {
  //> Use Categories Store ..
  const { allCategories, getAllCategories, loading, getAllCategoriesByPage } =
    useStore(); //> Use Global Store
  const { data: categories } = allCategories; //> Destruct All Categories

  //> Fetching Data ..
  useEffect(() => {
    getAllCategories();
  }, []);

  let totalPages = 0; //> Controll Pagenation
  if (allCategories?.paginationResult)
    //> Avoid undefined value
    totalPages = allCategories.paginationResult.numberOfPages; //> Wait For Load Data

  const getPageNumber = (pageNumber) => getAllCategoriesByPage(pageNumber); //> Handle Click On Pagination

  return { categories, loading, totalPages, getPageNumber };
}
