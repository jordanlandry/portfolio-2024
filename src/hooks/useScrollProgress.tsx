import { useContext } from "react";
import { ScreenSizeContext } from "../context/screenSizeContext";
import { getPercentageInView } from "../util/getPercentageInView";
import { useDistanceFromTop } from "./useDistanceFromTop";

type Options = { start?: number; end?: number; clamp?: boolean };
export default function useScrollProgress(
  targetRef: React.MutableRefObject<HTMLElement | null>,
  options = {} as Options
) {
  const { height } = useContext(ScreenSizeContext);
  const distance = useDistanceFromTop(targetRef);

  const percent = getPercentageInView(distance, height);

  const { start = 0, end = 1 } = options || {};
  const adjustedPercent = percent * (end - start) + start;

  if (options.clamp) {
    if (adjustedPercent < start) return start;
    if (adjustedPercent > end) return end;
  }

  return adjustedPercent;
}
