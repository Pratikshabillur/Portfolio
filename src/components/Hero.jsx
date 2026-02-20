// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen hero-bg flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#6366f1_0.8px,transparent_1px)] [background-size:40px_40px] opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium">Open to Work• 2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Pratiksha Billur</span>
          </h1>

          <p className="mt-6 text-2xl text-zinc-200">Final-Year CSE • Java Full-Stack + MERN + AI/ML Engineer</p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="public/resume.pdf"
              download="Pratiksha_Billur_Resume.pdf"
              className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:scale-105 transition flex items-center gap-3 shadow-xl shadow-indigo-500/30"
            >
              <Download size={20} /> Download Resume (PDF)
            </a>

            <a href="#contact" className="px-8 py-4 border border-white/40 hover:border-white rounded-xl flex items-center gap-3 transition hover:bg-white/10">
              <Mail size={20} /> Contact Me
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-10 text-sm">
            <a href="https://linkedin.com/in/pratikshabillur" target="_blank" className="flex items-center gap-2 hover:text-indigo-400 transition">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://github.com/Pratikshabillur" target="_blank" className="flex items-center gap-2 hover:text-indigo-400 transition">
              <Github size={20} /> GitHub
            </a>
            <a href="mailto:pratikshabillur@gmail.com" className="flex items-center gap-2 hover:text-indigo-400 transition">
              <Mail size={20} /> Email
            </a>
            <a href="tel:+916361433261" className="flex items-center gap-2 hover:text-indigo-400 transition">
              <Phone size={20} /> +91 63614 33261
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-[3rem] blur-3xl opacity-30" />
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl">
              <img
                src="https://avatars.githubusercontent.com/u/153793852?v=4" // ← REPLACE WITH YOUR PHOTO URL
                alt="Pratiksha Billur"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;