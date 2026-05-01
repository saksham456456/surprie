import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sparkles, Float } from '@react-three/drei';
import * as THREE from 'three';

// Create a heart geometry
function HeartShape() {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    const x = 0, y = 0;
    s.moveTo(x + 0.25, y + 0.25);
    s.bezierCurveTo(x + 0.25, y + 0.25, x + 0.20, y, x, y);
    s.bezierCurveTo(x - 0.30, y, x - 0.30, y + 0.35, x - 0.30, y + 0.35);
    s.bezierCurveTo(x - 0.30, y + 0.55, x - 0.10, y + 0.77, x + 0.25, y + 0.95);
    s.bezierCurveTo(x + 0.60, y + 0.77, x + 0.80, y + 0.55, x + 0.80, y + 0.35);
    s.bezierCurveTo(x + 0.80, y + 0.35, x + 0.80, y, x + 0.50, y);
    s.bezierCurveTo(x + 0.30, y, x + 0.25, y + 0.25, x + 0.25, y + 0.25);
    return s;
  }, []);

  const extrudeSettings = {
    depth: 0.1,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 0.05,
    bevelThickness: 0.05,
  };

  return (
    <extrudeGeometry args={[shape, extrudeSettings]} />
  );
}

function FloatingHearts({ count = 15 }) {
  const hearts = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10 - 5
      ],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        0
      ],
      scale: Math.random() * 0.3 + 0.2,
      speed: Math.random() * 2 + 1
    }));
  }, [count]);

  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.position.y += Math.sin(time * hearts[i].speed) * 0.01;
        child.rotation.y += 0.01;
      });

      // Mouse parallax for hearts
      const targetX = (state.pointer.x * 2);
      const targetY = (state.pointer.y * 2);
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.02;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {hearts.map((props, i) => (
        <Float key={i} speed={props.speed} rotationIntensity={1} floatIntensity={2}>
          <mesh position={props.position} rotation={props.rotation} scale={props.scale}>
            <HeartShape />
            <meshStandardMaterial
              color="#f9a8d4"
              roughness={0.2}
              metalness={0.1}
              transparent
              opacity={0.6}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function ParticleSwarm() {
  const ref = useRef();

  // Generate random particles
  const count = 2000;
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Create a large sphere distribution
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 10 + Math.random() * 15;

      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;

      // Subtle mouse parallax for particles
      ref.current.position.x += (state.pointer.x * 0.5 - ref.current.position.x) * 0.05;
      ref.current.position.y += (state.pointer.y * 0.5 - ref.current.position.y) * 0.05;
    }
  });

  return (
    <group>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#fbcfe8"
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <Sparkles count={200} scale={15} size={2} speed={0.4} opacity={0.3} color="#f472b6" />
    </group>
  );
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-b from-brand-50 to-brand-100/50">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#fce7f3" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#fbcfe8" />
        <ParticleSwarm />
        <FloatingHearts count={20} />
      </Canvas>
    </div>
  );
}
