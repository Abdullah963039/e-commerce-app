import { useState } from "react";
import notify from "../../../utils/notifcation";

export const AddProductImagesHook = () => {
  const [productImages, setProductImages] = useState([]); //> Product Images State

  const selectMultipleImages = (e) => {
    if (e.target.files[0] === undefined) return;
    if (productImages.length > 3) {
      notify("error", "لا يمكن اضافة أكتر من 4 صور");
      return;
    }
    setProductImages((prevImages) => [...prevImages, ...e.target.files]);
  };

  const deleteProductImage = (image) =>
    setProductImages([...productImages.filter((images) => images !== image)]);

  return { productImages, selectMultipleImages, deleteProductImage };
};
