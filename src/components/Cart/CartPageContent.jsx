//? Contains All Cart Page Content ...

// components
import { CartsContainer, DiscountCode } from "./";
import { BiSad } from "react-icons/bi";
import { SubTitle } from "../../components/Utility";
export default function CartPageContent() {
  return (
    <>
      {/* Section Title */}
      <SubTitle title="عربة التسوّق" />
      <div className="container grid grid-cols-12 justify-center gap-2">
        <div className="col-span-12 sm:col-span-8">
          <CartsContainer />
        </div>
        <div className="col-span-12 h-fit rounded-lg bg-white p-4 sm:col-span-4">
          <DiscountCode />
        </div>
      </div>
    </>
  );
}
