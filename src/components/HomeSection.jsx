
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HomeSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-brand-600 text-lg md:text-xl font-medium tracking-widest uppercase mb-4"
        >
          For the one and only
        </motion.p>

        <h1 className="text-6xl md:text-8xl font-bold text-brand-900 mb-6 drop-shadow-sm">
          Bhavya
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="w-24 h-1 bg-brand-300 mx-auto rounded-full mb-8"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center justify-center"
      >
        <p className="text-brand-500 text-sm tracking-wider mb-2">Scroll to discover</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-brand-500 w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
