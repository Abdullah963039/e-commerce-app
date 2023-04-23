import { useState, useEffect } from "react";
import { useStore } from "../../hooks/useStore";

// !64424fc74a79dbe4047340b2

export default function MultiSelectFormHook(categoryId) {
  const { subCategories, loading, getAllSubCategoriesOnCategory } = useStore();
  const [selectedCategoriesArray, setSelectedCategoriesArray] = useState([]); //? Array Of Selected Choices
  const [showSubCategories, setShowSubCategories] = useState(false); //? Show Select Box

  //?  Control Selected Choice:
  const handleSelect = (e) => addChoice(e.target.value);

  //? Delete Choice:
  const deleteChoice = (e) => {
    //> e.target.nextSibling.data : Represent Value Of Created Badge
    setSelectedCategoriesArray((choices) => [
      ...choices.filter((choice) => choice !== e.target.nextSibling?.data),
    ]);
  };

  //? Add Selected Choice To []
  const addChoice = (choice) => {
    //! choice is id XX must be cat name ...
    // > Check If Selected Choice Is Allready Selected
    if (selectedCategoriesArray.find((value) => value === choice))
      return selectedCategoriesArray;
    setSelectedCategoriesArray((state) => [...state, choice]);
  };

  //? Get All Sub Categories Of Category
  useEffect(() => {
    getAllSubCategoriesOnCategory(categoryId);
    console.log(subCategories);
  }, [categoryId]);

  return {
    selectedCategoriesArray,
    showSubCategories,
    subCategories,
    loading,
    setShowSubCategories,
    handleSelect,
    deleteChoice,
  };
}
