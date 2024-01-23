import { CSSProperties, useRef } from "react";
import useScrollPercentage from "../../hooks/useScrollPercentage";
import { getStyles } from "../../util/getStyles";
import { Canvas } from "@react-three/fiber";
import ChessBoard from "../../components/models/ChessBoard";
import { chessAnimations } from "./chessEngineSection.animation";

type Props = {};

export default function ChessEngineSection({}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);

  const scrollPercentage = useScrollPercentage(ref);
  const scrollPercentage1 = useScrollPercentage(ref1);

  const titleStyle = {
    position: "fixed",
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "15rem",
    zIndex: 1,
    ...getStyles(chessAnimations.title, scrollPercentage),
  } as CSSProperties;

  const canvasStyle = {
    top: 0,
    height: "100vh",
    width: "100vw",
    zIndex: 2,
    ...getStyles(chessAnimations.canvas, scrollPercentage),
  } as CSSProperties;

  const galleryStyle = {
    display: "flex",
    top: "0",
    // right: "-100%",
    height: "100vh",
    width: "100vw",
    ...getStyles(chessAnimations.gallery, scrollPercentage1),
  } as CSSProperties;

  return (
    <>
      <div
        style={{ height: "200dvh", width: "100dvw", position: "relative" }}
        ref={ref}
      >
        <div style={canvasStyle}>
          <Canvas camera={{ position: [0, 0, 7] }}>
            <ambientLight intensity={2.55} />
            <ChessBoard rotation={[2, 0, 0]} />
          </Canvas>
        </div>

        <div style={titleStyle}>
          <div className="h1">Chess</div>
          <div className="h1">Engine</div>
        </div>
      </div>
      <div style={{ height: "200dvh", width: "100dvw" }} ref={ref1}>
        <div style={galleryStyle}>
          <img src="/assets/chessEngine/chess1.png" />
          <img src="/assets/chessEngine/chess2.png" />
          <img src="/assets/chessEngine/chess3.png" />
        </div>
      </div>
    </>
  );
}
