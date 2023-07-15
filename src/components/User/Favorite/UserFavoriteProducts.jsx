// components
import Product from "../../Product/Product";
// hooks
import { UserFavoriteProductsHook } from "../../../Listeners/Product";

export default function UserFavoriteProducts() {
  const { wishlist } = UserFavoriteProductsHook();

  return (
    <>
      <div className="mb-4 grid grid-cols-12 gap-4">
        {wishlist?.length > 0 ? (
          wishlist.map((favProduct) => (
            <Product
              product={favProduct}
              key={favProduct["_id"]}
              className={
                "col-span-12 overflow-hidden rounded-lg bg-white shadow-md sm:col-span-6 md:col-span-4 lg:col-span-3"
              }
            />
          ))
        ) : (
          <>
            <div className="col-span-12 py-8 text-center text-xl">
              لا يوجد منتجات مفضلة ...
            </div>
          </>
        )}
      </div>
    </>
  );
}
