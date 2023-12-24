import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect, useRef } from "react";

// icons
import { soundon, soundoff } from "../assets/icons";
// components
import { HomeInfo, Loading } from "../components";

// models
import { Bird, Island, Plane, Sky } from "../models";

// utils
import { adjustIslandForScreenSize, adjustPlaneForScreenSize } from "../utils";

// musics
import sakura from "../assets/sakura.mp3";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.5;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayMusic, setIsPlayMusic] = useState(false);

  useEffect(() => {
    if (isPlayMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
      // audioRef.current.currentTime = 0;
    };
  }, [isPlayMusic]);

  const [islandScale, islandScreenPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planeScreenPosition] = adjustPlaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent 
        ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loading />}>
          <directionalLight position={[1, 1, 1]} intensity={0} />
          <ambientLight intensity={0.5} />
          {/* <pointLight /> */}
          {/* <spotLight/> */}
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Plane
            scale={planeScale}
            position={planeScreenPosition}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            scale={islandScale}
            position={islandScreenPosition}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>

      <div className="absolute left-5 bottom-5">
        <img
          src={!isPlayMusic ? soundon : soundoff}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayMusic(!isPlayMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
