import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
          Passionate final-year CSE student turning ideas into real-world solutions with code.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6 text-zinc-300 leading-relaxed">
          <p>
            Final-year B.E. Computer Science and Engineering student with strong expertise in 
            <span className="text-indigo-400 font-medium"> Java Full-Stack Development</span>, 
            <span className="text-indigo-400 font-medium"> MERN Stack</span>, 
            <span className="text-indigo-400 font-medium"> C# .NET Backend</span>, and modern web technologies.
          </p>
          <p>
            Hands-on experience building responsive applications, real-time AI systems, and scalable backend solutions through internships and hackathons.
          </p>
          <p className="font-medium">
            Actively seeking <span className="text-purple-400">Graduate Engineer Trainee</span> / 
            <span className="text-purple-400"> Entry-Level Software Developer</span> roles starting 2026.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-center">
          <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-indigo-500/50 transition">
            <h4 className="text-3xl font-bold text-indigo-400">8.62</h4>
            <p className="text-zinc-400 mt-2">CGPA</p>
          </div>
          
          <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-indigo-500/50 transition col-span-2 md:col-span-1">
            <h4 className="text-3xl font-bold text-indigo-400">3+</h4>
            <p className="text-zinc-400 mt-2">Hackathon Participation</p>
          </div>
        </div>
      </motion.div>
              <div className="mt-16 grid md:grid-cols-2 gap-10">
          <div>
            <h4 className="uppercase text-xs tracking-widest text-zinc-500 mb-4">Languages</h4>
            <div className="flex flex-wrap gap-3">
              {["English", "Kannada (Native)", "Hindi (Conversational)"].map(l => (
                <span key={l} className="px-5 py-2 bg-zinc-800 rounded-full text-sm">{l}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="uppercase text-xs tracking-widest text-zinc-500 mb-4">Interests</h4>
            <div className="flex flex-wrap gap-3">
              {["Software Development", ".NET & C#", "Java Frameworks", "Artificial Intelligence", "Machine Learning", "Web Development", "Data Analytics"].map(i => (
                <span key={i} className="px-5 py-2 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-full text-sm border border-purple-500/30">{i}</span>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;