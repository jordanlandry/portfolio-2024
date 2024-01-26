import { Canvas, useLoader } from "@react-three/fiber";
import { CSSProperties, Suspense, useMemo, useRef } from "react";
import { SpotLight } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import useScrollPercentage from "../../hooks/useScrollPercentage";
import { getStyles } from "../../util/getStyles";
import { chessAnimations } from "./chessEngineSection.animation";

type Props = {};

export default function ChessEngineSection({}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollPercentage = useScrollPercentage(ref);

  const titleStyle = {
    position: "fixed",
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "15rem",
    zIndex: 1,
    opacity: 0,
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
    justifyContent: "center",
    flexDirection: "column",
    width: "100vw",
    top: "0",
    opacity: "0",
    padding: "24px",
    ...getStyles(chessAnimations.gallery, scrollPercentage),
  } as CSSProperties;

  const baseImgStyles = { height: "66vh" };
  const spotlight = useMemo(() => new SpotLight("#ffdddd"), []);
  const chessBoardModel = useLoader(GLTFLoader, "/models/chess/scene.gltf");

  const chessBoardRotation = getStyles(
    chessAnimations.boardRotation,
    scrollPercentage
  ) as { x?: number; y?: number; z?: number };

  const boardRotationVector = [
    chessBoardRotation?.x || Math.PI / 4,
    chessBoardRotation?.y || 0,
    chessBoardRotation?.z || 0,
  ];

  return (
    <>
      <div
        style={{
          height: "400dvh",
          width: "100dvw",
          position: "relative",
          overflowY: "hidden",
        }}
        ref={ref}
      >
        <div style={canvasStyle}>
          <Canvas camera={{ position: [0, 0, 2] }}>
            <Suspense fallback={null} />

            <group scale={[0.1, 0.1, 0.1]}>
              <primitive
                object={spotlight}
                position={[0, 5, 10]}
                intensity={250}
                penumbra={0.5}
                castShadow
                angle={Math.PI / 2}
                decay={5}
              />
            </group>

            <primitive
              object={chessBoardModel.scene}
              scale={[8, 8, 8]}
              rotation={boardRotationVector as [number, number, number]}
            />
          </Canvas>
        </div>

        <div style={{ height: "300dvh", width: "100dvw" }}></div>

        <div style={titleStyle}>
          <div className="h1">Chess</div>
          <div className="h1">Engine</div>
        </div>
        <div style={galleryStyle}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <img src="/assets/chessEngine/chess1.png" style={baseImgStyles} />
            <img src="/assets/chessEngine/chess2.png" style={baseImgStyles} />
            <img src="/assets/chessEngine/chess3.png" style={baseImgStyles} />
            <img src="/assets/chessEngine/chess.gif" style={baseImgStyles} />
          </div>
        </div>
        <p style={{ fontSize: "2rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque
          fuga deleniti! Recusandae sunt, possimus illo, asperiores delectus
          aliquid neque consequuntur magnam rem beatae perspiciatis.
        </p>
        <div style={{ height: "200dvh", width: "100dvw" }}></div>
      </div>
    </>
  );
}
