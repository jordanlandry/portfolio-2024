import { Canvas } from "@react-three/fiber";
import { useContext, useRef } from "react";
import { ScreenSizeContext } from "../context/screenSizeContext";
import { ProjectType } from "../data/projectData";
import { useDistanceFromTop } from "../hooks/useDistanceFromTop";
import {
  getPercentageInView,
  getProgressValue,
} from "../util/getPercentageInView";
import ChessBoard from "./models/ChessBoard";

type Props = ProjectType & {};
export default function Project({}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { height } = useContext(ScreenSizeContext);
  const distance = useDistanceFromTop(ref);

  const percent = getPercentageInView(distance, height);

  const maxValue = Math.PI / 2;
  const minValue = 0;

  const value = getProgressValue(maxValue, minValue, percent);

  return (
    <>
      <div
        className="project"
        ref={ref}
        style={{
          marginBottom: 1000,
        }}
      >
        <Canvas
          style={{ height: "100vh", width: "100vw" }}
          camera={{
            position: [0, 0, 10],
            rotation: [0, 0, 0],
          }}
        >
          <ambientLight intensity={2.55} />
          <ChessBoard rotation={[value * 2, value, value / 2]} />
        </Canvas>
      </div>
    </>
  );
}
