import ImageGallery from "react-image-gallery";
import { LeftButton, RightButton } from "./GallaryControllers";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ProductGallary() {
  const images = [
    {
      original: "/src/assets/imgs/mobile.png",
    },
    {
      original: "/src/assets/imgs/mobile1.png",
    },
    {
      original: "/src/assets/imgs/mobile2.png",
    },
  ];
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
