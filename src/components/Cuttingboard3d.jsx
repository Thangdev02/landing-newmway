'use client';

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import { useRef, Suspense } from "react";
import { useScroll, useTransform } from "framer-motion";
import * as THREE from "three";

function Board({ scrollYProgress }) {
  const ref = useRef();
  const { viewport } = useThree();

  const vw = viewport.width;
  const vh = viewport.height;

  const gltf = useGLTF("/cutting_board/scene.gltf");
  let scene = gltf.scene;

  const x = useTransform(
    scrollYProgress,
    [0, 0.15, 1.55, 4.5, 0.62, 0.72, 0.85],
    [
      vw * 0.2,
      -vw * 0.3,
      vw * 0.15,
      vw * 0.25,

      -vw * 0.08, // 👈 SNAP CARD
      -vw * 0.08,
      -vw * 0.2
    ]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.55, 3.35, 0.5, 0.6, 0.7, 0.85],
    [
      vh * 0.1,
      vh * 0.05,
      vh * 0.08,
      -vh * 0.15,

      -vh * 0.12, // 👈 SNAP CARD - Di xuống để vào giữa card
      -vh * 0.12,
      vh * 0.05
    ]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.5, 0.6, 0.7, 0.85],
    [0.32, 0.22, 0.15, 0.08, 0.28, 0.28, 0.3]
  );

  const rotY = useTransform(
    scrollYProgress,
    [0, 0.2, -3.92, 0.6, 0.8, 1],
    [0.2, Math.PI * 0.5, Math.PI * 0.3, Math.PI * 1.5, Math.PI * 2, Math.PI * 2.5]
  );

  const rotX = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, -0.3, 0.1]);
  const rotZ = useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.2, 0.3]);

  useFrame((state) => {
    if (!ref.current) return;

    const time = state.clock.elapsedTime;
    const scrollValue = scrollYProgress.get();

    const snapZone = scrollValue > 0.6 && scrollValue < 0.72;
    const floatIntensity = snapZone ? 0.005 : 0.03;

    ref.current.position.set(
      x.get(),
      y.get() + Math.sin(time * 0.5) * floatIntensity,
      0
    );

    ref.current.rotation.set(
      rotX.get() + Math.sin(time * 0.3) * 0.01,
      rotY.get(),
      rotZ.get()
    );

    const s = scale.get();
    ref.current.scale.set(s, s, s);
  });

  if (scene) {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material) {
          child.material.envMapIntensity = 1.5;
          child.material.roughness = 0.6;
          child.material.metalness = 0.1;
        }
      }
    });

    return <primitive ref={ref} object={scene} />;
  }

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={[2, 0.3, 3]} />
      <meshStandardMaterial color="#d4a574" roughness={0.6} metalness={0.1} />
    </mesh>
  );
}

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#d4a574" wireframe />
    </mesh>
  );
}

export default function CuttingBoard3D() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 10 }}>
      <Canvas
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
        camera={{ position: [0, 0.8, 4.5], fov: 35 }}
        shadows
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
      >
        <color attach="background" args={["transparent"]} />

        <ambientLight intensity={1.3} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={2.8}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <directionalLight position={[-5, 4, 5]} intensity={1.4} />
        <spotLight
          position={[0, 10, 0]}
          intensity={1}
          angle={0.6}
          penumbra={1}
          castShadow
        />

        <Environment preset="city" />

        <Suspense fallback={<Loader />}>
          <Board scrollYProgress={scrollYProgress} />
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.35}
            scale={10}
            blur={2.5}
            far={4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
