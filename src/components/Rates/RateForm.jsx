// components
import ReactStars from "react-rating-stars-component";
import { ToastContainer } from "react-toastify";
// hooks
import RateFormHook from "../../Listeners/reviews/RateForm.hook";
// icons
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import { LoadingIcon } from "../Utility/Loading";

export default function RateForm() {
  const { commentRef, user, submitReview, stars, loading, rateStars } =
    RateFormHook();
  const RATING_SETTINGS = {
    size: 18,
    count: 5,
    isHalf: true,
    value: stars,
    color: "rgb(234 179 8)",
    activeColor: "rgb(234 179 8)",
    emptyIcon: <BsStar className="far fa-star" />,
    halfIcon: <BsStarHalf className="fa fa-star-half-alt" />,
    filledIcon: <BsStarFill className="fa fa-star" />,
    onChange: (newValue) => {
      rateStars(newValue);
    },
  };
  if (user == null || user?.role === "admin") return <></>;

  return (
    <>
      <div className="flex items-center gap-4 px-6">
        <h2 className="text-xl font-semibold">{user["name"]}</h2>
        {/* <RatingStars /> */}
        <ReactStars {...RATING_SETTINGS} />
      </div>
      <form
        onSubmit={submitReview}
        className="flex flex-col items-end gap-2 border-b border-solid border-slate-300 p-4"
      >
        <textarea
          ref={commentRef}
          placeholder="اكتب تعليقا"
          className="min-h-[50px] w-full border border-solid border-slate-200 p-2 shadow-sm outline-none"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className={`btn ${
            loading && "icon"
          } border-slate-700 bg-slate-700 px-4 py-2 text-white duration-150 hover:bg-slate-900 hover:font-bold disabled:cursor-not-allowed disabled:opacity-50`}
        >
          {loading && <LoadingIcon className="mr-2 text-lg font-bold" />}
          اضف تعليق{" "}
        </button>
      </form>
      <ToastContainer rtl />
    </>
  );
}
