import { useLayoutEffect } from "react";

function useBodyScrollLock() {
  useLayoutEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    //regular or arrow function
    // return function cleanup() {
    return () => {
      document.body.style.overflow = originalOverflow;
    };

    // make sure it only runs once
  }, []);
}

export { useBodyScrollLock };
