import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, TrendingUp, ShieldCheck, BrainCircuit, Sparkles, BarChart3 } from 'lucide-react';
import { ThreeLaptopCockpit } from './ThreeLaptopCockpit';

export function About() {
  const pillars = [
    {
      icon: <BrainCircuit className="w-5 h-5 text-purple-600" />,
      pillar: '01. Performance Marketing',
      title: 'Profitable Acquisition',
      description: 'Meta, Google & LinkedIn Ads, conversion funnels, high-intent landing pages, and creative testing.',
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-purple-600" />,
      pillar: '02. AI Automation',
      title: 'Intelligent Operations',
      description: 'Instant AI lead qualification, WhatsApp workflows, automated CRM tracking, and custom AI agents.',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-purple-600" />,
      pillar: '03. Social Media',
      title: 'Brand Presence & Distribution',
      description: 'Strategic content, video storytelling, distribution systems, and active community engagement.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
      pillar: '04. Personal Branding',
      title: 'Founder & Executive Authority',
      description: 'Narrative positioning, ghostwriting, thought leadership, and digital presence for industry leaders.',
    }
  ];

  return (
    <section id="about" className="py-24 md:py-36 relative overflow-hidden bg-white text-slate-900 border-b border-slate-200/80">
      
      {/* Light Ambient Glows */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[550px] h-[550px] bg-violet-500/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Text & Features Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            {/* Pill Badge */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold uppercase tracking-widest mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>THE PROBLEM & WHAT WE DO</span>
            </motion.div>
            
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight font-heading">
              Growth doesn’t come from one channel. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-purple-600 to-indigo-600">It comes from the system behind it.</span>
            </h2>
            
            <div className="text-sm sm:text-base text-slate-600 mb-8 space-y-3 leading-relaxed font-normal">
              <p className="font-semibold text-slate-900">
                Most businesses don’t have a lead problem. They have a fragmented growth problem:
              </p>
              <ul className="space-y-1.5 pl-4 list-disc text-slate-700 text-xs sm:text-sm">
                <li>Paid ads run without conversion-focused funnels.</li>
                <li>Social media posts get likes but bring zero qualified leads.</li>
                <li>Inbound leads sit for hours because follow-ups are manual.</li>
                <li>Founders stay invisible while competitors capture industry authority.</li>
                <li>Valuable customer data gets lost between disconnected platforms.</li>
              </ul>
              <p className="pt-2 font-bold text-purple-900">
                Cael Forge fixes this by integrating four core pillars:
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map((feature, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  key={index} 
                  className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 hover:border-purple-300 hover:bg-white transition-all duration-300 group shadow-sm"
                >
                  <div className="w-9 h-9 rounded-xl bg-purple-100/70 border border-purple-200 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-purple-600 uppercase tracking-wider block mb-1">{feature.pillar}</span>
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors font-heading">{feature.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Column: Code-Recreated 3D Animated Laptop Cockpit (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 h-[380px] sm:h-[500px] lg:h-[620px] w-full"
          >
            <ThreeLaptopCockpit />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
