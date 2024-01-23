import { useEffect, useState } from "react";

const useScrollPercentage = (
  elementRef: React.MutableRefObject<HTMLElement | null>
) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const updateScroll = () => {
    if (elementRef.current) {
      const { height, bottom } = elementRef.current.getBoundingClientRect();
      const percent = 1 - bottom / height;

      setScrollPercentage(percent);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, [elementRef]);

  return scrollPercentage;
};

export default useScrollPercentage;
