'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RotatingIcosahedron = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  // 매 프레임마다 호출되어 이십면체를 회전시킵니다.
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta / 5;
      meshRef.current.rotation.y += delta / 5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 0]} />
      <meshStandardMaterial color="skyblue" />
    </mesh>
  );
};

const IcosahedronDemo = () => {
  return (
    <section style={{ width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* 기본 조명 추가 */}
        <ambientLight intensity={-0.5} />
        <directionalLight position={[2, 2, 2]} />
        <RotatingIcosahedron />
      </Canvas>
    </section>
  );
};

export default IcosahedronDemo;
