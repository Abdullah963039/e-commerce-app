// hooks
import { useRef, useState } from "react";
import { useStore } from "../../hooks/useStore";
import { useParams } from "react-router-dom";

// utils
import notify from "../../utils/notifcation";

export default function RateFormHook() {
  const { productId } = useParams(); // Get product id from url

  const [stars, setStars] = useState(0);
  const commentRef = useRef();

  const { user, loading, createReview } = useStore();

  const rateStars = (stars) => setStars(stars);

  const submitReview = async (e) => {
    e.preventDefault();
    let comment = commentRef.current.value;

    if (comment == "") {
      notify("error", "أكتب تعليق من فضلك");
      return;
    }
    if (stars == 0) {
      notify("error", "قيم المنتج من فضلك");
      return;
    }

    const res = await createReview(productId, comment, stars);

    console.log(res);

    if (res.status === 400) notify("error", "انت اضفت تعليق من قبل ...");
    if (res.status === 403) notify("error", "أنت ممنوع من النتفيذ");
    if (res.status === 201) notify("done", "تم ارسال التعليق بنجاح");
  };

  return { user, commentRef, submitReview, loading, stars, rateStars };
}
