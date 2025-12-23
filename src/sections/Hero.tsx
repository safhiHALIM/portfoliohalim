"use client";

import { motion } from "framer-motion";
import HeroScene from "@/components/canvas/HeroScene";
import { ArrowRight, Mail, Github, Linkedin, Twitter } from "lucide-react";
import AnimatedTitle from "@/components/AnimatedTitle";

const socialLinks = [
  { icon: Github, label: "GitHub", url: "https://github.com/safhiHALIM" },
  { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/safhi-halim" },
  { icon: Twitter, label: "Twitter", url: "https://twitter.com" },
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <HeroScene />
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-6">
          <AnimatedTitle 
            text="I build immersive" 
            className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-400"
          />
          <AnimatedTitle 
            text="digital experiences" 
            className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mt-2"
          />
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light tracking-wide"
        >
          Senior Frontend Architect & Creative Developer
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
        >
          <button className="px-8 py-4 bg-white text-black rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
            View Projects <ArrowRight size={20} />
          </button>
          <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 transition-all cursor-pointer hover:border-white/40">
            Contact Me <Mail size={20} />
          </button>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="flex gap-6 justify-center"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 group"
                aria-label={social.label}
              >
                <Icon size={24} className="group-hover:text-blue-400 transition-colors" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
