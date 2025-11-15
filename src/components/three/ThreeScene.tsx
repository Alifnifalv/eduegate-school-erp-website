"use client";

import Image from 'next/image';
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTF } from "three-stdlib";

import {
  OrbitControls,
  Environment,
  ContactShadows,
  Float,
  useGLTF,
  Html,
} from "@react-three/drei";
// Define props type here
type FloatingObjectProps = {
  url: string;
  scale?: number;
  rotation?: [number, number, number];
};
function FloatingObject({ url, scale = 1, rotation = [0, 0, 0] }: FloatingObjectProps) {
  const gltf = useGLTF(url) as GLTF;

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
      <group position={[0, 0, 0]}>
        <primitive object={gltf.scene} scale={scale} rotation={rotation} />
      </group>
    </Float>
  );
}

export function ThreeScene() {
  return (
    <div className="absolute inset-0"style={{ background: "transparent" }}>
      {/* Portrait aspect ratio for phone */}
<div className="relative w-full max-w-5xl mx-auto min-h-[600px] pt-8 pb-8 px-4">
  {/* Main (Purple) */}
  <div className="absolute top-0 left-0 w-[56%] h-[54%] rounded-3xl bg-purple-700/90 z-10 flex flex-col justify-center px-8 py-8 text-white">
    <h1 className="text-4xl font-bold font-lato mb-2">Signup Portal</h1>
    <div className="text-lg">Edegate</div>
  </div>

  {/* Top Right (Photo Overlay) */}
  <div className="absolute top-0 right-0 w-[40%] h-[45%] rounded-3xl z-20 overflow-hidden border-4 border-white">
    {/* Insert image here */}
    <Image src="/your-top-right-image.jpg" alt="" layout="fill" objectFit="cover" />
  </div>

  {/* Bottom Left (School Image) */}
  <div className="absolute bottom-0 left-0 w-[28%] h-[35%] rounded-2xl z-30 overflow-hidden">
    <Image src="/your-school-image.jpg" alt="" layout="fill" objectFit="cover" />
  </div>
  
  {/* Bottom Center (Features Box) */}
  <div className="absolute bottom-0 left-[31%] w-[32%] h-[35%] rounded-2xl bg-emerald-400 px-8 py-10 flex flex-col justify-center text-white font-semibold text-lg z-30">
    <ul className="space-y-3 font-roboto">
      <li>• Real-Time Updates</li>
      <li>• Dedicated Support</li>
      <li>• Easy Access</li>
    </ul>
  </div>

  {/* Bottom Right (Photo & Text) */}
  <div className="absolute bottom-0 right-0 w-[37%] h-[35%] rounded-2xl overflow-hidden z-30 flex items-end p-6" style={{background: "rgba(72, 100, 174, 0.8)"}}>
    <Image src="/your-bottom-right-image.jpg" alt="" layout="fill" objectFit="cover" className="opacity-70" />
    <span className="relative z-10 text-white text-lg font-semibold font-lato">
      Access Your Meeting<br />Schedule and Updates
    </span>
  </div>
</div>

      <Canvas
        style={{ width: "100%", height: "100%" , background: "transparent" }}
        camera={{ position: [0, 3, 5], fov: 40 }}
           gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Environment preset="city" />

        <Suspense fallback={<Html>Loading...</Html>}>
          {/* Base platform */}
          {/* <mesh rotation-x={-Math.PI / 2} receiveShadow>
            <circleGeometry args={[6, 64]} />
            <meshStandardMaterial color="#f5f5f5" />
          </mesh> */}

          {/* Centered low_poly_school */}
          <FloatingObject
            url="/models/iPhone 17 Pro.glb"
            scale={20}
            rotation={[0, Math.PI, 0]}
          />
        </Suspense>

        <ContactShadows
          position={[0, 0, 0]}
          opacity={0.4}
          scale={10}
          blur={2.5}
          far={4}
        />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1}
          minPolarAngle={Math.PI / 3} // slightly lower to show more vertical
        />
      </Canvas>
    </div>
  );
}
