import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export function RightButton(onClick) {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 z-10 translate-y-1/2 cursor-pointer text-3xl"
    >
      <AiOutlineArrowRight />
    </button>
  );
}
export function LeftButton(onClick) {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 z-10 translate-y-1/2 cursor-pointer text-3xl"
    >
      <AiOutlineArrowLeft />
    </button>
  );
}
