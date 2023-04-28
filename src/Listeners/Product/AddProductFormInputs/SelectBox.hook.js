import { useState } from "react";
import { useStore } from "../../../hooks/useStore";
import { useEffect } from "react";

export default function SelectBoxHooks() {
  const {
    subCategories,
    allCategories: { data: categories },
    allBrands: { data: brands },
    getAllCategories,
    getAllBrands,
    getAllSubCategoriesOnCategory,
  } = useStore();

  const [mainCategory, setMainCategory] = useState(null); //> Main Category State
  const [budges, setBudges] = useState([]); //> Selected Subcategories State
  const [selectedBrand, setSelectedBrand] = useState(null); //> Selected Subcategories State

  const addSubCategory = (e) => setBudges(e.value); //> Add Subcategory id Subcategories State
  const resetSubCategories = () => setBudges([]); //> Reset All Subcategories

  const selectMainCategory = (e) => {
    resetSubCategories();
    setMainCategory(e.value);
  };

  useEffect(() => {
    getAllCategories();
    getAllBrands();
    if (mainCategory !== null) getAllSubCategoriesOnCategory(mainCategory);

    return () => {
      return;
    };
  }, [mainCategory]);

  return {
    // For Sub Category Select
    subCategories,
    budges,
    addSubCategory,
    resetSubCategories,
    // For Main Category Select
    mainCategory,
    categories,
    selectMainCategory,
    // For Brand Select
    brands,
    selectedBrand,
    setSelectedBrand,
  };
}
