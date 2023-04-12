import React from "react";
import Product from "../Product/Product";
import SubTitle from "../Utility/SubTitle";

export default function ProductsList({ title, buttonContent }) {
  return (
    <div className="container">
      {title && buttonContent && (
        <SubTitle
          title={title}
          buttonContent={buttonContent}
          href="/products"
        />
      )}
      <div className="mb-5 flex w-full flex-wrap items-stretch gap-4">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
