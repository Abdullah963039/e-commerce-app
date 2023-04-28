import { useState } from "react";

export const AddImageCoverHook = () => {
  const [imageCover, setImageCover] = useState(""); //> Image Cover State

  const selectImageCover = (e) => {
    if (e.target.files[0] === undefined) return;
    setImageCover(e.target.files[0]);
  };

  const deleteImageCover = () => setImageCover(""); //* Delete image cover


  return { imageCover, selectImageCover, deleteImageCover };
};
