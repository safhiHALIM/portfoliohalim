"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedTitleProps {
  text: string;
  className?: string;
  wordSpace?: string;
  charSpace?: string;
}

export default function AnimatedTitle({ 
  text, 
  className = "", 
  wordSpace = "mr-[0.25em]", 
  charSpace = "mr-[-0.05em]" 
}: AnimatedTitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <h2 ref={ref} className={`font-bold ${className}`}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
      >
        {text.split(" ").map((word, i) => (
          <span key={i} className={`inline-block ${wordSpace}`}>
            {word.split("").map((char, j) => (
              <motion.span
                key={j}
                className={`inline-block ${charSpace}`}
                variants={defaultAnimations}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </h2>
  );
}
