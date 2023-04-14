//? Contains All Cart Page Content ...

import CartsContainer from "./CartsContainer";
import DiscountCode from "./DiscountCode";
import SubTitle from "../../components/Utility/SubTitle";

export default function CartPageContent() {
  return (
    <>
      {/* Section Title */}
      <SubTitle title="عربة التسوّق" />
      <div className="container grid grid-cols-12 justify-center gap-2">
        {/*  */}
        <div className="col-span-12 sm:col-span-8">
          <CartsContainer />
        </div>
        <div className="col-span-6 col-start-4 h-fit rounded-lg bg-white p-4 sm:col-span-4">
          <DiscountCode />
        </div>
      </div>
    </>
  );
}
