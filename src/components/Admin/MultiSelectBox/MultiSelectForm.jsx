import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import MultiSelectFormHook from "../../../Listeners/Product/MultiSelectForm.hook";

//! <option> element Must Rendered As Array

export default function MultiSelectForm({
  categryId = "64424fc74a79dbe4047340b2",
}) {
  const {
    selectedCategoriesArray,
    showSubCategories,
    loading,
    subCategories,
    setShowSubCategories,
    handleSelect,
    deleteChoice,
  } = MultiSelectFormHook(categryId);

  return (
    <div className="relative cursor-pointer">
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
      {selectedCategoriesArray.length > 0 && (
        <div className="my-2 flex flex-wrap items-center gap-2">
          {/* Budges Of Selected Sub Categories */}
          {selectedCategoriesArray.map((choice, index) => {
            return (
              <div
                key={index}
                className="flex w-fit flex-row-reverse items-center gap-4 rounded bg-slate-700 px-2 text-sm text-slate-100"
              >
                <div
                  onClick={deleteChoice}
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
        } absolute right-0 z-10 w-full scroll-m-0 bg-white px-2 outline-none`}
        id="subCategories"
        name="subCategories"
        onClick={handleSelect}
      >
        {/* Value Must Equal To  */}
        {subCategories?.length > 0 ? (
          subCategories?.map((subCategory) => (
            <option key={subCategory["_id"]} value={subCategory["_id"]}>
              {subCategory.name}
            </option>
          ))
        ) : (
          <option disabled>لا يوجد تصنيفات فرعية</option>
        )}
      </select>
    </div>
  );
}
