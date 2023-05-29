// hooks
import { useEffect } from "react";
import { useStore } from "../../hooks";
import { useSessionStorage } from "../../hooks/useStorage";
import { useDebounce } from "../../hooks/useDebounce";
import { ProductsPageContentHook } from "../Product";

export const SelectionSidbarHook = () => {
  // doing search
  const { makeSearch } = ProductsPageContentHook();

  // Categories State
  const [selectedCategories, setSelectedCategories] = useSessionStorage(
    "categories",
    []
  );
  // Brands State
  const [selectedBrands, setSelectedBrands] = useSessionStorage("brands", []);
  // Price State
  const [minPrice, setMinPrice] = useSessionStorage("minPrice", "");
  const [maxPrice, setMaxPrice] = useSessionStorage("maxPrice", "");

  // Global store
  const { getAllCategories, allCategories, allBrands, getAllBrands } =
    useStore();

  //? use Effect hook
  useEffect(() => {
    getAllCategories(); //> Get All Categories
    getAllBrands(); //> Get All Brands
  }, []); // runs one time

  //> Categories - Event Controllers
  const selectCategory = (e) => {
    const { checked, value } = e.target;
    // toggling selected category
    checked
      ? setSelectedCategories((previousCategories) => [
          ...previousCategories,
          value,
        ])
      : setSelectedCategories(selectedCategories.filter((id) => id !== value));
  };
  //>  Brands - Event Controllers
  const selectBrand = (e) => {
    const { checked, value } = e.target;

    // toggling selected brand
    checked
      ? setSelectedBrands((previousBrands) => [...previousBrands, value])
      : setSelectedBrands(selectedBrands.filter((id) => id !== value));
  };

  //> MinMax Price - Event Controllers
  const onChangeMinPrice = (e) => setMinPrice(e.target.value);
  const onChangeMaxPrice = (e) => setMaxPrice(e.target.value);

  // Convert arrays to strings to be easy to compare old and current dependencies
  const categoriesString = selectedCategories.toString(),
    brandsString = selectedBrands.toString();

  useDebounce(makeSearch, 1250, [categoriesString, brandsString]); //? Make search request after 1250ms from selecting category or brand
  useDebounce(makeSearch, 1250, [minPrice, maxPrice]); //? Make search request after 1250ms from typing price range

  return {
    allCategories,
    allBrands,
    selectedCategories,
    selectedBrands,
    selectCategory,
    selectBrand,
    minPrice,
    maxPrice,
    onChangeMinPrice,
    onChangeMaxPrice,
  };
};
