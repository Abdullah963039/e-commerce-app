import { useEffect, useState } from "react";
import { useStore } from "../../hooks/useStore";
import { useParams } from "react-router-dom";
import notify from "../../utils/notifcation";

/**
 * This hook responsible for getting comment of product
 *
 */
export default function RateContainerHook() {
  const { productId } = useParams();

  const [makeRerender, setMakeRerender] = useState(false);

  const doRerender = () => setMakeRerender(!makeRerender);

  const { getAllReviewsOnProduct, reviews, clearReviews, user, editReview } =
    useStore(); // Global store

  // ? useEffect to get reviews of product
  useEffect(() => {
    async function getReviews() {
      await getAllReviewsOnProduct(productId);
    }

    getReviews();

    return () => {
      clearReviews();
    };
  }, [productId, makeRerender]);

  async function changeReviewsPage(page) {
    await getAllReviewsOnProduct(productId, page);
  }

  return {
    reviews,
    changeReviewsPage,
    user,
    doRerender,
  };
}

/**
 * This hook responsible for deleting comments
 *
 * @returns Delete Review Controllers as Object
 */
export function deleteReviewHook() {
  const { doRerender } = RateContainerHook();
  const [deleteModal, setDeleteModal] = useState(false); // Delete review modal controller

  const showDeleteModal = () => setDeleteModal(true);
  const closeDeleteModal = () => setDeleteModal(false);

  const { deleteReview } = useStore(); // Global store

  async function onDeleteReview(commentId) {
    const res = await deleteReview(commentId);

    closeDeleteModal(); // close modal after deleteReview
    doRerender(); // rerender the component to show changes

    if (res.status === 400) notify("error", "تم الحذف بالفعل");
    if (res.status === 204) notify("done", "تم الحذف  بنجاح");
  }

  return {
    showDeleteModal,
    closeDeleteModal,
    deleteModal,
    onDeleteReview,
  };
}

/**
 * This hook responsible for updating comments
 *
 * @returns Delete Review Controllers as Object
 */
export function editReviewHook(comment) {
  const { doRerender } = RateContainerHook();

  const [editModal, setEditModal] = useState(false); // Edit review modal controller
  const [review, setReview] = useState(comment.review); // Set review controller

  const [stars, setStars] = useState(comment.rating);

  const showEditModal = () => setEditModal(true);
  const closeEditModal = () => setEditModal(false);

  const rateStars = (stars) => setStars(stars);
  const onChangeReview = (e) => setReview(e.target.value);

  const { editReview } = useStore(); // Global store

  async function onEditReview() {
    if (stars < 1) {
      notify("error", "حدد تقييم من فضلك");
      return;
    }
    if (review === "") {
      notify("error", "اكتب تعليق من فضلك");
      return;
    }

    const res = await editReview(comment["_id"], review, stars);

    if (res.status === 200) {
      notify("done", "تم التعديل  بنجاح");
      closeEditModal(); // close modal after deleteReview
      doRerender(); // rerender the component to show changes
    }
  }

  return {
    stars,
    rateStars,
    editModal,
    review,
    onChangeReview,
    showEditModal,
    closeEditModal,
    onEditReview,
  };
}
