import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function RateComment() {
  return (
    <div className="border-b border-solid border-slate-300 px-6 py-3">
      <div className="mb-1 flex gap-4 font-bold">
        <p>محمد علي</p>
        <div className="items-centerfont-bold flex text-yellow-500">
          <AiFillStar className="h-full" />
          4.5
        </div>
      </div>
      <div className="text-xs text-slate-600">
        منتج جميل منتج جميل منتج جميل منتج جميل
      </div>
    </div>
  );
}
