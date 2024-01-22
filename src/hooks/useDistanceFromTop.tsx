import { useEffect, useState } from "react";

type Props = React.RefObject<HTMLElement | null>;
export function useDistanceFromTop(targetRef: Props) {
  const [distanceFromTop, setDistanceFromTop] = useState(0);

  const handleScroll = () => {
    if (targetRef.current) {
      const distance = targetRef.current.getBoundingClientRect().top;
      setDistanceFromTop(distance);
    }
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return distanceFromTop;
}
