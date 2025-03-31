'use client';

import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Boxes = () => {
  const boxRefs = useRef<THREE.Mesh[]>([]);

  const positions: [number, number, number][] = [
    [-3, 0, 0],
    [-1.5, 0, 0],
    [0, 0, 0],
    [1.5, 0, 0],
    [3, 0, 0],
    [4.5, 0, 0],
  ];

  return (
    <>
      {positions.map((pos, i) => (
        <mesh
          key={i}
          ref={el => {
            if (el) boxRefs.current[i] = el;
          }}
          position={pos}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="tomato" />
        </mesh>
      ))}
    </>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight />
      <directionalLight position={[2, 2, 2]} />
      <Boxes />
      <OrbitControls />
    </>
  );
};

const BoxHoverOrbitExample = () => {
  return (
    <section style={{ width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <Scene />
      </Canvas>
    </section>
  );
};

export default BoxHoverOrbitExample;
