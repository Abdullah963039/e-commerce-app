import { ProductColorsSelectHook } from "../../../Listeners/Product/AddProductFormInputs/ProductColorsSelect.hook";

export default function ProductColorsSelect() {
  const {
    colors, //> Available Colors
    availColors, //> Selected Product Colors
    addColor, //> Add Product Color
    deleteColor, //> Delete Product Color
  } = ProductColorsSelectHook();
  return (
    <>
      <div>
        <h2 className="my-2 text-slate-700">الالوان المتاحة للمنتج</h2>
        <div className="flex items-center gap-2">
          {
            //> Selected Colors
            availColors.map((hex, index) => (
              <span
                key={index}
                className="circle cursor-pointer"
                onClick={() => deleteColor(hex)}
                style={{ backgroundColor: hex }}
                title="اضغط للحذف"
              ></span>
            ))
          }
          <div className="relative select-none">
            <input type="checkbox" id="colors" hidden className="peer/color" />
            <label
              htmlFor="colors"
              className="circle flex items-center justify-center bg-slate-100 text-2xl duration-150 peer-checked/color:rotate-45 peer-checked/color:font-bold"
            >
              +
            </label>
            <div className="absolute right-full top-0 mx-2 hidden max-h-32 w-64 overflow-y-auto rounded-lg bg-white p-2 peer-checked/color:block">
              {colors.map(({ name, hex }, index) => (
                <option
                  key={index}
                  value={hex}
                  hidden={availColors.includes(hex)}
                  onClick={() => addColor(hex)}
                  className="w-full cursor-pointer p-2 py-1 text-sm hover:bg-slate-200 disabled:cursor-not-allowed disabled:line-through"
                >
                  {name}
                </option>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
