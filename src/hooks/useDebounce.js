import { useEffect } from "react";
import { useTimeout } from "./";

export const useDebounce = (callback, delay, dependencies) => {
  const { clear, reset } = useTimeout(callback, delay);

  useEffect(reset, [...dependencies]);
  useEffect(clear, []);
};
