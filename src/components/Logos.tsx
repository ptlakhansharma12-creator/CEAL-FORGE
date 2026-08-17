import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

const capabilities = [
  "Performance Marketing",
  "AI Automations",
  "AI Data Analytics & Insights",
  "Custom AI Agents",
  "Website Development",
  "Funnels & Landing Pages",
  "Growth Systems Architecture",
  "Predictive ROAS Modeling",
];

export function Logos() {
  return (
    <section className="py-9 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 overflow-hidden shadow-xl border-y border-white/20">
      <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div 
          className="flex whitespace-nowrap items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35
          }}
        >
          {[...capabilities, ...capabilities].map((item, i) => (
            <div key={i} className="flex items-center gap-10 pr-10">
              <span className="font-heading font-extrabold text-xl md:text-2xl tracking-tight text-white uppercase drop-shadow-md">
                {item}
              </span>
              <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
