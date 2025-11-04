"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

// --- Animated Neon Wave ---
function NeonWave() {
  const meshRef = useRef<THREE.Mesh>(null);
  const clock = useMemo(() => new THREE.Clock(), []);

  useFrame(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const time = clock.getElapsedTime() * 0.6;
    const pos = mesh.geometry.attributes.position;
    const count = pos.count;

    for (let i = 0; i < count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z =
        Math.sin(x * 0.25 + time) * 0.6 +
        Math.cos(y * 0.35 + time * 1.2) * 0.6;
      pos.setZ(i, z);
    }

    pos.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} rotation-x={-Math.PI / 2.5} position={[0, -3, 0]}>
      <planeGeometry args={[60, 60, 200, 200]} />
      <meshBasicMaterial
        color="#ff0044"
        wireframe
        opacity={0.85}
        transparent
      />
    </mesh>
  );
}

// --- Background Scene ---
export function ThreeBackground() {
  

  return (
    <>
      {/* Background overlay (like your CSS example) */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "#000",
          backgroundImage: "url(/_next/static/media/white.8d3d9fa1.png)",
          backgroundSize: "150px 150px",
          backgroundPosition: "top",
          opacity: 0.05,
          zIndex: -2,
        }}
      />

      {/* Three.js wave layer */}
      <Canvas
        camera={{ position: [0, 10, 18], fov: 50 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1,
          background: "radial-gradient(circle at center, #160020 0%, #000000 100%)",
        }}
      >
        <ambientLight intensity={0.4} color="#ff003c" />
        <pointLight position={[10, 10, 10]} color="#ff003c" intensity={1.2} />
        <pointLight position={[-10, -10, -10]} color="#7f00ff" intensity={1.2} />

        <NeonWave />
      </Canvas>
    </>
  );
}
