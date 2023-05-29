// hooks
import { useEffect } from "react";
import { useStore } from "../../hooks";

// utils
import { getSession, toQueryString } from "../../utils";

export default function ProductsPageContentHook() {
  /**
   *
   * @param {string | undefined} additionalParam must be "&key=value"
   * @returns {Promise<void>}
   */
  async function makeSearch(additionalParam = "") {
    const finalQuery = queryParams() + additionalParam;

    await getAllProductsBySearch(finalQuery);
  }

  // Global state
  const { allProducts, getAllProductsBySearch, loading } = useStore();

  useEffect(() => {
    // This function below is the same as getAllProducts As long as there are no search values
    makeSearch();
  }, []);

  const handlePagination = async (pageNumber) =>
    await makeSearch(`&page=${pageNumber}`);

  return { allProducts, loading, handlePagination, makeSearch };
}

/**
 * !final query string
 * No Params need to be passed
 *
 * this function checks from session storage values
 * and returns object with non-empty values
 * @return {string}
 */
function queryParams() {
  let params = []; // query non-empty params

  // get values from session storage
  const keyword = getSession("keyword"),
    sort = getSession("sort"),
    categories = getSession("categories"),
    brands = getSession("brands"),
    minPrice = getSession("minPrice"),
    maxPrice = getSession("maxPrice");

  // convert keyword to query param
  keyword !== "" &&
    keyword != null &&
    params.push(toQueryString("keyword", keyword));
  // convert sort to query param
  sort !== "" && sort != null && params.push(toQueryString("sort", sort));
  // convert categories to query param
  categories?.length > 0 && params.push(toQueryString("category", categories));
  // convert brands to query param
  brands?.length > 0 && params.push(toQueryString("brand", brands));
  // convert min price to query param
  minPrice !== "" &&
    minPrice != null &&
    minPrice !== "0" &&
    params.push(toQueryString("price[gte]", minPrice));
  // convert max price to query param
  maxPrice !== "" &&
    maxPrice != null &&
    maxPrice !== "0" &&
    params.push(toQueryString("price[lte]", maxPrice));

  return params.join("&"); // retun params as ready query string
}
