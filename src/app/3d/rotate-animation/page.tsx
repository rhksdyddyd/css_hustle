'use client';

import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';
import * as THREE from 'three';

function SeasonBox() {
  const [faceIndex, setFaceIndex] = useState(0);

  const [springAnim, api] = useSpring(() => ({ rotation: [0, 0, 0] }));

  const textures = useTexture({
    spring: 'https://picsum.photos/200/300',
    summer: 'https://picsum.photos/200/300',
    autumn: 'https://picsum.photos/200/300',
    winter: 'https://picsum.photos/200/300',
  });

  const materialProps = { side: THREE.DoubleSide };

  const animateRotation = async () => {
    console.log('animate rotation: ', faceIndex);
    const nextY = (faceIndex + 1) * (Math.PI / 2);

    await api.start({ rotation: [0, nextY, 0], config: { duration: 500 } });
    setFaceIndex(prev => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      animateRotation();
    }, 3000);
    return () => clearInterval(interval);
  }, [faceIndex]);

  return (
    <a.group rotation={springAnim.rotation}>
      <mesh position={[0, 0, 1.5]}>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial map={textures.spring} {...materialProps} />
      </mesh>
      <mesh position={[1.5, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial map={textures.summer} {...materialProps} />
      </mesh>
      <mesh position={[0, 0, -1.5]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial map={textures.autumn} {...materialProps} />
      </mesh>
      <mesh position={[-1.5, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial map={textures.winter} {...materialProps} />
      </mesh>
    </a.group>
  );
}

export default function App() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <SeasonBox />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
