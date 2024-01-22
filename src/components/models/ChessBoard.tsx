import { Vector3 } from "three";

type Props = {
  rotation?: [number, number, number];
  position?: [number, number, number];
  scale?: [number, number, number];
};

export default function ChessBoard({
  rotation = [0, 0, 0],
  position = [0, 0, 0],
  scale = [1, 1, 1],
}: Props) {
  const colors = { light: "#e6f5ff", dark: "#8db6d6" };

  const rows = Array(8).fill(null);
  const cols = Array(8).fill(null);

  const board = rows.map((_, i) =>
    cols.map((_, j) => {
      return {
        color: (i + j) % 2 === 0 ? colors.light : colors.dark,
      };
    })
  );

  const getPosition = (i: number, j: number) => {
    const x = j - 3.5;
    const y = i - 3.5;

    return new Vector3(x, y, 0);
  };

  return (
    <group rotation={rotation} position={position} scale={scale}>
      {board.map((row, i) =>
        row.map((square, j) => (
          <mesh key={`${i}-${j}`} position={getPosition(i, j)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={square.color} />
          </mesh>
        ))
      )}
    </group>
  );
}
