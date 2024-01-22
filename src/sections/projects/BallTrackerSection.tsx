import { useRef } from "react";
import useScrollProgress from "../../hooks/useScrollProgress";

type Props = {};

export default function BallTrackerSection({}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const scrollProgress = useScrollProgress(ref);

  return <div ref={ref}>BallTrackerSection</div>;
}
