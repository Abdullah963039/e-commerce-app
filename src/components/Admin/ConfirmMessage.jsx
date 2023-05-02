import React from "react";

export default function ConfirmMessage({
  controller = false,
  deleteItem,
  closeModal,
  productId,
  productName = "",
}) {
  return (
    <>
      {controller && (
        <div className="fixed left-0 top-0 z-10 flex h-full w-screen flex-col items-center justify-start py-8 backdrop-blur-sm">
          <div className="flex h-1/3 w-1/2 flex-col justify-between gap-2 rounded-lg bg-slate-100 p-4 shadow-lg">
            <div className="text-2xl font-bold">
              هل انت متأكد من حذف المنتج{" "}
              <span className="text-xl text-red-500">{productName}</span> ؟
            </div>
            <div className="flex w-full flex-wrap items-center justify-end gap-2">
              <button
                onClick={closeModal}
                className="btn border-slate-700 px-4 py-1 text-xs text-slate-700 hover:bg-slate-700 hover:text-slate-100 sm:text-base xl:px-6 "
              >
                تراجع
              </button>
              <button
                onClick={() => deleteItem(productId)}
                className="btn border-red-700 px-4 py-1 text-xs text-red-700 hover:bg-red-700  hover:text-red-100 sm:text-base xl:px-6 "
              >
                حذف
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
