import { Canvas } from "@react-three/fiber";

export function SceneRoot() {
  return (
    <Canvas
      camera={{
        position: [0, 10, 20],
        fov: 50,
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
}
