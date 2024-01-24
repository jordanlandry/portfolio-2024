import { AnimationType } from "../../util/getStyles";

const sectionCount = 9;
export const chessAnimations = {
  canvas: [
    {
      start: -1 / sectionCount,
      end: 0,
      from: 0,
      to: 1,
      style: "opacity",
    },
    {
      start: 0,
      from: "absolute",
      to: "fixed",
      style: "position",
    },
    {
      start: 0,
      end: 1 / sectionCount,
      from: 0,
      to: 100,
      suffix: "%",
      style: "right",
    },
  ],

  title: [
    {
      start: 0,
      end: 1 / sectionCount,
      from: 0,
      to: 1,
      style: "opacity",
    },
    {
      start: 1 / sectionCount,
      end: 2 / sectionCount,
      from: 15,
      to: 50,
      suffix: "rem",
      style: "fontSize",
    },
    {
      start: 1.5 / sectionCount,
      end: 2 / sectionCount,
      from: 1,
      to: 0,
      style: "opacity",
    },
    {
      start: 3 / sectionCount,
      style: "display",
      to: "none",
    },
  ],

  gallery: [
    {
      start: 2 / sectionCount,
      end: 3 / sectionCount,
      from: 0,
      to: 1,
      style: "opacity",
    },
    {
      start: 3 / sectionCount,
      end: 4 / sectionCount,
      to: "fixed",
      style: "position",
    },
  ],

  image1: [],
  image2: [
    {
      start: 3 / sectionCount,
      end: 4 / sectionCount,
      from: 100,
      to: 25,
      suffix: "vh",
      style: "top",
    },
  ],

  image3: [
    {
      start: 3 / sectionCount,
      end: 4 / sectionCount,
      from: 200,
      to: 50,
      suffix: "vh",
      style: "top",
    },
  ],
} as Record<string, AnimationType[]>;
