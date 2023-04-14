import React from "react";

export default function SelectionSidbar() {
  return (
    <aside className="flex w-full max-w-[180px] select-none flex-col gap-4">
      <div className="flex flex-col pb-3">
        {/* Categories */}
        <p className="mb-4 text-xl font-bold">الفئة</p>
        <div className="flex items-center gap-2 pr-2">
          <input
            id="category-ch1"
            type="checkbox"
            className="peer"
            name="category"
          />
          <label
            htmlFor="category-ch1"
            className="text-sm peer-checked:font-bold"
          >
            الكل{" "}
          </label>
        </div>
        <div className="flex items-center gap-2 pr-2">
          <input
            id="category-ch2"
            type="checkbox"
            className="peer"
            name="category"
          />
          <label
            htmlFor="category-ch2"
            className="text-sm peer-checked:font-bold"
          >
            اجهزة منزلية
          </label>
        </div>
        <div className="flex items-center gap-2 pr-2">
          <input
            id="category-ch3"
            type="checkbox"
            className="peer"
            name="category"
          />
          <label
            htmlFor="category-ch3"
            className="text-sm peer-checked:font-bold"
          >
            اجهزة منزلية
          </label>
        </div>
        <div className="flex items-center gap-2 pr-2">
          <input
            id="category-ch4"
            type="checkbox"
            className="peer"
            name="category"
          />
          <label
            htmlFor="category-ch4"
            className="text-sm peer-checked:font-bold"
          >
            اجهزة منزلية
          </label>
        </div>
      </div>
      <div className="flex flex-col pb-3">
        {/* Brands */}
        <p className="mb-4 text-xl font-bold">الماركة</p>
        <div className="flex items-center gap-2 pr-2">
          <input
            id="brand-ch1"
            type="checkbox"
            className="peer"
            name={"brand"}
          />
          <label htmlFor="brand-ch1" className="text-sm peer-checked:font-bold">
            الكل
          </label>
        </div>
        <div className="flex items-center gap-2 pr-2">
          <input
            id="brand-ch2"
            type="checkbox"
            className="peer"
            name={"brand"}
          />
          <label htmlFor="brand-ch2" className="text-sm peer-checked:font-bold">
            آبل
          </label>
        </div>
        <div className="flex items-center gap-2 pr-2">
          <input
            id="brand-ch3"
            type="checkbox"
            className="peer"
            name={"brand"}
          />
          <label htmlFor="brand-ch3" className="text-sm peer-checked:font-bold">
            سامسونج
          </label>
        </div>
      </div>
      <div className="flex flex-col pb-3">
        <p className="mb-4 text-xl font-bold">السعر</p>
        <div className="mb-2 flex items-center gap-2 pr-2">
          <span className="text-sm">من</span>
          <input
            type="number"
            min={1}
            inputMode="numeric"
            className="max-w-[5rem] border-slate-200 text-center outline-none"
          />
        </div>
        <div className="flex items-center gap-2 pr-2">
          <span className="text-sm">الى</span>
          <input
            type="number"
            inputMode="numeric"
            min={1}
            className="max-w-[5rem] border-slate-200 text-center outline-none"
          />
        </div>
      </div>
    </aside>
  );
}
