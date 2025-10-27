"use client";

import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, JSX } from "react";
import { Float } from "@react-three/drei";

// --- Wavy Background Plane ---
function WavyPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const clock = useMemo(() => new THREE.Clock(), []);

  useFrame(() => {
    const time = clock.getElapsedTime();
    const mesh = meshRef.current;
    if (!mesh) return;

    const position = mesh.geometry.attributes.position;
    const count = position.count;
    for (let i = 0; i < count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      const wave = Math.sin(x * 0.4 + time * 1.2) * 0.2 + Math.cos(y * 0.6 + time * 1.5) * 0.2;
      position.setZ(i, wave);
    }
    position.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} rotation-x={-Math.PI / 2} position={[0, -3, 0]}>
      <planeGeometry args={[50, 50, 100, 100]} />
      <meshStandardMaterial
        color="#e2e8f0"
        emissive="#f1f5f9"
        metalness={0.2}
        roughness={1}
        wireframe
      />
    </mesh>
  );
}

// --- Floating School-Related Shapes ---
function FloatingObject({
  geometry,
  color,
  position,
  scale = 1,
}: {
  geometry: JSX.Element;
  color: string;
  position: [number, number, number];
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = t * 0.3;
    ref.current.rotation.y = t * 0.4;
    ref.current.position.y = Math.sin(t + position[0]) * 0.3 + position[1];
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={ref} position={position} scale={scale}>
        {geometry}
        <meshStandardMaterial
          color={color}
          metalness={0.3}
          roughness={0.4}
          emissive="#ffffff"
          emissiveIntensity={0.05}
        />
      </mesh>
    </Float>
  );
}

// --- Combined Scene ---
export function ThreeBackground() {
  return (
    <Canvas
      camera={{ position: [0, 2, 10], fov: 60 }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -1,
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#a3bffa" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#60a5fa" />

      {/* Wavy background */}
      <WavyPlane />

      {/* Floating objects (school-like) */}
      <FloatingObject
        geometry={<boxGeometry args={[1, 1, 1]} />} // Book
        color="#22c55e"
        position={[-4, 1, 0]}
      />
      <FloatingObject
        geometry={<cylinderGeometry args={[0.1, 0.1, 2, 32]} />} // Pencil
        color="#eab308"
        position={[2, 0.5, -2]}
        scale={1.2}
      />
      <FloatingObject
        geometry={<torusGeometry args={[0.8, 0.25, 16, 100]} />} // Ruler ring
        color="#3b82f6"
        position={[-2, 1.5, 2]}
      />
      <FloatingObject
        geometry={<coneGeometry args={[0.7, 1.5, 32]} />} // Marker tip
        color="#ec4899"
        position={[3, 1, 1]}
      />
      <FloatingObject
        geometry={<sphereGeometry args={[0.6, 32, 32]} />} // Globe
        color="#06b6d4"
        position={[0, 2, -3]}
      />
    </Canvas>
  );
}
