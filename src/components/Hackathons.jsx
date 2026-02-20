import { motion } from 'framer-motion';
import { Trophy, Calendar } from 'lucide-react';

const events = [
  "Epicthon Hackathon 2025 – Digital Land Survey Project",
  "Top 40 Finalist – Hack2Future 2024 (IIIT Dharwad)",
  "Project Presentation – Shetty Group of Institutions, Gulbarga",
  "Attended TCS TechBytes 2025 on AI and emerging technologies"
];

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-24 px-6 bg-zinc-900/40">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ y: 40 }} 
          whileInView={{ y: 0 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Hackathons & Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 bg-zinc-800/60 border border-zinc-700 rounded-2xl p-8 hover:border-purple-400/50 group"
            >
              <div className="mt-1">
                <Trophy className="text-purple-400 group-hover:scale-110 transition" size={32} />
              </div>
              <div>
                <p className="text-lg font-medium leading-tight">{event}</p>
                <div className="flex items-center gap-2 mt-3 text-xs text-zinc-500">
                  <Calendar size={14} /> 2024 – 2025
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;