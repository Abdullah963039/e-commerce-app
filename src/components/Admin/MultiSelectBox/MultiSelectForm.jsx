import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useState } from "react";

//! <option> element Must Rendered As Array

export default function MultiSelectForm({ subCategories = [] }) {
  const [selectedCategoriesArray, setSelectedCategoriesArray] = useState([]); //? Array Of Selected Choices
  const [showSubCategories, setShowSubCategories] = useState(false); //? Show Select Box

  //?  Control Selected Choice:
  function handleSelect(e) {
    addChoice(e.target.value);
  }

  //? Delete Choice:
  const deleteChoice = (e) => {
    //> e.target.nextSibling.data : Represent Value Of Created Badge
    setSelectedCategoriesArray((choices) => [
      ...choices.filter((choice) => choice !== e.target.nextSibling.data),
    ]);
  };

  //? Add Selected Choice To []
  const addChoice = (choice) => {
    // > Check If Selected Choice Is Allready Selected
    if (selectedCategoriesArray.find((value) => value === choice))
      return selectedCategoriesArray;
    setSelectedCategoriesArray((state) => [...state, choice]);
  };

  return (
    <div className="relative">
      <div
        onClick={() => setShowSubCategories(!showSubCategories)}
        className="relative rounded-lg border border-slate-300 bg-white p-2"
      >
        {/* Select Form Title */}
        اضف تصنيف فرعي
        <span className="absolute left-[-6px] text-[1.75rem] text-slate-900">
          {showSubCategories ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </span>
      </div>
      {selectedCategoriesArray && (
        <div className="my-2 flex flex-wrap items-center gap-2">
          {/* Budges Of Selected Sub Categories */}
          {selectedCategoriesArray.map((choice, index) => {
            return (
              <div
                key={index}
                className="flex w-fit flex-row-reverse items-center gap-4 rounded bg-slate-700 px-2 text-sm text-slate-100"
              >
                <div
                  onClick={(e) => deleteChoice(e)}
                  className="cursor-pointer text-base hover:text-red-500"
                >
                  &times;
                </div>
                {choice}
              </div>
            );
          })}
        </div>
      )}
      {/* Select Box */}
      <select
        multiple
        className={`${
          showSubCategories ? "block" : "hidden"
        } absolute right-0 w-full scroll-m-0 bg-white px-2 outline-none`}
        id="subCategories"
        name="subCategories"
        onClick={(e) => handleSelect(e)}
      >
        {/* Value Must Equal To  */}
        {subCategories.length !== 0 ? (
          subCategories.map((subCategory, index) => (
            <option key={index} value={subCategory}>
              {subCategory}
            </option>
          ))
        ) : (
          <option disabled>لا يوجد تصنيفات فرعية</option>
        )}
      </select>
    </div>
  );
}
