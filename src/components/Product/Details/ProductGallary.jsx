import ImageGallery from "react-image-gallery";
import { LeftButton, RightButton } from "./GallaryControllers";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ProductGallary({ images = [] }) {
  if (images.length === 0) return;

  return (
    <div className="relative">
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        isRTL={true}
        showThumbnails={false}
        renderLeftNav={LeftButton}
        renderRightNav={RightButton}
        lazyLoad
      />
    </div>
  );
}
