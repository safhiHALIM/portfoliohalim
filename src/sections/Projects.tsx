"use client";

import ProjectCard from "@/components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedTitle from "@/components/AnimatedTitle";
import { useState } from "react";
import { Search, Code, Globe, LayoutGrid } from "lucide-react";

type ProjectCategory = "all" | "web" | "scripting";

const projects = [
  {
    title: "Brand Landing Page",
    description: "High-conversion landing page featuring modern CSS animations, responsive design, and engaging user interactions.",
    tags: ["React", "CSS", "Design"],
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2FsafhiHALIM.github.io%2FbrandLandingPage%2F?w=800",
    liveUrl: "https://safhiHALIM.github.io/brandLandingPage/",
    category: "web"
  },
  {
    title: "Neo-Safi",
    description: "Personal digital space and portfolio core architecture, demonstrating modern frontend practices with advanced animations.",
    tags: ["Next.js", "React", "Three.js"],
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2FsafhiHALIM.github.io%2FNeo-Safi%2F?w=800",
    liveUrl: "https://safhiHALIM.github.io/Neo-Safi/",
    category: "web"
  },
  {
    title: "Personal Portfolio",
    description: "Modern responsive portfolio showcasing projects, experience, and technical expertise with smooth animations and interactive components.",
    tags: ["Next.js", "React", "Framer Motion"],
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2FsafhiHALIM.github.io%2Fportfolio%2F?w=800",
    liveUrl: "https://safhiHALIM.github.io/portfolio/",
    category: "web"
  },
  {
    title: "Demo 01",
    description: "Interactive web application demonstrating modern web development techniques and responsive design patterns.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2FsafhiHALIM.github.io%2Fdemo01%2F?w=800",
    liveUrl: "https://safhiHALIM.github.io/demo01/",
    category: "web"
  },
  {
    title: "Artist Landing Page",
    description: "An elegant and immersive landing page designed for artists, showcasing portfolios with smooth transitions and responsive layouts.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2FsafhiHALIM.github.io%2Fartist-landing-page%2F?w=800",
    liveUrl: "https://safhiHALIM.github.io/artist-landing-page/",
    category: "web"
  },
  {
    title: "Phone Tracker Script",
    description: "A Python-based utility that retrieves geographical location and carrier information for phone numbers, generating interactive maps.",
    tags: ["Python", "Automation", "OSINT"],
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://github.com/safhiHALIM/Track-Number-phone",
    category: "scripting"
  }
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: "all", label: "All Works", icon: LayoutGrid },
    { id: "web", label: "Web Apps", icon: Globe },
    { id: "scripting", label: "Scripts", icon: Code },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-full h-1/2 bg-gradient-to-r from-blue-900/5 via-purple-900/5 to-transparent -skew-y-6 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <AnimatedTitle text="Selected Works" className="text-4xl md:text-6xl font-bold text-white mb-4" />
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                A curated collection of digital experiences, ranging from high-performance web applications to powerful automation scripts.
              </p>
            </div>

            {/* Search Bar - Refined */}
            <div className="relative w-full md:max-w-xs group">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-2.5 border border-white/10 rounded-xl leading-5 bg-white/5 text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 sm:text-sm transition-all"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filter - Premium Styling */}
          <div className="inline-flex p-1.5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl overflow-hidden relative">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as ProjectCategory)}
                className={`relative flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 z-10 ${
                  activeCategory === cat.id ? "text-white" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-blue-600 rounded-xl shadow-lg shadow-blue-600/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <cat.icon size={16} className="relative z-10" />
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-24 bg-white/5 rounded-3xl border border-dashed border-white/10"
            >
              <div className="flex flex-col items-center gap-3">
                <Search size={40} className="text-gray-600" />
                <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
                <button 
                  onClick={() => {setSearchQuery(""); setActiveCategory("all");}}
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  Clear all filters
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
