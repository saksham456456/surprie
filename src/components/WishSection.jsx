import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Gift, Play, Pause } from 'lucide-react';

export default function WishSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);

    // Trigger confetti
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // Placeholder for actual audio logic
    // const audio = document.getElementById('bg-music');
    // if (isPlaying) audio.pause(); else audio.play();
  };

  return (
    <section className="min-h-screen py-20 flex flex-col items-center justify-center px-4 relative">

      {/* Audio Player Placeholder */}
      <div className="absolute top-8 right-8 z-50">
        <button
          onClick={toggleMusic}
          className="bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition-all p-3 rounded-full flex items-center gap-2 text-brand-700"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          <span className="text-sm font-medium hidden md:block">
            {isPlaying ? "Pause Music" : "Play Music"}
          </span>
        </button>
      </div>

      <div className="max-w-3xl w-full text-center z-10">
        {!isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-800 mb-8">
              There's one last thing...
            </h2>
            <button
              onClick={handleOpen}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-brand-500 rounded-full hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Gift className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Open Your Surprise
            </button>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-brand-100"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-brand-600 mb-6 drop-shadow-sm">
                Happy Birthday, Bhavya! 🎉
              </h2>

              <div className="space-y-6 text-lg md:text-xl text-brand-800 leading-relaxed font-medium">
                <p>
                  Sach batau toh, sometimes I wonder how I got so lucky to know someone as amazing as you.
                </p>
                <p>
                  You bring so much light, laughter, and magic into the world. On your special day, I just want you to know how deeply appreciated and cherished you are.
                </p>
                <p>
                  May this year bring you as much happiness as you bring to everyone else. Keep smiling, keep shining.
                </p>
                <p className="pt-6 font-bold text-brand-900">
                  Yours truly,<br/>
                  [Your Name Here]
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
