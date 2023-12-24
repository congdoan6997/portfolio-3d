import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// hooks

import { useRef, useEffect } from "react";
// models
import skyScene from "../assets/3d/sky.glb";

const Sky = ({ isRotating, ...props }) => {
  const ref = useRef();
  const sky = useGLTF(skyScene);

  useFrame((_, delta) => {
    if (isRotating) {
      ref.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
