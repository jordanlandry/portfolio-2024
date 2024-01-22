import { Canvas } from "@react-three/fiber";
import { CSSProperties, useEffect, useRef, useState } from "react";
import ChessBoard from "../../components/models/ChessBoard";
import { useDistanceFromTop } from "../../hooks/useDistanceFromTop";

type Props = {};

export default function ChessEngineSection({}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const distanceFromTop = useDistanceFromTop(ref);

  const [boardPosition, setBoardPosition] = useState(0);

  const [boardStyle, setBoardStyle] = useState({} as CSSProperties);
  const [titleStyle, setTitleStyle] = useState({} as CSSProperties);

  useEffect(() => {
    const updateBoardPosition = () => {
      const startingPosition = 0;
      const endingPosition = 5;

      const percent = distanceFromTop / window.innerHeight;
      let position = percent * (endingPosition - startingPosition);
      position = Math.min(position, startingPosition);

      const styles = { position: "relative", top: 0 } as CSSProperties;
      if (distanceFromTop < 0) styles.position = "fixed";

      setBoardPosition(position);
      setBoardStyle(styles);
    };

    const updateTitlePosition = () => {
      const startingScale = 1;
      const endingScale = 0.5;

      const percent = distanceFromTop / (window.innerHeight * -2);

      let scale = percent * (endingScale - startingScale);
      scale = Math.abs(scale);
      scale = Math.min(scale, startingScale);

      const styles = {
        position: "relative",
        top: "50%",
        transform: "translateY(-50%) scale(" + scale + ")",
        fontSize: "10rem",
        color: "black",
        textAlign: "center",
      } as CSSProperties;

      if (distanceFromTop < 0) styles.position = "fixed";

      setTitleStyle(styles);
    };

    updateBoardPosition();
    updateTitlePosition();
  }, [distanceFromTop]);

  return (
    <div style={{ height: "400dvh", width: "100dvw" }} ref={ref}>
      <div style={{ ...boardStyle, zIndex: 100 }}>
        <Canvas style={{ height: "100dvh", width: "100dvw" }}>
          <ambientLight intensity={2.55} />
          <ChessBoard position={[boardPosition, 0, 0]} />
        </Canvas>
      </div>

      <div style={{ ...titleStyle, zIndex: 10 }}>
        <h1>Chess Engine</h1>
      </div>
    </div>
  );
}
