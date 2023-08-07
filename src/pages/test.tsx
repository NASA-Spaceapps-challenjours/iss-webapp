import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

import { Model as ISS } from "../components/ISS_stationary";
import { Model as Fox } from "../components/Fox";

const test = () => {
  const ref = useRef();
  return (
    <div className="h-screen">
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        shadows
        camera={{ position: [0, 0, 50], fov: 50 }}
      >
        <ambientLight intensity={0.25} />
        <Suspense fallback={null}>
          <Fox />
          <ISS />
          <Environment preset="sunset" background />
        </Suspense>
        <OrbitControls ref={ref} autoRotate />
      </Canvas>
    </div>
  );
};

export default test;
