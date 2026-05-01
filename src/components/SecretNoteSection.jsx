import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function SecretNoteSection() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-4 bg-brand-100/20">
      <div className="max-w-xl w-full">
        <p className="text-brand-500 text-sm tracking-[0.2em] uppercase mb-12 font-semibold text-center">
          Chapter III
        </p>

        <motion.div
          layout
          onClick={() => setRevealed(true)}
          className={`relative w-full rounded-[2.5rem] p-8 md:p-12 transition-all duration-700 ${
            revealed
              ? "bg-white/80 backdrop-blur-2xl shadow-2xl border border-white"
              : "bg-white/30 backdrop-blur-md shadow-lg border border-white/50 cursor-pointer hover:bg-white/40 group"
          }`}
        >
          <AnimatePresence mode="wait">
            {!revealed ? (
              <motion.div
                key="hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-16 h-16 bg-brand-200 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Heart className="w-8 h-8 text-brand-600 animate-pulse" />
                </div>
                <h3 className="text-2xl font-semibold text-brand-800 mb-2">There's a secret note here</h3>
                <p className="text-brand-600 font-medium">Tap to reveal</p>
              </motion.div>
            ) : (
              <motion.div
                key="revealed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
              >
                <Heart className="w-8 h-8 text-brand-500 mx-auto mb-8" />
                <h3 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6 font-serif italic">
                  I never expected...
                </h3>
                <p className="text-xl text-brand-700 leading-relaxed font-medium">
                  ...to find someone whose vibe matches mine so perfectly. Every small joke, every random conversation—it all just makes sense with you.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
