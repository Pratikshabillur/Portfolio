import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Software Development Intern (C# .NET Backend & MERN Full-Stack)",
    company: "Loginware Softtec Pvt. Ltd., Bengaluru",
    period: "Jan 2026 – Present",
    points: [
      "Developing scalable backend systems using C# and .NET Framework for enterprise web applications",
      "Building and maintaining RESTful APIs, business logic layers, and database integrations",
      "Working on full-stack features with React.js and Node.js",
      "Collaborating on secure, performant web solutions with focus on backend architecture and UI/UX"
    ]
  },
  {
    role: "Machine Learning Research Intern",
    company: "Varcons Technologies Pvt. Ltd.",
    period: "May 2024 – June 2024",
    points: [
      "Performed data preprocessing, model training/optimization, evaluation",
      "Maintained Git-based documentation and version control"
    ]
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
      >
        Experience
      </motion.h2>

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className="relative pl-10 border-l-2 border-[var(--accent)]/40"
          >
            <div className="absolute -left-4 top-1 bg-[var(--bg-primary)] p-2 rounded-full border-2 border-[var(--accent)]/40">
              <Briefcase size={20} className="text-[var(--accent)]" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
            <p className="text-[var(--accent)] font-medium mb-1">{exp.company}</p>
            <p className="text-zinc-500 mb-4">{exp.period}</p>
            <ul className="space-y-2 text-zinc-300">
              {exp.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-[var(--accent)] rounded-full flex-shrink-0"></span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;