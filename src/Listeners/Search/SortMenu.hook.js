// hooks
import { useSessionStorage } from "../../hooks/useStorage";
import { useDebounce } from "../../hooks/useDebounce";
import { ProductsPageContentHook } from "../Product";

export const SortMenuHook = () => {
  const { makeSearch } = ProductsPageContentHook();
  const [sort, setSort] = useSessionStorage("sort", "");

  useDebounce(() => makeSearch(), 500, [sort]);

  const selectSort = (e) => setSort(e.target.value);

  return { selectSort, sort };
};
