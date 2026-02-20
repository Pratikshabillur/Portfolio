// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Medical Gesture-Based Patient Communication System",
    tech: ["Python", "TensorFlow", "OpenCV", "Streamlit", "MoveNet", "Bi-LSTM"],
    desc: "Developed real-time AI system using MoveNet pose estimation and Bi-LSTM for gesture classification. Converted gestures to medical text and speech output with 92.8% accuracy and low-latency CPU execution.",
    github: "https://github.com/Pratikshabillur/medical-gesture-recognition-system.git",
    live: null, // add if you have a deployed version
  },
  {
    title: "Digital Land Survey System (Epicthon Hackathon)",
    tech: ["React.js", "Leaflet.js", "Node.js"],
    desc: "Built interactive geospatial visualization, land boundary mapping, and real-time data synchronization. Presented at Shetty Group of Institutions, Gulbarga.",
    github: "", // ← add real repo link if you have one
    live: null,
  },
  {
    title: "AI Image & Video Enhancement Tool (Hack2Future 2024)",
    tech: ["Real-ESRGAN", "FILM"],
    desc: "Implemented super-resolution for images/videos using Real-ESRGAN and FILM frame interpolation. Created optimized batch-processing pipeline. Top 40 Finalist.",
    github: "https://github.com/Pratikshabillur/AI_Job_Screening-.git", // Note: seems mismatched name – update if wrong repo
    live: null,
  },
  {
    title: "Student Feedback & Analytics System",
    tech: ["Java", "Full-Stack"],
    desc: "Developed secure authentication, role-based access control, feedback submission, and admin analytics dashboards.",
    github: "https://github.com/Pratikshabillur/Student_feedback_system.git",
    live: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="group bg-zinc-900/60 border border-zinc-700 rounded-3xl overflow-hidden hover:border-indigo-500/60 transition-all duration-300"
          >
            <div className="h-48 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 flex items-center justify-center p-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs font-medium bg-zinc-800/80 text-indigo-300 rounded-full border border-zinc-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">{project.desc}</p>

              <div className="flex gap-6 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition"
                  >
                    <Github size={18} /> Source Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;