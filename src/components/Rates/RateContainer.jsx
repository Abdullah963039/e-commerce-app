import { AiFillStar } from "react-icons/ai";
import RateComment from "./RateComment";
import Pagination from "../Utility/Pagination";
import RateForm from "./RateForm";

export default function RateContainer() {
  return (
    <div className="my-4 rounded-lg bg-white shadow-lg">
      <div className="mb-2 flex items-center gap-3 p-2 text-xl">
        <b className="text-2xl">التعليقات</b>
        <div className="flex items-center font-bold text-yellow-500">
          <AiFillStar className="h-full" />
          4.5
        </div>
        <p className="text-xs text-slate-400">(168 تقييم)</p>
      </div>
      <div>
        <RateForm />
        <RateComment />
        <RateComment />
        <RateComment />
        <RateComment />
        <Pagination />
      </div>
    </div>
  );
}
