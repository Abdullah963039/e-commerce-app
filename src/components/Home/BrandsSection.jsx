import { useEffect } from "react";
import BrandCard from "../Brand/BrandCard";
import SubTitle from "../Utility/SubTitle";
import { useStore } from "../../hooks/useStore";
import { Loading } from "../Utility/Loading";

export default function BrandsSection() {
  const { allBrands, loading, getAllBrands } = useStore();
  const { data: brands } = allBrands; //> Destruct All Categories

  useEffect(() => {
    getAllBrands();
  }, []);

  return (
    <>
      {brands?.length > 0 && (
        <div className="container">
          <SubTitle
            title={"اشهر الماركات"}
            buttonContent={"المزيد"}
            href="/brands"
          />
          <div className="mb-12 flex flex-wrap justify-between gap-4">
            {brands.slice(0, 6).map((brand, index) => (
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
