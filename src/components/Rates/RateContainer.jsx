// components
import RateComment, { NoComments } from "./RateComment";
import Pagination from "../Utility/Pagination";
import RateForm from "./RateForm";
// hooks
import ProductDetailsHook from "../../Listeners/Product/ProductDetails.hook";
import RateContainerHook from "../../Listeners/reviews/RateContainer.hook";
// icons
import { AiFillStar } from "react-icons/ai";

export default function RateContainer() {
  const { product } = ProductDetailsHook();
  const { reviews, changeReviewsPage } = RateContainerHook();
  return (
    <>
      <div className="my-4 rounded-lg bg-white shadow-lg">
        <div className="mb-2 flex items-center gap-3 p-2 text-xl">
          <b className="text-2xl">التعليقات</b>
          <div className="flex items-center font-bold text-yellow-500">
            <AiFillStar />
            {product?.ratingsAverage}
          </div>
          <p className="text-xs text-slate-400">
            ({product?.ratingsQuantity} تقييم)
          </p>
        </div>
        <div>
          <RateForm />
          {reviews?.data.length > 0 ? (
            reviews?.data.map((comment, index) => (
              <RateComment key={index} comment={comment} />
            ))
          ) : (
            <NoComments />
          )}
          {reviews?.paginationResult.numberOfPages !== 0 && (
            <Pagination
              totalPages={reviews?.paginationResult.numberOfPages}
              onClick={changeReviewsPage}
            />
          )}
        </div>
      </div>
    </>
  );
}
