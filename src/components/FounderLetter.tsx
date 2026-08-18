import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Quote,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Share2,
  UserCheck,
  ArrowRight,
  CheckCircle2,
  Zap,
  Building2,
  Mail
} from 'lucide-react';

interface PillarVisual {
  num: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  tagColor: string;
  borderGlow: string;
}

const pillars: PillarVisual[] = [
  {
    num: '01',
    title: 'Performance Marketing',
    badge: 'PROFITABLE ACQUISITION',
    description: 'Data-driven paid ads on Meta & Google focused strictly on unit economics, ROAS scale, and CAC reduction.',
    image: '/pillar-performance.jpg',
    tagColor: 'text-purple-300 bg-purple-950/80 border-purple-700',
    borderGlow: 'hover:border-purple-500/60 shadow-[0_0_20px_rgba(168,85,247,0.25)]'
  },
  {
    num: '02',
    title: 'AI Automation & Workflows',
    badge: 'AUTONOMOUS OPERATIONS',
    description: 'Autonomous AI agents and qualification workflows that reduce speed-to-lead latency down to seconds.',
    image: '/pillar-automation.jpg',
    tagColor: 'text-cyan-300 bg-cyan-950/80 border-cyan-700',
    borderGlow: 'hover:border-cyan-500/60 shadow-[0_0_20px_rgba(56,189,248,0.25)]'
  },
  {
    num: '03',
    title: 'Social Media & Distribution',
    badge: 'BRAND PRESENCE',
    description: 'High-hook short-form video reels and omnichannel distribution engineered for market positioning.',
    image: '/pillar-social.jpg',
    tagColor: 'text-emerald-300 bg-emerald-950/80 border-emerald-700',
    borderGlow: 'hover:border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.25)]'
  },
  {
    num: '04',
    title: 'Personal Branding',
    badge: 'EXECUTIVE AUTHORITY',
    description: 'Turn founder expertise into high-ticket organic acquisition, podcast features, and thought leadership.',
    image: '/pillar-branding.jpg',
    tagColor: 'text-amber-300 bg-amber-950/80 border-amber-700',
    borderGlow: 'hover:border-amber-500/60 shadow-[0_0_20px_rgba(245,158,11,0.25)]'
  }
];

export function FounderLetter() {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);
  const CALENDLY_LINK = "https://calendly.com/harshvardhansharma676/discovery-call";

  return (
    <section id="founder-letter" className="py-20 sm:py-32 bg-[#070A12] text-white relative overflow-hidden select-none border-y border-slate-800/80">
      
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-widest px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-700/80 mb-4 inline-flex items-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <Quote className="w-3.5 h-3.5 text-purple-400" />
            A LETTER FROM THE FOUNDER
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight font-heading leading-tight">
            Why We Built <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-indigo-300">
              The Cael Forge Connected Growth Engine
            </span>
          </h2>
        </motion.div>

        {/* Letter Card & Founder Bio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-20">
          
          {/* Main Founder Letter Box (8 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative backdrop-blur-xl flex flex-col justify-between"
          >
            <div className="absolute top-6 right-6 text-slate-700 opacity-20 pointer-events-none">
              <Quote className="w-24 h-24" />
            </div>

            <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed font-normal relative z-10">
              <p className="text-lg sm:text-xl text-white font-semibold font-heading border-l-2 border-purple-500 pl-4">
                &quot;Growth doesn’t come from one channel. It comes from the connected system behind it.&quot;
              </p>

              <p>
                When we launched <strong>Cael Forge</strong>, we noticed a fundamental flaw in how businesses attempt to scale: most companies hire fragmented agencies or run disconnected tools.
              </p>

              <p>
                One agency runs isolated paid ads. Another creates social posts with no conversion path. Internal teams manually follow up on leads hours late. Meanwhile, executive authority remains invisible.
              </p>

              <p>
                We built Cael Forge to eliminate this inefficiency. We integrate <strong>Performance Marketing, AI Automation, Social Media, and Personal Branding</strong> into one single connected engine that turns attention into predictable paying customers.
              </p>

              <p className="text-purple-300 font-medium italic">
                Our commitment is strict: zero vanity buzzwords, zero generic packages—just clear mechanics, disciplined unit economics, and actionable revenue growth.
              </p>
            </div>

            {/* Signature Area */}
            <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
              <div>
                <h4 className="text-lg font-bold text-white font-heading">Harshvardhan Sharma</h4>
                <p className="text-xs font-mono text-purple-400 font-semibold">Founder & Growth Architect • Cael Forge</p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Building2 className="w-4 h-4 text-cyan-400" />
                <span>Faridabad, India</span>
              </div>
            </div>
          </motion.div>

          {/* Founder Profile & Core Pillars Summary (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 bg-gradient-to-b from-purple-950/40 via-slate-900 to-indigo-950/40 border border-purple-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-purple-950 border border-purple-700 flex items-center justify-center text-purple-300 mb-6 shadow-md">
                <ShieldCheck className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 font-heading">The Cael Forge Promise</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Every strategy we build is backed by real-time analytics, automated qualification, and unit economics discipline.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No Hard Sales Pitches</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No Generic Packages</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Actionable Blueprint</span>
                </div>
              </div>
            </div>

            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold rounded-2xl shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-xs font-mono cursor-pointer"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </motion.div>

        </div>

        {/* ------------------------------------------------------------- */}
        {/* OUR 4 PILLARS GRAPHICS SECTION                               */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest px-4 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800 mb-3 inline-block">
            THE 4 CORE PILLARS OF CAEL FORGE
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            Our 4 Connected Engine Pillars
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto mt-2">
            Click any pillar graphic below to explore how each engine operates within the Cael Forge architecture.
          </p>
        </motion.div>

        {/* 4 Pillars Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const isSelected = selectedPillar === idx;

            return (
              <motion.div
                key={pillar.num}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedPillar(idx)}
                className={`bg-slate-900/90 border rounded-3xl p-5 flex flex-col justify-between transition-all cursor-pointer group ${
                  isSelected
                    ? 'border-purple-400 bg-purple-950/40 shadow-[0_0_30px_rgba(168,85,247,0.35)] scale-[1.02]'
                    : `border-slate-800 ${pillar.borderGlow}`
                }`}
              >
                <div>
                  {/* Pillar High-Resolution Graphic Box */}
                  <div className="w-full aspect-square rounded-2xl overflow-hidden relative mb-4 border border-slate-800 bg-black/40 group-hover:border-purple-500/50 transition-colors">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 text-xs font-mono font-extrabold text-white bg-slate-950/80 px-2.5 py-1 rounded-lg border border-slate-800 backdrop-blur-md">
                      Pillar {pillar.num}
                    </div>
                  </div>

                  <span className={`text-[9.5px] font-mono font-bold px-2 py-0.5 rounded border ${pillar.tagColor} mb-2 inline-block`}>
                    {pillar.badge}
                  </span>

                  <h4 className="text-base font-bold text-white mb-2 font-heading group-hover:text-purple-300 transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-purple-400">
                  <span>Explore Engine</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
