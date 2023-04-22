import { useEffect } from "react";
import { useStore } from "../../hooks/useStore";

export default function HomeCategoryHook() {
  //> Use Categories Store ..
  const { allCategories, getAllCategories, loading } = useStore();
  const { data: categories } = allCategories;

  //> Fetching Data ..
  useEffect(() => {
    getAllCategories();
  }, []);

  return { categories, loading };
}
