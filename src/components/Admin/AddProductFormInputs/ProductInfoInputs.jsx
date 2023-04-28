import React from "react";
import { ProductInfoInputsHook } from "../../../Listeners/Product/AddProductFormInputs/ProductInfoInputs.hook";

export function ProductTitle() {
  const { nameRef } = ProductInfoInputsHook();
  return (
    <>
      <input
        type="text"
        placeholder="اسم المنتج"
        title="اسم المنتج"
        name="title"
        ref={nameRef}
        className="w-full rounded-md border border-slate-300 p-2 outline-none"
      />
    </>
  );
}
export function ProductDescription() {
  const { descriptionRef } = ProductInfoInputsHook();
  return (
    <>
      <textarea
        name="description"
        rows="3"
        className="min-h-[50px] w-full resize-y rounded-md border border-slate-300 p-2 outline-none"
        placeholder="وصف المنتج"
        title="وصف المنتج"
        ref={descriptionRef}
      ></textarea>
    </>
  );
}
export function ProductQuantity() {
  const { quantityRef } = ProductInfoInputsHook();
  return (
    <>
      <input
        ref={quantityRef}
        name="quantity"
        type="number"
        min={1}
        placeholder="الكمية"
        title="الكمية"
        className="w-full rounded-md border border-slate-300 p-2 outline-none invalid:outline-2 invalid:outline-red-500"
      />
    </>
  );
}
export function ProductPrice() {
  const { priceRef } = ProductInfoInputsHook();
  return (
    <>
      <input
        name="price"
        ref={priceRef}
        min={0}
        type="number"
        placeholder="سعر المنتج"
        title="سعر المنتج"
        className="w-full rounded-md border border-slate-300 p-2 outline-none"
      />
    </>
  );
}
