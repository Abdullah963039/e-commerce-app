import React from "react";
import RatingStars from "./RatingStars";

// TODO Rating Stars Form

export default function RateForm() {
  return (
    <>
      <div className="flex items-center gap-4 px-6">
        <h2 className="text-xl font-semibold">Name</h2>
        <RatingStars />
      </div>
      <form className="flex flex-col items-end gap-2 border-b border-solid border-slate-300 p-4">
        <textarea
          name="rate-comment"
          placeholder="اكتب تعليقا"
          className="min-h-[50px] w-full border border-solid border-slate-200 p-2 shadow-sm outline-none"
        ></textarea>
        <button
          type="submit"
          className="btn border-slate-700 bg-slate-700 px-4 py-2 text-white duration-150 hover:bg-slate-900 hover:font-bold"
        >
          إرسال
        </button>
      </form>
    </>
  );
}
