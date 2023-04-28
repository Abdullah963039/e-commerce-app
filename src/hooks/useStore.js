import { create } from "zustand";
//? Store Partitions ...
import { allCategoriesStore } from "../Store/allCategoriesStore";
import { subCategoriesStore } from "../Store/subCategoriesStore";
import { brandsStore } from "../Store/brandsStore";
import { productStore } from "../Store/productsStore";

export const useStore = create((...props) => ({
  loading: false,
  error: false,
  ...allCategoriesStore(...props), //> All Categories Store
  ...subCategoriesStore(...props), //> Sub Categories Store
  ...brandsStore(...props), //> Brands Store
  ...productStore(...props), //> Products Store
}));
