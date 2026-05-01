
import { motion, useScroll, useTransform } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

const memories = [
  {
    date: "The Beginning",
    title: "First time we talked",
    description: "The moment that started it all. Who knew it would lead to this?",
    placeholder: "Add your first screenshot/photo here"
  },
  {
    date: "The Connection",
    title: "Our favorite late-night chats",
    description: "Losing track of time talking about everything and nothing.",
    placeholder: "Add a chat screenshot here"
  },
  {
    date: "The Laughs",
    title: "That one inside joke",
    description: "You know exactly what I'm talking about. Still makes me smile.",
    placeholder: "Add a funny photo here"
  }
];

function MemoryCard({ memory, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 my-20 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-white/50 backdrop-blur-sm rounded-3xl border-2 border-dashed border-brand-300 flex flex-col items-center justify-center p-6 text-center transform rotate-2 hover:rotate-0 transition-transform duration-300">
          <ImageIcon className="w-12 h-12 text-brand-400 mb-4" />
          <p className="text-brand-600 font-medium">{memory.placeholder}</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left px-4">
        <div className="inline-block bg-brand-100 text-brand-600 font-semibold px-4 py-1 rounded-full text-sm mb-4">
          {memory.date}
        </div>
        <h3 className="text-3xl font-bold text-brand-900 mb-4">{memory.title}</h3>
        <p className="text-brand-700 text-lg leading-relaxed">{memory.description}</p>
      </div>
    </motion.div>
  );
}

export default function MemoriesSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section className="min-h-screen py-24 relative overflow-hidden">
      {/* Subtle background element */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20"
      >
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-800 mb-6">Our Journey</h2>
          <p className="text-brand-700 text-lg max-w-2xl mx-auto">
            Small moments that mean the world to me.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-200 transform -translate-x-1/2" />

          {memories.map((memory, index) => (
            <MemoryCard key={index} memory={memory} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
