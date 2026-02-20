import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
          I'm currently looking for Graduate Engineer Trainee / Entry-Level Software Developer opportunities. Feel free to reach out!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="space-y-8">
          <a
            href="mailto:pratikshabillur@gmail.com"
            className="flex items-center gap-4 p-6 bg-zinc-800/50 border border-zinc-700 rounded-2xl hover:border-indigo-500/50 transition group"
          >
            <div className="p-4 bg-indigo-500/20 rounded-xl group-hover:bg-indigo-500/30 transition">
              <Mail size={28} className="text-indigo-400" />
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-zinc-400 group-hover:text-indigo-400 transition">pratikshabillur@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+916361433261"
            className="flex items-center gap-4 p-6 bg-zinc-800/50 border border-zinc-700 rounded-2xl hover:border-purple-500/50 transition group"
          >
            <div className="p-4 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition">
              <Phone size={28} className="text-purple-400" />
            </div>
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-zinc-400 group-hover:text-purple-400 transition">+91 63614 33261</p>
            </div>
          </a>
        </div>

        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-2xl font-bold">Find me on</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <a href="https://linkedin.com/in/pratikshabillur" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 px-6 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl hover:bg-zinc-700/50 transition hover:border-indigo-500/50">
              <Linkedin size={24} className="text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Pratikshabillur" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 px-6 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl hover:bg-zinc-700/50 transition hover:border-gray-400">
              <Github size={24} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;