import { useGLTF, useAnimations } from "@react-three/drei";

//hook
import { useRef, useEffect } from "react";
// models
import planeScene from "../assets/3d/plane.glb";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);
  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [isRotating, actions]);
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
      {/* <primitive object={animations[0]} /> */}
    </mesh>
  );
};

export default Plane;
