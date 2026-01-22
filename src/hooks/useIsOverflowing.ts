import { useEffect, useState } from "react";

export function useIsOverflowing<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
) {
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const checkOverflow = () => {
      const overflow =
        el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;

      setIsOverflowing(overflow);
    };

    checkOverflow();

    const resizeObserver = new ResizeObserver(checkOverflow);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, [ref]);

  return isOverflowing;
}
