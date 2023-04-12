import React from "react";
import BrandCard from "../Brand/BrandCard";
import SubTitle from "../Utility/SubTitle";
import img1 from "../../assets/imgs/brand1.png";
import img2 from "../../assets/imgs/brand2.png";
import img3 from "../../assets/imgs/brand3.png";

export default function BrandsSection() {
  return (
    <div className="container">
      <SubTitle
        title={"اشهر الماركات"}
        buttonContent={"المزيد"}
        href="/brands"
      />
      <div className="mb-12 flex flex-wrap justify-between gap-4">
        <BrandCard img={img1} />
        <BrandCard img={img2} />
        <BrandCard img={img3} />
        <BrandCard img={img1} />
        <BrandCard img={img2} />
        <BrandCard img={img3} />
      </div>
    </div>
  );
}
