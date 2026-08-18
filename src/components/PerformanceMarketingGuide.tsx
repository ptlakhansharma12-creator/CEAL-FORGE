import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Target,
  BarChart3,
  Zap,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  DollarSign,
  Layers,
  ArrowUpRight,
  Cpu
} from 'lucide-react';

interface PMBenefit {
  id: string;
  num: string;
  title: string;
  badge: string;
  headline: string;
  description: string;
  keyTakeaway: string;
  image: string;
  metrics: { label: string; val: string }[];
  borderGlow: string;
}

const pmBenefits: PMBenefit[] = [
  {
    id: 'precision-targeting',
    num: '01',
    title: 'Hyper-Targeted Precision Buying',
    badge: 'ZERO WASTED BUDGET',
    headline: 'Reach High-Intent Buyers Exactly When They Are Ready to Convert',
    description: 'Traditional advertising blasts generic messages to broad audiences. Performance marketing targets specific, high-intent buyer personas across Meta & Google Ads using behavioral data, custom lookalikes, and search intent.',
    keyTakeaway: 'Every ad dollar goes directly toward reaching active buyers, eliminating budget waste.',
    image: '/clean-pillar-target.jpg',
    metrics: [
      { label: 'Targeting Accuracy', val: '98.4%' },
      { label: 'Wasted Ad Spend', val: '0%' },
      { label: 'Intent Match', val: 'Real-Time' }
    ],
    borderGlow: 'hover:border-purple-500/60 shadow-[0_0_25px_rgba(168,85,247,0.2)]'
  },
  {
    id: 'roas-attribution',
    num: '02',
    title: '100% Transparent ROAS Attribution',
    badge: 'REAL-TIME MEASUREMENT',
    headline: 'Know Exactly Which Campaign Generated Every Single Lead & Dollar',
    description: 'No more guessing which half of your marketing budget works. With real-time multi-touch attribution dashboards, clients see exact Return On Ad Spend (ROAS), cost per conversion, and live sales pipeline updates.',
    keyTakeaway: 'Complete revenue transparency with zero vanity metrics—only trackable growth.',
    image: '/clean-pillar-roas.jpg',
    metrics: [
      { label: 'ROAS Target', val: '6.85x' },
      { label: 'Attribution Speed', val: '< 1 Sec' },
      { label: 'Dashboard Access', val: '24/7 Live' }
    ],
    borderGlow: 'hover:border-purple-500/60 shadow-[0_0_25px_rgba(168,85,247,0.2)]'
  },
  {
    id: 'cac-reduction',
    num: '03',
    title: 'Unit Economics & CAC Reduction',
    badge: 'PROFIT MARGIN SCALE',
    headline: 'Systematically Lower Customer Acquisition Cost While Scaling Revenue',
    description: 'Through multivariate creative testing, landing page conversion rate optimization (CRO), and AI bid adjustments, performance marketing lowers your Blended Customer Acquisition Cost (CAC) over time.',
    keyTakeaway: 'Higher conversion rates mean lower cost per customer and higher net profit margins.',
    image: '/clean-pillar-funnel.jpg',
    metrics: [
      { label: 'CAC Reduction', val: '-42%' },
      { label: 'CVR Lift', val: '+3.4x' },
      { label: 'Margin Expansion', val: '+28%' }
    ],
    borderGlow: 'hover:border-purple-500/60 shadow-[0_0_25px_rgba(168,85,247,0.2)]'
  },
  {
    id: 'predictable-scale',
    num: '04',
    title: 'Predictable & Scalable Revenue Machine',
    badge: 'ON-DEMAND GROWTH',
    headline: 'Turn Paid Media Into an On-Demand, Repeatable Client Acquisition Engine',
    description: 'Once a campaign reaches unit-economic profitability, scaling is straightforward. Increasing ad spend predictably yields more leads and sales, allowing clients to control their growth velocity on demand.',
    keyTakeaway: 'Marketing shifts from a business expense into a predictable, high-yield investment engine.',
    image: '/clean-pillar-rocket.jpg',
    metrics: [
      { label: 'Scalability', val: 'Unlimited' },
      { label: 'Predictability', val: 'High Yield' },
      { label: 'Pipeline Growth', val: 'On-Demand' }
    ],
    borderGlow: 'hover:border-purple-500/60 shadow-[0_0_25px_rgba(168,85,247,0.2)]'
  }
];

export function PerformanceMarketingGuide() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentBenefit = pmBenefits[activeTab];

  const CALENDLY_LINK = "https://calendly.com/harshvardhansharma676/discovery-call";

  return (
    <section id="performance-guide" className="py-20 sm:py-32 bg-[#070A12] text-white relative overflow-hidden select-none border-y border-slate-800/80">
      
      {/* Background Radial Glows */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-widest px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-700/80 mb-4 inline-flex items-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
            WHY PERFORMANCE MARKETING MATTERS FOR CLIENTS
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight font-heading leading-tight">
            How Performance Marketing Transforms <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-white">
              Client Growth & Revenue Scalability
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Unlike traditional advertising that burns money on untracked awareness, Performance Marketing ensures every single rupee spent is directly tracked, optimized, and tied to customer acquisition.
          </p>
        </motion.div>

        {/* 4 Interactive Advantage Cards / Selector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Column: 4 Benefit Cards Selector (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            {pmBenefits.map((item, idx) => {
              const isSelected = activeTab === idx;

              return (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => setActiveTab(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-purple-950/40 border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.3)]'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-950 border border-purple-800 px-2 py-0.5 rounded uppercase">
                      Pillar {item.num} • {item.badge}
                    </span>
                    <span className={`text-xs font-mono font-extrabold ${isSelected ? 'text-purple-300' : 'text-slate-500'}`}>
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2">{item.headline}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Featured Large Card with Clean White & Purple Image (7 cols) */}
          <motion.div
            key={currentBenefit.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 bg-slate-900/90 border border-purple-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl flex flex-col justify-between"
          >
            {/* Clean White & Purple Image Container */}
            <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden relative mb-6 border border-purple-500/30 bg-white/5 flex items-center justify-center p-4">
              <img
                src={currentBenefit.image}
                alt={currentBenefit.title}
                className="w-full h-full object-contain object-center hover:scale-105 transition-transform duration-500 rounded-xl"
              />
              
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="text-xs font-mono font-bold text-purple-200 bg-purple-950/90 border border-purple-700 px-3 py-1 rounded-full uppercase backdrop-blur-md shadow-md">
                  ⚡ {currentBenefit.badge}
                </span>
                <span className="text-xs font-mono text-purple-300 bg-slate-950/90 border border-slate-700 px-3 py-1 rounded-full backdrop-blur-md">
                  PILLAR {currentBenefit.num}
                </span>
              </div>
            </div>

            {/* Description & Metrics */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                {currentBenefit.title}
              </h3>
              <p className="text-sm text-purple-300 font-semibold mb-3">
                {currentBenefit.headline}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                {currentBenefit.description}
              </p>

              {/* Key Takeaway Banner */}
              <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-800 text-xs font-mono text-purple-200 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span><strong>Key Client Outcome:</strong> {currentBenefit.keyTakeaway}</span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800 bg-slate-950/60 rounded-2xl p-3 text-center border">
                {currentBenefit.metrics.map((m, i) => (
                  <div key={i}>
                    <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">{m.label}</div>
                    <div className="text-sm sm:text-base font-extrabold text-purple-300 font-mono mt-0.5">{m.val}</div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

        {/* 4 Clean Image Grid */}
        <div className="mt-16 pt-16 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-3xl font-extrabold text-white font-heading">
              Clean 4-Pillar Performance Marketing Framework
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Uncluttered, crystal-clear 3D visual framework in custom white & purple aesthetic.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pmBenefits.map((b) => (
              <div key={b.id} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 hover:border-purple-500/50 transition-all group flex flex-col justify-between">
                <div>
                  <div className="w-full aspect-square rounded-xl overflow-hidden mb-3 border border-purple-500/20 bg-white/5 p-3 flex items-center justify-center relative">
                    <img src={b.image} alt={b.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg" />
                    <div className="absolute top-2 left-2 text-[10px] font-mono font-bold text-purple-200 bg-purple-950/90 px-2 py-0.5 rounded border border-purple-800">
                      {b.num}
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-white font-heading mb-1">{b.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2">{b.keyTakeaway}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-950/80 via-slate-900 to-purple-950/80 border border-purple-500/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_rgba(168,85,247,0.15)]">
          <div>
            <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-widest mb-1 block">
              READY TO SCALE YOUR PAID AD REVENUE?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Deploy Your Custom Performance Marketing System
            </h3>
          </div>

          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold rounded-2xl shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2 text-sm font-mono shrink-0 cursor-pointer"
          >
            <span>Schedule Strategy Session</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>

      </div>
    </section>
  );
}
