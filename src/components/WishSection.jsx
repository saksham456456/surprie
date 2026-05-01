import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Heart } from 'lucide-react';

export default function WishSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);

    // Massive confetti explosion
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 45, spread: 360, ticks: 100, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 100 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#f472b6', '#fbcfe8', '#f9a8d4', '#ffffff']
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#f472b6', '#fbcfe8', '#f9a8d4', '#ffffff']
      });
    }, 250);
  };

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative px-4 snap-start snap-always overflow-hidden bg-brand-900/5 backdrop-blur-sm">
      <p className="absolute top-20 text-brand-500 text-sm tracking-[0.2em] uppercase font-semibold text-center">
        The Finale
      </p>

      <div className="max-w-4xl w-full text-center z-10">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center cursor-pointer group"
              onClick={handleOpen}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-brand-800 mb-12">
                One last thing...
              </h2>

              <div className="relative w-48 h-32 md:w-64 md:h-48 bg-white/40 backdrop-blur-md rounded-xl border border-white/60 shadow-xl flex items-center justify-center group-hover:bg-white/60 transition-all duration-500 group-hover:-translate-y-4">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-200/30 to-transparent rounded-xl" />

                {/* Envelope Flap styling */}
                <div className="absolute top-0 left-0 w-full h-1/2 border-b border-white/50 bg-white/20 rounded-t-xl origin-top transition-transform duration-500 group-hover:rotate-x-180" style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }} />

                <Mail className="w-12 h-12 text-brand-500 z-10 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -bottom-6 bg-brand-500 text-white text-xs px-4 py-1 rounded-full font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  Tap to open
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="relative w-full max-w-2xl mx-auto bg-white/90 backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 shadow-2xl border border-white"
            >
              <Heart className="w-10 h-10 text-brand-500 absolute -top-5 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-sm" />

              <h2 className="text-5xl md:text-7xl font-bold text-brand-800 mb-8 font-serif italic text-center">
                Happy Birthday,<br/>Bhavya.
              </h2>

              <div className="space-y-6 text-xl text-brand-700 leading-relaxed font-medium text-center">
                <p>
                  Sach batau toh, sometimes I wonder how I got so lucky to know someone as amazing as you.
                </p>
                <p>
                  You bring so much light, laughter, and magic into the world. I just wanted to make something special to remind you of how deeply appreciated you are.
                </p>
                <p>
                  May this year be exactly as beautiful as you are. Keep shining.
                </p>

                <div className="pt-8 flex flex-col items-center">
                  <div className="w-16 h-px bg-brand-300 mb-6" />
                  <p className="font-bold text-brand-900 tracking-widest uppercase text-sm">
                    Yours truly,
                  </p>
                  <p className="text-brand-600 font-serif italic text-2xl mt-2">
                    [Your Name Here]
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
