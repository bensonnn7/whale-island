import { Canvas } from "@react-three/fiber";
import { useViewMode } from "../hooks/useViewMode";
import { CameraController } from "./CameraController";
import { WhaleIsland } from "../islands/WhaleIsland/WhaleIsland";

export function SceneRoot() {
  const { mode, enterIsland } = useViewMode();

  return (
    <Canvas camera={{ position: [0, 20, 30], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />

      <CameraController mode={mode} />

      <WhaleIsland onClick={enterIsland} />
    </Canvas>
  );
}
