import { motion } from 'framer-motion';
import { Code, Database, Brain, Layout, Server, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code size={28} />,
    items: ["Java", "C#", "Python", "JavaScript"],
  },
  {
    title: "Backend & Frameworks",
    icon: <Server size={28} />,
    items: [".NET Framework", "Node.js", "Express.js"],
  },
  {
    title: "Frontend & Web",
    icon: <Layout size={28} />,
    items: ["React.js", "HTML", "CSS", "RESTful APIs"],
  },
  {
    title: "AI / Machine Learning",
    icon: <Brain size={28} />,
    items: ["TensorFlow", "OpenCV", "MoveNet", "CNN", "LSTM", "Bi-LSTM"],
  },
  {
    title: "Databases",
    icon: <Database size={28} />,
    items: [
      "Microsoft SQL Server (MSSQL)",
      "MySQL",
      "MongoDB",
      // You can add more later: "PostgreSQL", "Redis", "Firebase Firestore", etc.
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.04, y: -8, transition: { duration: 0.3 } }}
              className="p-7 bg-zinc-800/60 border border-zinc-700 rounded-2xl hover:border-indigo-500/60 hover:shadow-lg hover:shadow-indigo-500/10 transition-all group flex flex-col"
            >
              <div className="text-indigo-400 mb-5 group-hover:text-purple-400 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-5 group-hover:text-white transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-2.5 text-zinc-300 flex-grow">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base">
                    <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Optional: remaining tools in a compact, elegant way */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500 text-sm uppercase tracking-wider mb-4">
            Also Proficient In
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {["Git / GitHub", "VS Code", "Jupyter Notebook", "Streamlit"].map((tool) => (
              <span
                key={tool}
                className="px-5 py-2 bg-zinc-800/70 text-zinc-300 rounded-full text-sm border border-zinc-700 hover:border-zinc-500 transition"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;