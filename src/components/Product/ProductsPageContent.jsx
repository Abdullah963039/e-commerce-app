import ProductsContainer from "./ProductsContainer";
import SelectionSidbar from "./SelectionSidbar";
import { TbSortDescending } from "react-icons/tb";

export default function ProductsPageContent() {
  return (
    <div className="container mb-4">
      <div className="flex items-center justify-between py-4">
        {/* Stack : Products Count & SortBy Menu */}
        <div className="text-2xl font-bold">Products Count</div>
        <div className="relative flex items-center gap-1">
          <input type="checkbox" id="sort" className="peer appearance-none" />
          <label
            htmlFor="sort"
            className="flex cursor-pointer select-none items-center gap-1"
          >
            <TbSortDescending className="text-xl" />
            <span>ترتيب حسب</span>
          </label>
          {/* Sort Menu */}
          <ul className="invisible absolute top-[110%] z-10 flex w-[150px] flex-col rounded-md bg-white px-3 py-2 shadow-lg peer-checked:visible">
            <li className="py-1">
              <label className="flex items-center gap-1 text-xs">
                <input
                  type="radio"
                  name="sort"
                  className="peer appearance-none"
                />
                <span className="peer-checked:font-bold peer-checked:text-sky-600">
                  حسب الاسم
                </span>
              </label>
            </li>
            <li className="py-1">
              <label className="flex items-center gap-1 text-xs">
                <input
                  type="radio"
                  name="sort"
                  className="peer appearance-none"
                />
                <span className="peer-checked:font-bold peer-checked:text-sky-600">
                  التقييم
                </span>
              </label>
            </li>
            <li className="py-1">
              <label className="flex items-center gap-1 text-xs">
                <input
                  type="radio"
                  name="sort"
                  className="peer appearance-none"
                />
                <span className="peer-checked:font-bold peer-checked:text-sky-600">
                  التاريخ
                </span>
              </label>
            </li>
            <li className="py-1">
              <label className="flex items-center gap-1 text-xs">
                <input
                  type="radio"
                  name="sort"
                  className="peer appearance-none"
                />
                <span className="peer-checked:font-bold peer-checked:text-sky-600">
                  سعر من الاعلى
                </span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <SelectionSidbar />
        <ProductsContainer />
      </div>
    </div>
  );
}
