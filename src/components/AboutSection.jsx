import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useState } from 'react';

function TiltCard({ title, description, delay }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 1, delay }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-sm mx-auto aspect-[4/5] rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl p-8 flex flex-col justify-center items-center text-center cursor-pointer group"
    >
      <div
        className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ transform: "translateZ(1px)" }}
      />

      <motion.div
        style={{ transform: "translateZ(50px)" }}
        className="bg-brand-100/80 w-16 h-16 rounded-full flex items-center justify-center mb-8 shadow-inner"
      >
        <Sparkles className="w-8 h-8 text-brand-500" />
      </motion.div>

      <motion.h3
        style={{ transform: "translateZ(60px)" }}
        className="text-3xl font-bold text-brand-900 mb-4 font-serif italic"
      >
        {title}
      </motion.h3>

      <motion.p
        style={{ transform: "translateZ(40px)" }}
        className="text-brand-700 text-lg leading-relaxed font-medium"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section className="h-screen w-full flex items-center justify-center relative snap-start snap-always px-4">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center md:text-left px-4 md:px-12"
        >
          <p className="text-brand-500 text-sm tracking-[0.2em] uppercase mb-4 font-semibold">Chapter I</p>
          <h2 className="text-5xl md:text-7xl font-bold text-brand-800 mb-8 leading-tight">
            The way you <br/><span className="text-brand-500 italic font-serif">light up</span> the room.
          </h2>
          <p className="text-xl text-brand-700 max-w-lg leading-relaxed hidden md:block">
            It is not just your smile. It is your energy, your kindness, and the magic you carry with you everywhere you go.
          </p>
        </motion.div>

        <div className="flex justify-center md:justify-end px-4 md:px-12">
          <TiltCard
            title="Your Magic"
            description="The unique way you see the world makes everything around you feel a little more beautiful."
            delay={0.3}
          />
        </div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        className="absolute bottom-12 text-brand-400 text-sm tracking-widest uppercase animate-pulse"
      >
        Scroll slowly
      </motion.div>
    </section>
  );
}
