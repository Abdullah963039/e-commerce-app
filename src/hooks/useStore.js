import { create } from "zustand";

//? Store Partitions ...
import {
  allCategoriesStore,
  subCategoriesStore,
  brandsStore,
  productStore,
  authStore,
  wishlistStore,
  reviewsStore,
  coponsStore,
  addressesStore,
  updateUserStore,
  cartStore,
} from "../Store";

const store = (...props) => ({
  loading: false,
  error: false,
  ...allCategoriesStore(...props), //> All Categories Store
  ...subCategoriesStore(...props), //> Sub Categories Store
  ...brandsStore(...props), //> Brands Store
  ...productStore(...props), //> Products Store
  ...authStore(...props), //> Authentication Store
  ...reviewsStore(...props), //> Reviews Store
  ...wishlistStore(...props), //> Wishlist Store
  ...coponsStore(...props), //> Copons Store
  ...addressesStore(...props), //> User Addresses Store
  ...updateUserStore(...props), //> User Profile Store
  ...cartStore(...props), //> Cart Store
});

export const useStore = create(store);
