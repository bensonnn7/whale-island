import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import type { ViewMode } from "../hooks/useViewMode";
import { Vector3 } from "three";

type CameraControllerProps = {
  mode: ViewMode;
};

export function CameraController({ mode }: CameraControllerProps) {
  const { camera } = useThree();
  const targetPos = useRef(new Vector3());

  useFrame(() => {
    if (mode === "MAP") {
      targetPos.current.set(0, 20, 30);
    } else if (mode === "ISLAND") {
      targetPos.current.set(0, 5, 10);
    }

    // 平滑移动
    camera.position.lerp(targetPos.current, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
