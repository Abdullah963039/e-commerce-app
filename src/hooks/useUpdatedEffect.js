// hooks
import { useRef, useEffect } from "react";

/**
 * useUpdatedEffect: is custom hook as same as useEffect but does not run at first render
 *
 * @param {Function} callback
 * @param {Array} dependencies
 */
export function useUpdatedEffect(callback, dependencies) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    return callback;
  }, [...dependencies]);
}
