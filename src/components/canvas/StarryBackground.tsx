"use client";

import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";
import { useState, useEffect } from "react";

function BackgroundParticles() {
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={200} scale={10} size={2} speed={0.4} opacity={0.5} color="#60a5fa" />
    </>
  );
}

export default function StarryBackground() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
  }, []);

  if (isTouchDevice) {
    return null;
  }

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <BackgroundParticles />
      </Canvas>
    </div>
  );
}
