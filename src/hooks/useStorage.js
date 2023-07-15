// hooks
import { useEffect, useState } from "react";

export function useSessionStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = sessionStorage.getItem(key);

    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
