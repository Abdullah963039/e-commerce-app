import { useEffect } from "react";
import { useStore } from "../../hooks/useStore";
import { useParams } from "react-router-dom";

export function RateContainerHook() {
  const { productId } = useParams();

  const { getAllReviewsOnProduct, reviews, clearReviews } = useStore();
  useEffect(() => {
    async function getReviews() {
      await getAllReviewsOnProduct(productId);
    }

    getReviews();

    return () => {
      clearReviews();
    };
  }, [productId]);

  async function changeReviewsPage(page) {
    await getAllReviewsOnProduct(productId, page);
  }

  return { reviews, changeReviewsPage };
}
