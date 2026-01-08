import type { ThreeElements } from "@react-three/fiber"; // 正确的类型导入

type WhaleIslandProps = ThreeElements["mesh"] & {
  onClick?: () => void;
};

export function WhaleIsland({ onClick, ...props }: WhaleIslandProps) {
  return (
    <mesh {...props} position={[0, 0, 0]} onClick={onClick}>
      <boxGeometry args={[3, 1, 3]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  );
}
