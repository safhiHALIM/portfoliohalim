"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string; // In a real app, this would be an image URL
  liveUrl?: string;
}

export default function ProjectCard({ title, description, tags, image, liveUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;

    const xPct = mouseXFromCenter / width;
    const yPct = mouseYFromCenter / height;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCardClick = () => {
    if (liveUrl) {
      window.open(liveUrl, "_blank");
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[400px] w-full rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 cursor-pointer group"
    >
      <div 
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="absolute inset-4 rounded-lg overflow-hidden bg-black/50"
      >
        {/* Placeholder for Image/Video */}
        <div className="w-full h-full overflow-hidden relative group-hover:scale-110 transition-transform duration-500 bg-[#1a1a1a]">
          {liveUrl ? (
            <iframe 
              src={liveUrl} 
              className="w-[200%] h-[200%] border-0 transform scale-50 origin-top-left pointer-events-none"
              title={title}
              loading="lazy"
            />
          ) : (
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
               <div className="w-full h-full flex items-center justify-center bg-black/30">
                 <span className="text-4xl">🖥️</span>
               </div>
            </div>
          )}
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{title}</h3>
          <p className="text-gray-300 text-sm mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{description}</p>
          <div className="flex flex-wrap gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
            {tags.map(tag => (
              <span key={tag} className="text-xs px-2 py-1 bg-white/10 rounded-full text-blue-300">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
      >
        <ArrowUpRight size={20} />
      </div>
    </motion.div>
  );
}
