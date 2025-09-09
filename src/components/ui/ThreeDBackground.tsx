/**
 * @file ThreeDBackground.tsx
 * @description A component that renders an interactive 3D particle background using React Three Fiber.
 * This implementation is robust and prevents the "NaN" error by correctly generating particle positions.
 * @author Senior Full-Stack Developer
 * @date 2024-05-16
 */

import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import type { Points as PointsType } from 'three';

/**
 * Defines the properties for the particles.
 * @interface IParticlesProps
 */
interface IParticlesProps {
  count?: number;
}

/**
 * Represents the core 3D particles visualization.
 * It generates a set of points and animates them based on mouse movement and time.
 * This component is designed to be rendered within a React Three Fiber Canvas.
 *
 * @param {IParticlesProps} props - The component props.
 * @returns {React.ReactElement} The 3D points object.
 */
function Particles({ count = 5000 }: IParticlesProps) {
  const points = useRef<PointsType>(null!);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const distance = 3;

    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360); 
      const phi = THREE.MathUtils.randFloatSpread(360); 

      let x = distance * Math.sin(theta) * Math.cos(phi);
      let y = distance * Math.sin(theta) * Math.sin(phi);
      let z = distance * Math.cos(theta);

      positions[i * 3] = isNaN(x) ? 0 : x;
      positions[i * 3 + 1] = isNaN(y) ? 0 : y;
      positions[i * 3 + 2] = isNaN(z) ? 0 : z;
    }

    return positions;
  }, [count]);
  
  useFrame((state) => {
    const { clock, pointer } = state;
    points.current.rotation.y = clock.getElapsedTime() * 0.05;
    points.current.rotation.x = clock.getElapsedTime() * 0.02;

    const targetRotationX = pointer.y * 0.1;
    const targetRotationY = pointer.x * 0.1;

    points.current.rotation.x += (targetRotationX - points.current.rotation.x) * 0.02;
    points.current.rotation.y += (targetRotationY - points.current.rotation.y) * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 2]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.005} 
        color="#5770F5"
        sizeAttenuation 
        depthWrite={false} 
      />
    </points>
  );
}

/**
 * A wrapper component that sets up the React Three Fiber canvas for the 3D background.
 * It's memoized to prevent unnecessary re-renders.
 *
 * @returns {React.ReactElement} The canvas containing the 3D background.
 */
export const ThreeDBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <Particles />
      </Canvas>
    </div>
  );
};