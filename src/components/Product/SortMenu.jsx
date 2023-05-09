// icons
import { TbSortDescending } from "react-icons/tb";

function SortItem({ text, selectSort, value = "" }) {
  return (
    <li className="py-1">
      <label className="flex cursor-pointer items-center gap-1 text-xs">
        <input
          type="radio"
          name="sort"
          className="peer appearance-none"
          value={value}
          defaultChecked={localStorage.getItem("sort") === value}
          onClick={selectSort}
        />
        <span className="peer-checked:text-sm peer-checked:font-bold peer-checked:text-slate-900">
          {text}
        </span>
      </label>
    </li>
  );
}

export function SortMenu({ onClick }) {
  const selectSort = (e) => {
    localStorage.setItem("sort", e.target.value);
    onClick();
  };

  return (
    <div className="peer/menu relative flex select-none items-center gap-1">
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
        <SortItem selectSort={selectSort} text={"بدون ترتيب"} />
        <SortItem
          selectSort={selectSort}
          value={"sold"}
          text={"الاكثر مبيعا"}
        />
        <SortItem
          selectSort={selectSort}
          value={"-quantity"}
          text={"الاكثر كمية"}
        />
        <SortItem selectSort={selectSort} value={"rate"} text={"التقييم"} />
        <SortItem
          selectSort={selectSort}
          value={"price"}
          text={"سعر من الأقل"}
        />
        <SortItem
          selectSort={selectSort}
          value={"-price"}
          text={"سعر من الاعلى"}
        />
      </ul>
    </div>
  );
}
