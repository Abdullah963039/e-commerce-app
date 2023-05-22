import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiSad } from "react-icons/bi";

export default function RateComment({ comment }) {
  return (
    <>
      <div className="border-b border-slate-300 px-6 py-3">
        <div className="mb-1 flex gap-4 font-bold">
          <p>{comment.user == null ? "غير مسجل" : comment.user.name}</p>
          <div className="items-centerfont-bold flex text-yellow-500">
            <AiFillStar className="h-full" />
            {comment.rating}
          </div>
        </div>
        <p className="text-sm text-slate-700">{comment.review}</p>
      </div>
    </>
  );
}

export function NoComments() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-4 p-4 text-xl font-light">
        <span>لا يوجد تعليقات</span>
        <BiSad className="text-yellow-500" />
      </div>
    </>
  );
}
