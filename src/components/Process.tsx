import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

const steps = [
  { id: '01', name: 'Diagnose', desc: 'We audit your existing traffic, funnels, sales bottlenecks, and tech stack.' },
  { id: '02', name: 'Architect', desc: 'We map out the full strategy, positioning angles, ad frameworks, and automation blueprints.' },
  { id: '03', name: 'Activate', desc: 'We launch the campaigns, deploy the AI workflows, and initiate content distribution.' },
  { id: '04', name: 'Optimize', desc: 'We cut underperforming assets, refine ad copy, speed up automation, and double down on winning hooks.' },
  { id: '05', name: 'Scale', desc: 'Once the unit economics are proven and stable, we increase ad spend and expand distribution.' }
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-36 bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-950 relative overflow-hidden border-b border-white/15 text-white shadow-2xl">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest px-4 py-1.5 rounded-full bg-blue-500/20 border border-cyan-400/40 mb-4 inline-flex items-center gap-2 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            THE CAEL FORGE 5-STEP PROCESS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight font-heading leading-tight">
            The 5-Step Process. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-blue-400">
              Diagnose ──► Architect ──► Activate ──► Optimize ──► Scale
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            From initial audit to aggressive expansion, our systematic 5-step process ensures predictable growth at every milestone.
          </p>
        </motion.div>

        <div className="relative">
          {/* Horizontal Line connecting steps on desktop */}
          <div className="hidden lg:block absolute top-10 left-8 right-8 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                key={i} 
                className="flex flex-col gap-5 group bg-[#0B0F19]/90 p-6 rounded-3xl border border-white/15 shadow-xl hover:border-cyan-400/50 hover:shadow-[0_20px_40px_rgba(56,189,248,0.25)] transition-all backdrop-blur-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-400 text-slate-950 font-mono text-xl font-extrabold flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.5)] relative group-hover:bg-white group-hover:text-blue-700 transition-all">
                  {step.id}
                  <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-blue-500 border-2 border-[#0B0F19] shadow-sm"></div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors font-heading">{step.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
