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
    flexDirection: "column",
    justifyContent: "center",
    top: "0",
    opacity: "0",
    ...getStyles(chessAnimations.gallery, scrollPercentage),
  } as CSSProperties;

  const imgWidth = "25vw";

  const img1Style = {
    width: imgWidth,
    ...getStyles(chessAnimations.image1, scrollPercentage),
  } as CSSProperties;

  const img2Style = {
    width: imgWidth,
    position: "fixed",
    top: "100vh",
    ...getStyles(chessAnimations.image2, scrollPercentage),
  } as CSSProperties;

  const img3Style = {
    width: imgWidth,
    position: "fixed",
    top: "200vh",
    ...getStyles(chessAnimations.image3, scrollPercentage),
  } as CSSProperties;

  const spotlight = useMemo(() => new SpotLight("#fff"), []);

  const gltf = useLoader(GLTFLoader, "/models/chess/scene.gltf");

  return (
    <>
      <div
        style={{ height: "900dvh", width: "100dvw", position: "relative" }}
        ref={ref}
      >
        <div style={canvasStyle}>
          <Canvas camera={{ position: [0, 0, 2] }}>
            <Suspense fallback={null} />

            <group>
              <primitive
                object={spotlight}
                position={[0, 0, 5]}
                intensity={250}
                penumbra={0.5}
                castShadow
                angle={Math.PI / 2}
              />
            </group>

            <primitive
              object={gltf.scene}
              scale={[10, 10, 10]}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </Canvas>
        </div>

        <div style={{ height: "300dvh", width: "100dvw" }}></div>

        <div style={titleStyle}>
          <div className="h1">Chess</div>
          <div className="h1">Engine</div>
        </div>
        <div style={galleryStyle}>
          <img src="/assets/chessEngine/chess1.png" style={img1Style} />
          <div style={{ height: "100vh" }}></div>
          <img src="/assets/chessEngine/chess2.png" style={img2Style} />
          <div style={{ height: "100vh" }}></div>
          <img src="/assets/chessEngine/chess3.png" style={img3Style} />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque
            fuga deleniti! Recusandae sunt, possimus illo, asperiores delectus
            aliquid neque consequuntur magnam rem beatae perspiciatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque
            fuga deleniti! Recusandae sunt, possimus illo, asperiores delectus
            aliquid neque consequuntur magnam rem beatae perspiciatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque
            fuga deleniti! Recusandae sunt, possimus illo, asperiores delectus
            aliquid neque consequuntur magnam rem beatae perspiciatis.
          </p>
        </div>
      </div>
    </>
  );
}
