import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function MemoriesSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="h-[200vh] w-full relative">
      {/* Scene 2: The First Memory */}
      <div className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-4 overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute -left-20 md:left-20 w-[300px] h-[400px] bg-white/20 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl rotate-[-6deg] p-4 hidden md:flex items-center justify-center">
           <ImageIcon className="w-12 h-12 text-brand-300 opacity-50" />
        </motion.div>

        <div className="z-10 text-center max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            className="text-brand-500 text-sm tracking-[0.2em] uppercase mb-6 font-semibold"
          >
            Chapter II
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-brand-800 mb-8"
          >
            Do you remember <br/>our <span className="italic font-serif text-brand-600">first talk</span>?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-64 h-64 mx-auto bg-white/50 backdrop-blur-md rounded-2xl border-2 border-dashed border-brand-300 flex flex-col items-center justify-center p-6 rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer shadow-lg"
          >
            <ImageIcon className="w-10 h-10 text-brand-400 mb-3" />
            <p className="text-brand-600 font-medium text-sm">Tap to place photo</p>
          </motion.div>
        </div>
      </div>

      {/* Scene 3: The Connection */}
      <div className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-4 overflow-hidden bg-brand-900/5 backdrop-blur-sm">
         <motion.div style={{ y: y2 }} className="absolute right-[-10%] md:right-20 w-[400px] h-[300px] bg-white/20 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl rotate-[4deg] p-4 hidden md:flex items-center justify-center">
           <ImageIcon className="w-12 h-12 text-brand-300 opacity-50" />
        </motion.div>

        <div className="z-10 text-center max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-brand-900 mb-8 leading-tight"
          >
            Losing track <br/>of <span className="italic font-serif text-brand-500">time</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl md:text-3xl text-brand-700 font-medium leading-relaxed"
          >
            Those late-night chats that felt like they lasted five minutes, but took five hours.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
