"use client";

import { motion } from "framer-motion";
import AnimatedTitle from "@/components/AnimatedTitle";

const experiences = [
  {
    company: "TechCorp Inc.",
    role: "Senior Frontend Architect",
    period: "2022 - Present",
    description: "Leading the frontend migration to Next.js, improving performance by 40%. Mentoring a team of 5 developers."
  },
  {
    company: "Creative Studio",
    role: "Creative Developer",
    period: "2020 - 2022",
    description: "Developed award-winning immersive web experiences using WebGL and Three.js for international brands."
  },
  {
    company: "StartUp X",
    role: "Full Stack Developer",
    period: "2018 - 2020",
    description: "Built the MVP from scratch using React and Node.js. Scaled the application to 100k+ users."
  }
];

const clients = ["Google", "Spotify", "Nike", "Apple", "Stripe", "Vercel"];

export default function Experience() {
  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <AnimatedTitle text="Experience & Clients" className="text-4xl md:text-6xl font-bold text-white" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-blue-400 flex items-center gap-2">
              <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
              Career History
            </h3>
            <div className="space-y-12 border-l-2 border-white/10 pl-8 ml-4">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -left-[41px] top-0 w-5 h-5 bg-black border-2 border-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <span className="text-sm text-gray-400 font-mono bg-white/5 px-2 py-1 rounded">{exp.period}</span>
                  <h4 className="text-xl font-bold mt-2 group-hover:text-blue-300 transition-colors">{exp.role}</h4>
                  <p className="text-blue-300 mb-2 font-medium">{exp.company}</p>
                  <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Clients Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-purple-400 flex items-center gap-2">
              <span className="w-2 h-8 bg-purple-500 rounded-full inline-block"></span>
              Trusted By
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="h-24 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center cursor-pointer transition-all hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                >
                  <span className="font-bold text-xl text-gray-300 group-hover:text-white">{client}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
