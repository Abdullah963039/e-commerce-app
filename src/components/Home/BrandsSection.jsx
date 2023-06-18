import { BrandCard } from "../Brand";
import { SubTitle } from "../Utility";

import { AllBrandsContainerHook } from "../../Listeners/Brand";

export default function BrandsSection() {
  const { brands } = AllBrandsContainerHook(6);

  console.log(brands);

  return (
    <>
      {brands?.length > 0 && (
        <div className="container">
          <SubTitle
            title={"اشهر الماركات"}
            buttonContent={"المزيد"}
            href="/brands"
          />
          <div className="flex flex-wrap justify-start gap-4 pb-12">
            {brands.map((brand) => (
              <BrandCard brand={brand} key={brand["_id"]} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
