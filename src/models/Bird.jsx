import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// hooks
import { useRef, useEffect } from "react";
// models
import birdScene from "../assets/3d/bird.glb";

const Bird = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, ref);
  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
    if (ref.current.position.x > camera.position.x + 10) {
      ref.current.rotation.y = Math.PI;
    } else if (ref.current.position.x < camera.position.x - 10) {
      ref.current.rotation.y = 0;
    }

    if (ref.current.rotation.y === 0) {
      ref.current.position.x += 0.01;
      ref.current.position.z -= 0.01;
    } else {
      ref.current.position.x -= 0.01;
      ref.current.position.z += 0.01;
    }
  });

  return (
    <mesh
      ref={ref}
      {...props}
      position={[-5, 2, 1]}
      scale={[0.003, 0.003, 0.003]}
    >
      <primitive object={scene} />
      {/* <primitive object={animations[0]} /> */}
    </mesh>
  );
};

export default Bird;
