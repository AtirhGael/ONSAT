import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export default function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <meshStandardMaterial
        color="#4299e1"
        metalness={0.5}
        roughness={0.7}
        wireframe
      />
    </Sphere>
  );
}