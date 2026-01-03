"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Maximize2 } from "lucide-react";

interface ProjectPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

export default function ProjectPreviewModal({ isOpen, onClose, url, title }: ProjectPreviewModalProps) {
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
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-2 md:p-8 pointer-events-none"
          >
            <div data-lenis-prevent className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full h-full max-w-7xl overflow-hidden pointer-events-auto shadow-2xl flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#0f0f1e]">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} /> Open in new tab
                  </a>
                </div>
                <div className="flex items-center gap-2">
                   <button
                    onClick={onClose}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Iframe Content */}
              <div className="flex-1 bg-white relative">
                <iframe 
                  src={url} 
                  className="w-full h-full border-none"
                  title={`Preview of ${title}`}
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
