type StyleType =
  | {
      end: number; // When the animation starts (in percentage of how much the parent element has scrolled (0-1)))
      from: number; // The value of the style when the animation starts
      to: number; // The value of the style when the animation ends
      type?: TransitionType; // The type of transition (gradual or sudden)
    }
  | {
      end?: never; // When the animation starts (in percentage of how much the parent element has scrolled (0-1)))
      type?: never; // All string based styles are sudden as you can't calculate the value in between
      from: string; // The value of the style when the animation starts
      to: string; // The value of the style when the animation ends
    };

type TransitionType = "gradual" | "sudden";
export type AnimationType = {
  start: number; // When the animation ends
  style: string; // The style that will be applied to the element
  suffix?: string; // The suffix of the style (e.g. px, %, etc.)
  additionalStyles?: React.CSSProperties; // Additional styles that will be applied to the element
} & StyleType;

export function getStyle(animation: AnimationType, scrollPercentage: number) {
  const {
    start,
    end,
    style,
    from,
    to,
    type: transitionType,
    suffix,
    additionalStyles,
  } = animation;

  const getStyle = (value: number | string) => {
    if (suffix) return { [style]: `${value}${suffix}`, ...additionalStyles };
    return { [style]: value, ...additionalStyles };
  };

  const handleNumber = () => {
    if (scrollPercentage < start) return {};
    if (scrollPercentage > end!) return getStyle(to);

    if (transitionType === "sudden") return getStyle(to);

    const fromValue = from as number;
    const toValue = to as number;

    const value =
      fromValue +
      ((toValue - fromValue) * (scrollPercentage - start)) / (end! - start);

    return getStyle(value);
  };

  if (typeof from === "number" && typeof to === "number") return handleNumber();

  if (scrollPercentage < start) return {};
  if (scrollPercentage > end!) return getStyle(to);

  return getStyle(to);
}

export function getStyles(
  animations: AnimationType[],
  scrollPercentage: number
) {
  return animations.reduce((styles, animation) => {
    return { ...styles, ...getStyle(animation, scrollPercentage) };
  }, {});
}
