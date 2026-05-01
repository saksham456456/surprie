import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HomeSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative px-4 snap-start snap-always">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="absolute inset-0 bg-white/20 backdrop-blur-3xl rounded-[3rem] -z-10 scale-110 shadow-2xl border border-white/40" />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-brand-500 text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6 px-12 pt-12 text-center"
        >
          Enter the World of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="text-7xl md:text-9xl font-bold text-brand-900 mb-8 tracking-tight drop-shadow-md text-center px-12"
        >
          Bhavya
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ delay: 2.2, duration: 1.5 }}
          className="h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent max-w-[200px] mb-12"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1.5 }}
        className="absolute bottom-16 flex flex-col items-center justify-center cursor-pointer"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <p className="text-brand-600 text-xs tracking-widest uppercase mb-4 font-semibold">Begin the journey</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="p-3 bg-white/30 backdrop-blur-md rounded-full border border-white/50 shadow-sm"
        >
          <ChevronDown className="text-brand-600 w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
