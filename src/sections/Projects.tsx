"use client";

import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import AnimatedTitle from "@/components/AnimatedTitle";

const projects = [
  {
    title: "Neo-Safi",
    description: "Personal digital space and portfolio core architecture, demonstrating modern frontend practices with advanced animations.",
    tags: ["Next.js", "React", "Three.js"],
    image: "/project1.jpg",
    liveUrl: "https://safhiHALIM.github.io/Neo-Safi/"
  },
  {
    title: "TempMaker",
    description: "Automated template generation tool built with Python for streamlining development workflows and productivity.",
    tags: ["Python", "Automation", "CLI"],
    image: "/project2.jpg"
  },
  {
    title: "Brand Landing Page",
    description: "High-conversion landing page featuring modern CSS animations, responsive design, and engaging user interactions.",
    tags: ["React", "CSS", "Design"],
    image: "/project3.jpg",
    liveUrl: "https://safhiHALIM.github.io/brandLandingPage/"
  },
  {
    title: "Interactive 3D Portfolio",
    description: "Next-generation portfolio with Three.js integration, Framer Motion animations, and immersive user experience.",
    tags: ["Next.js", "Three.js", "WebGL"],
    image: "/project4.jpg",
    liveUrl: "https://github.com/safhiHALIM/portefolio"
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-full h-1/2 bg-gradient-to-r from-blue-900/5 via-purple-900/5 to-transparent -skew-y-6 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <AnimatedTitle text="Selected Works" className="text-4xl md:text-6xl font-bold mb-4 text-white" />
          <p className="text-xl text-gray-400 max-w-2xl mt-4">
            A collection of projects that demonstrate my expertise in frontend architecture, 3D web experiences, and full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
