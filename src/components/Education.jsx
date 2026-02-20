import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "BLDEA’s V.P. Dr. P.G. Halakatti College of Engineering & Technology, Vijayapura",
    period: "2022 – 2026",
    score: "CGPA: 8.62"
  },
  {
    degree: "PUC (PCMB)",
    institution: "BLDEA’s Science College, Jamakhandi",
    period: "2020 – 2022",
    score: "Score: 95.66%"
  },
  {
    degree: "SSLC",
    institution: "Kittur Rani Channamma Residential School, Athani",
    period: "2019 – 2020",
    score: "Score: 92.96%"
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-zinc-900/20">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 bg-zinc-800/40 border border-zinc-700 rounded-2xl hover:border-[var(--accent)]/50 transition-all hover:shadow-xl hover:shadow-indigo-500/10 text-center"
            >
              <GraduationCap size={40} className="mx-auto mb-6 text-[var(--accent)]" />
              <h3 className="text-xl font-bold mb-3">{edu.degree}</h3>
              <p className="text-zinc-400 mb-2">{edu.institution}</p>
              <p className="text-sm text-zinc-500 mb-4">{edu.period}</p>
              <p className="font-medium text-[var(--accent)]">{edu.score}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;