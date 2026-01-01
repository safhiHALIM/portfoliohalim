"use client";

import { ReactLenis } from "lenis/react";
import { useState, useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
  }, []);

  if (isTouchDevice) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
}
