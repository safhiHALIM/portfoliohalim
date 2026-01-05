"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Code2, Database, Globe, Layers, Workflow, Zap, Shield, Target,
  Briefcase, Building2, Calculator, Clock, Search, FileText, Users, 
  Monitor, Terminal, Code, MousePointer2, Box, Cpu, Languages, 
  Headphones, Laptop, Layout, Network, Server, Image, Rocket, 
  ListTodo, GraduationCap, UserCheck
} from "lucide-react";

const modules = [
  { id: 1, title: "Métier et formation", icon: Briefcase },
  { id: 2, title: "L’entreprise et son environnement", icon: Building2 },
  { id: 3, title: "Notions de mathématiques appliquées à l’informatique", icon: Calculator },
  { id: 4, title: "Gestion du temps", icon: Clock },
  { id: 5, title: "Veille technologique", icon: Search },
  { id: 6, title: "Production de documents", icon: FileText },
  { id: 7, title: "Communication interpersonnelle", icon: Users },
  { id: 8, title: "Logiciels d’application", icon: Monitor },
  { id: 9, title: "Techniques de programmation structurée", icon: Terminal },
  { id: 10, title: "Langage de programmation structurée", icon: Code },
  { id: 11, title: "Programmation événementielle", icon: MousePointer2 },
  { id: 12, title: "Programmation orientée objet", icon: Box },
  { id: 13, title: "Conception et modélisation d’un système d’information", icon: Layout },
  { id: 14, title: "Installation d’un poste informatique", icon: Cpu },
  { id: 15, title: "Communication en anglais dans un contexte de travail", icon: Languages },
  { id: 16, title: "Assistance technique à la clientèle", icon: Headphones },
  { id: 17, title: "Système de gestion de bases de données I", icon: Database },
  { id: 18, title: "Soutien technique en milieu de travail (Stage I)", icon: Laptop },
  { id: 19, title: "Analyse et conception orientée objet", icon: Workflow },
  { id: 20, title: "Introduction aux réseaux informatiques", icon: Network },
  { id: 21, title: "Système de gestion de bases de données II", icon: Database },
  { id: 22, title: "Programmation Client-serveur", icon: Server },
  { id: 23, title: "Applications hypermédias", icon: Image },
  { id: 24, title: "Programmation de sites Web dynamiques", icon: Globe },
  { id: 25, title: "Déploiement d’applications", icon: Rocket },
  { id: 26, title: "Initiation à la gestion de projets informatiques", icon: ListTodo },
  { id: 27, title: "Projet de conception de fin de formation", icon: GraduationCap },
  { id: 28, title: "Recherche d’emploi", icon: Search },
  { id: 29, title: "Intégration au milieu du travail", icon: UserCheck },
];

interface EducationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EducationModal({ isOpen, onClose }: EducationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div data-lenis-prevent className="bg-gradient-to-br from-[#0a0a0a] via-[#0f0f1e] to-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-scroll overflow-x-hidden pointer-events-auto shadow-2xl relative">
              {/* Background gradient accent */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-50 cursor-pointer"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12 relative z-10">
                {/* Header */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-12"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Professional Profile
                    </h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg mb-6 font-light">
                    I am an experienced software developer with a strong passion for programming and problem-solving, specialized in Microsoft technologies. My core expertise includes <span className="text-blue-300 font-semibold">C#</span>, <span className="text-blue-300 font-semibold">C</span>, and <span className="text-blue-300 font-semibold">SQL Server</span>, with a solid foundation in building robust, maintainable applications.
                  </p>
                  <div className="mt-6 space-y-4 text-gray-400">
                    <div className="flex gap-3">
                      <Target size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                      <p>
                        I have extensive experience in <span className="text-blue-300 font-semibold">object-oriented</span> and <span className="text-blue-300 font-semibold">event-driven programming</span>, as well as in the development of desktop and enterprise applications using C# and the .NET ecosystem.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Zap size={20} className="text-purple-400 flex-shrink-0 mt-1" />
                      <p>
                        Hands-on experience in web development, working with <span className="text-purple-300 font-semibold">Node.js</span>, <span className="text-purple-300 font-semibold">Express.js</span>, and <span className="text-purple-300 font-semibold">MongoDB</span> to design scalable backend solutions and RESTful APIs.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Shield size={20} className="text-green-400 flex-shrink-0 mt-1" />
                      <p>
                        Strong skills in software analysis and system design, applying industry-standard methodologies such as <span className="text-green-300 font-semibold">UML</span> and <span className="text-green-300 font-semibold">MERISE</span> to optimize complex systems.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Technical Skills Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-16"
                >
                  <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
                    <span className="w-1 h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
                    Technical Skills
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Programming Languages */}
                    <motion.div 
                      whileHover={{ scale: 1.02, translateY: -4 }}
                      className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 mb-4 text-blue-400">
                        <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                          <Code2 size={24} />
                        </div>
                        <h4 className="font-bold text-lg">Programming Languages</h4>
                      </div>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-500 rounded-full"></span>C#</li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-500 rounded-full"></span>C</li>
                      </ul>
                    </motion.div>

                    {/* Microsoft & .NET */}
                    <motion.div 
                      whileHover={{ scale: 1.02, translateY: -4 }}
                      className="bg-gradient-to-br from-purple-900/20 to-purple-900/5 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 mb-4 text-purple-400">
                        <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                          <Layers size={24} />
                        </div>
                        <h4 className="font-bold text-lg">Microsoft & .NET</h4>
                      </div>
                      <ul className="space-y-2 text-gray-300 grid grid-cols-2 gap-3">
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>.NET Framework</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>ADO.NET</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>ASP.NET</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>Entity Framework</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>Xamarin</li>
                      </ul>
                    </motion.div>

                    {/* Web & Backend */}
                    <motion.div 
                      whileHover={{ scale: 1.02, translateY: -4 }}
                      className="bg-gradient-to-br from-green-900/20 to-green-900/5 rounded-xl p-6 border border-green-500/30 hover:border-green-500/50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 mb-4 text-green-400">
                        <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                          <Globe size={24} />
                        </div>
                        <h4 className="font-bold text-lg">Web & Backend</h4>
                      </div>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-green-500 rounded-full"></span>Node.js</li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-green-500 rounded-full"></span>Express.js</li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-green-500 rounded-full"></span>RESTful APIs</li>
                      </ul>
                    </motion.div>

                    {/* Databases */}
                    <motion.div 
                      whileHover={{ scale: 1.02, translateY: -4 }}
                      className="bg-gradient-to-br from-yellow-900/20 to-yellow-900/5 rounded-xl p-6 border border-yellow-500/30 hover:border-yellow-500/50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 mb-4 text-yellow-400">
                        <div className="p-2 bg-yellow-500/20 rounded-lg group-hover:bg-yellow-500/30 transition-colors">
                          <Database size={24} />
                        </div>
                        <h4 className="font-bold text-lg">Databases</h4>
                      </div>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span>SQL Server</li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span>MongoDB</li>
                      </ul>
                    </motion.div>

                    {/* Analysis & Design */}
                    <motion.div 
                      whileHover={{ scale: 1.02, translateY: -4 }}
                      className="bg-gradient-to-br from-red-900/20 to-red-900/5 rounded-xl p-6 border border-red-500/30 hover:border-red-500/50 transition-all cursor-pointer group md:col-span-2"
                    >
                      <div className="flex items-center gap-3 mb-4 text-red-400">
                        <div className="p-2 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors">
                          <Workflow size={24} />
                        </div>
                        <h4 className="font-bold text-lg">Analysis & Design</h4>
                      </div>
                      <ul className="space-y-2 text-gray-300 grid md:grid-cols-3 gap-3">
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full"></span>UML & MERISE</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full"></span>OOD</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full"></span>Event-Driven Arch.</li>
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Training Modules Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
                    <span className="w-1 h-10 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                    Modules de Formation
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {modules.map((module) => (
                      <motion.div
                        key={module.id}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                      >
                        <div className="p-2.5 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 text-gray-400 group-hover:text-blue-400 transition-colors shadow-lg">
                          <module.icon size={20} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500 font-mono">Module {module.id}</span>
                          <span className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">
                            {module.title}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}