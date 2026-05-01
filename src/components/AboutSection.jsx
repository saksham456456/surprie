
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star, Smile } from 'lucide-react';

const traits = [
  {
    icon: <Smile className="w-8 h-8 text-brand-500" />,
    title: "Her Smile",
    description: "The kind of smile that instantly lights up the whole room."
  },
  {
    icon: <Heart className="w-8 h-8 text-brand-500" />,
    title: "Her Kindness",
    description: "A pure heart that cares for everyone around her."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-brand-500" />,
    title: "Her Vibe",
    description: "An unmatched energy that makes life so much better."
  },
  {
    icon: <Star className="w-8 h-8 text-brand-500" />,
    title: "Her Magic",
    description: "The unique way she sees the world and everything in it."
  }
];

export default function AboutSection() {
  return (
    <section className="min-h-screen py-20 flex flex-col items-center justify-center px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-brand-800 mb-6">
          What Makes You Special
        </h2>
        <p className="text-brand-700 text-lg md:text-xl leading-relaxed">
          There are a million things to admire about you, but here are just a few that make you absolutely unforgettable.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {traits.map((trait, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white/60 backdrop-blur-md border border-brand-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="bg-brand-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              {trait.icon}
            </div>
            <h3 className="text-2xl font-semibold text-brand-900 mb-3">
              {trait.title}
            </h3>
            <p className="text-brand-700 leading-relaxed">
              {trait.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
