"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedTitle from "@/components/AnimatedTitle";

const timelineData = [
  { year: "2024", title: "Senior Frontend Architect", description: "Leading frontend architecture for enterprise-scale applications." },
  { year: "2022", title: "Full Stack Developer", description: "Building scalable web and mobile solutions using React and Node.js." },
  { year: "2020", title: "Creative Developer", description: "Specializing in 3D web experiences and interactive UI/UX." },
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section ref={containerRef} className="min-h-screen py-20 relative overflow-hidden flex flex-col justify-center">
      {/* Animated Background Elements */}
      <motion.div 
        style={{ opacity }}
        className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none blur-3xl" 
      />
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-900/20 to-transparent pointer-events-none blur-3xl" 
      />

      {/* Floating accent orbs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center mb-24 relative z-10">
        <motion.div style={{ y }} className="relative">
          <div className="mb-6 inline-block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-sm"
            >
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Welcome to my portfolio</span>
            </motion.div>
          </div>
          
          <AnimatedTitle 
            text="About Me" 
            className="text-5xl md:text-7xl font-bold mb-10 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent leading-tight"
          />
          
          <div className="space-y-6 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg"
            >
              I am a <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent font-bold">Senior Frontend Architect</span> with a passion for crafting immersive, performant digital experiences that captivate and engage users globally.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg"
            >
              My expertise spans <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">Full-Stack Development</span> across multiple domains — proficient in 
              <span className="text-white/90"> React, Next.js, Python, C# .NET, and Flutter</span>. I excel at bridging the gap between elegant design and robust engineering.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg"
            >
              My mission is to architect and deliver <span className="text-white/90">performant, accessible, and visually stunning applications</span> that make a lasting impression on international clients and users worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-6 flex flex-wrap gap-4"
            >
              {["React", "Next.js", "TypeScript", "3D Web"].map((tech, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium hover:border-blue-400/50 transition-colors duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Avatar Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-[400px] md:h-[550px]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl shadow-2xl group hover:border-blue-400/50 transition-all duration-500">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span 
                className="text-9xl drop-shadow-2xl inline-block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                👨‍💻
              </motion.span>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 text-gray-400 font-mono text-xs tracking-widest uppercase bg-gradient-to-r from-blue-400/30 to-purple-400/30 px-4 py-2 rounded-full inline-block border border-blue-400/20"
              >
                3D Avatar Coming Soon
              </motion.p>
            </motion.div>
          </div>

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <div className="inline-block">
            <AnimatedTitle 
              text="My Journey" 
              className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/5 border border-blue-400/20 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-500 overflow-hidden">
                
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.span 
                    className="text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-mono"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {item.year}
                  </motion.span>
                  
                  <h4 className="text-xl font-bold mt-4 group-hover:text-blue-300 transition-colors duration-300 text-white">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Accent dot */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
