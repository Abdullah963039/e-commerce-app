import ReactStars from "react-rating-stars-component";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

export default function RatingStars() {
  const RATING_SETTINGS = {
    size: 18,
    count: 5,
    isHalf: true,
    value: 0,
    color: "rgb(234 179 8)",
    activeColor: "rgb(234 179 8)",
    emptyIcon: <BsStar className="far fa-star" />,
    halfIcon: <BsStarHalf className="fa fa-star-half-alt" />,
    filledIcon: <BsStarFill className="fa fa-star" />,
    onChange: (newValue) => {
      console.log(`Example 3: new value is ${newValue}`);
    },
  };
  return <ReactStars {...RATING_SETTINGS} />;
}
