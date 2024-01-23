import { AnimationType } from "../../util/getStyles";

const sectionCount = 3;
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
      from: 10,
      to: 50,
      suffix: "rem",
      style: "fontSize",
    },
    // TODO: Fix this and make it opacity
    {
      start: 2 / sectionCount,
      from: "50%",
      to: 100000,
      style: "top",
      // type: "sudden",
    },
  ],
  gallery: [
    {
      start: -1 / sectionCount,
      end: 0,
      from: 0,
      to: 1,
      style: "opacity",
    },

    {
      start: 0,
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
    {
      start: 1 / sectionCount,
      end: 2 / sectionCount,
      from: 0,
      to: 150,
      suffix: "%",
      style: "top",
    },
  ],
} as Record<string, AnimationType[]>;
