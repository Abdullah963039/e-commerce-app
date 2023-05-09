// hooks
import { SelectionSidbarHook } from "../../Listeners/Search/SelectionSidbar.hook";

export default function SelectionSidbar() {
  const {
    allCategories: { data: categories },
    allBrands: { data: brands },
    selectCategory,
    selectBrand,
    priceFrom,
    priceTo,
    onChangePriceFrom,
    onChangePriceTo,
  } = SelectionSidbarHook();

  return (
    <aside className="flex w-full max-w-[180px] select-none flex-col gap-4">
      <div className="flex flex-col gap-4 pb-3">
        {/* Categories */}
        <div>
          <p className="mb-2 text-xl font-bold">الفئة</p>
          {categories ? (
            categories.map((category, index) => (
              <div className="flex items-center gap-2 pr-2" key={index}>
                <input
                  id={category["_id"]}
                  value={category["_id"]}
                  type="checkbox"
                  className="peer"
                  name="category"
                  onClick={selectCategory}
                  defaultChecked={localStorage
                    .getItem("categories")
                    .includes(category["_id"])}
                />
                <label
                  htmlFor={category["_id"]}
                  className="text-sm peer-checked:font-bold"
                >
                  {category["name"]}
                </label>
              </div>
            ))
          ) : (
            <span>لا يوجد تصنيفات</span>
          )}
        </div>
        {/* Brands */}
        <div>
          <p className="mb-2 text-xl font-bold">الماركة</p>
          {brands ? (
            brands.map((brand, index) => (
              <div className="flex items-center gap-2 pr-2" key={index}>
                <input
                  id={brand["_id"]}
                  type="checkbox"
                  className="peer"
                  name={"brand"}
                  value={brand["_id"]}
                  onClick={selectBrand}
                  defaultChecked={localStorage
                    .getItem("brands")
                    .includes(brand["_id"])}
                />
                <label
                  htmlFor={brand["_id"]}
                  className="text-sm peer-checked:font-bold"
                >
                  {brand["name"]}
                </label>
              </div>
            ))
          ) : (
            <span>لا يوجد ماركات</span>
          )}
        </div>
      </div>
      <div className="flex flex-col pb-3">
        <p className="mb-4 text-xl font-bold">السعر</p>
        <div className="mb-2 flex items-center gap-2 pr-2">
          <span className="text-sm">من</span>
          <input
            type="number"
            min={0}
            inputMode="numeric"
            className="max-w-[5rem] border-slate-200 text-center outline-none"
            value={priceFrom}
            onChange={onChangePriceFrom}
          />
        </div>
        <div className="flex items-center gap-2 pr-2">
          <span className="text-sm">الى</span>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            className="max-w-[5rem] border-slate-200 text-center outline-none"
            value={priceTo}
            onChange={onChangePriceTo}
          />
        </div>
      </div>
    </aside>
  );
}
