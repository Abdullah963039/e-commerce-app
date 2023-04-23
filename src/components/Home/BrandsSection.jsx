import BrandCard from "../Brand/BrandCard";
import SubTitle from "../Utility/SubTitle";
import { Loading } from "../Utility/Loading";

import AllBrandsContainerHook from "../../Listeners/Brand/AllBrandsContainer.hook";

export default function BrandsSection() {
  const { brands, loading } = AllBrandsContainerHook(6);

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
            {brands.map((brand, index) => (
              <BrandCard
                img={brand["image"]}
                title={brand["name"]}
                key={index}
              />
            ))}
          </div>
        </div>
      )}
      {loading && <Loading />}
    </>
  );
}
