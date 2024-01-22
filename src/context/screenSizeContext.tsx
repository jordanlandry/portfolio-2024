import { createContext } from "react";

type ScreenSizeContextType = {
  width: number;
  height: number;
};

export const ScreenSizeContext = createContext<ScreenSizeContextType>({
  width: window.innerWidth,
  height: window.innerHeight,
});
