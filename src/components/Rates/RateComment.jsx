// icons
import { AiFillStar, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { BiSad } from "react-icons/bi";
// hooks
import {
  RateContainerHook,
  deleteReviewHook,
  editReviewHook,
} from "../../Listeners/reviews";
// components
import { ConfirmMessage, ConfirmEditModal } from "../Utility";
import { ToastContainer } from "react-toastify";

export default function RateComment({ comment }) {
  const { user } = RateContainerHook();
  const { showDeleteModal, closeDeleteModal, deleteModal, onDeleteReview } =
    deleteReviewHook();
  const {
    stars,
    rateStars,
    editModal,
    review,
    onChangeReview,
    showEditModal,
    closeEditModal,
    onEditReview,
  } = editReviewHook(comment);

  const commentedBy = comment.user?._id;
  return (
    <>
      <ConfirmMessage
        controller={deleteModal}
        closeModal={closeDeleteModal}
        itemId={comment["_id"]}
        deleteItem={onDeleteReview}
      />
      <ConfirmEditModal
        controller={editModal}
        closeModal={closeEditModal}
        stars={stars}
        setStars={rateStars}
        commentValue={review}
        onChangeComment={onChangeReview}
        editItem={onEditReview}
      />
      <div className="border-b border-slate-300 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="mb-1 flex gap-4 font-bold">
            <p>{comment.user == null ? "غير مسجل" : comment.user.name}</p>
            <div className="flex items-center font-bold text-yellow-500">
              <AiFillStar className="h-full" />
              {comment.rating}
            </div>
          </div>
          {commentedBy !== user["_id"] ? (
            <></>
          ) : (
            <div className="flex items-center gap-4">
              <AiOutlineDelete
                onClick={showDeleteModal}
                title="حذف"
                className="cursor-pointer text-xl text-slate-600 hover:text-red-500"
              />
              <AiOutlineEdit
                onClick={showEditModal}
                title="تعديل"
                className="cursor-pointer text-xl text-slate-600 hover:text-yellow-500"
              />
            </div>
          )}
        </div>
        <p className="text-sm text-slate-700">{comment.review}</p>
      </div>

      <ToastContainer rtl />
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
