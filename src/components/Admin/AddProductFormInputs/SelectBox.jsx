// import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

import AdminAddProductHook from "../../../Listeners/Product/AdminAddProduct.hook";

import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
// Styles
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import SelectBoxHooks from "../../../Listeners/Product/AddProductFormInputs/SelectBox.hook";

export function SubCategorySelect() {
  const { subCategories, budges, addSubCategory } = SelectBoxHooks();

  return (
    <>
      <MultiSelect
        options={subCategories}
        display="chip"
        onChange={addSubCategory}
        optionLabel="name"
        value={budges}
        optionValue="_id"
        placeholder="اضف تصنيف فرعي"
        maxSelectedLabels={3}
        showSelectAll={false}
        className="w-full"
      />
    </>
  );
}

export function MainCategorySelect() {
  const {
    categories, //> All Categories
    selectMainCategory, //> Set Main Category
    mainCategory,
  } = SelectBoxHooks();

  return (
    <Dropdown
      value={mainCategory}
      onChange={selectMainCategory}
      options={categories}
      optionLabel="name"
      optionValue="_id"
      placeholder="التصنيف الرئيسي"
      className="w-full"
    />
  );
}
export function BrandSelect() {
  const { brands, selectedBrand, setSelectedBrand } = SelectBoxHooks();

  return (
    <Dropdown
      value={selectedBrand}
      onChange={(e) => setSelectedBrand(e.value)}
      options={brands}
      optionLabel="name"
      optionValue="_id"
      placeholder="الماركة"
      className="w-full"
    />
  );
}

// export default function SubCategorySelect() {
//   const {
//     budges, //> Selected Subcategories
//     selectSubCategory, //> Select Subcategories
//     deleteSubCategory, //> Delete Selected Subcategories
//   } = AdminAddProductHook();

//   const { showModal, subCategories, setShowModal } = SubCategorySelectHook();

//   return (
//     <>
//       <div className="relative cursor-pointer select-none">
//         <div
//           onClick={() => setShowModal(!showModal)}
//           className="relative rounded-lg border border-slate-300 bg-white p-2"
//         >
//           {/* Select Form Title */}
//           اضف تصنيف فرعي
//           <span className="absolute left-[-6px] text-[1.75rem] text-slate-900">
//             {showModal ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
//           </span>
//         </div>
//         {budges?.length > 0 && (
//           <div className="mx-4 my-2 flex flex-wrap items-center gap-2">
//             {/* Budges Of Selected Sub Categories */}
//             {budges.map(({ name }, index) => {
//               return (
//                 <div
//                   key={index}
//                   className="flex w-fit flex-row-reverse items-center gap-4 rounded bg-slate-700 px-2 text-sm text-slate-100"
//                 >
//                   <div
//                     onClick={deleteSubCategory}
//                     className="cursor-pointer text-base hover:text-red-500"
//                   >
//                     &times;
//                   </div>
//                   {name}
//                 </div>
//               );
//             })}
//           </div>
//         )}
//         {/* Select Box */}
//         <select
//           multiple
//           form="newProduct"
//           name="subcategory"
//           className={`${
//             showModal ? "block" : "hidden"
//           } absolute right-0 z-10 max-h-64 w-full scroll-m-0 bg-white px-2 outline-none`}
//         >
//           {/* Value Must Equal To  */}
//           {subCategories?.length > 0 ? (
//             subCategories?.map((subCategory) => {
//               const budgesNames = budges.map((budge) => budge.name); //> Array of budges name

//               return (
//                 <option
//                   onClick={selectSubCategory}
//                   key={subCategory["_id"]}
//                   value={subCategory["_id"]}
//                   hidden={budgesNames.includes(subCategory["name"])}
//                 >
//                   {subCategory.name}
//                 </option>
//               );
//             })
//           ) : (
//             <option disabled>لا يوجد تصنيفات فرعية</option>
//           )}
//         </select>
//       </div>
//     </>
//   );
// }

//! <option> element Must Rendered As Array
