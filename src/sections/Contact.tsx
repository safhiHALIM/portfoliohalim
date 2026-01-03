"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import AnimatedTitle from "@/components/AnimatedTitle";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    // Using FormSubmit.co as it's easier to set up without an API key initially
    const email = "halimsf@outlook.fr";

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      });

      const data = await response.json();

      if (data.success === "true" || response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Error: " + (data.message || "Could not send message."));
      }
    } catch (error) {
      alert("Error sending message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 relative flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          {isSubmitted ? (
            <div className="text-center py-10">
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 size={40} />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400 mb-8">Thank you for reaching out. I&apos;ll get back to you soon.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <AnimatedTitle text="Let's Work Together" className="text-4xl font-bold mb-2 text-white" />
                <p className="text-gray-400 mt-4">Have a project in mind? I&apos;d love to hear from you.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot for Spambots */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <textarea 
                    required
                    name="message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
                </motion.button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
