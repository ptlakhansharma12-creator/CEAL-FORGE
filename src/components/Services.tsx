import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Cpu, Bot, Laptop, Target, Zap, X, ArrowRight, Sparkles, ShieldCheck, BarChart3 } from 'lucide-react';

const services = [
  {
    id: 'performance-marketing',
    title: 'Pillar 01: Performance Marketing',
    category: 'Focus: Profitable Acquisition',
    philosophy: 'Every rupee must have a measurable job.',
    description: 'We build paid acquisition campaigns focused on unit economics and return on investment, not vanity metrics.',
    details: 'Targeted Paid Media: Scaled campaigns across Meta, Google Search, YouTube, and LinkedIn. • Conversion-First Infrastructure: Custom landing pages designed strictly to convert traffic into pipeline value. • Continuous Optimization: Rapid creative testing, audience segmentation, and retargeting loops.',
    flow: 'Attention ──► High Intent ──► Conversion ──► Retention',
    icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
    stats: 'Profitable Acquisition'
  },
  {
    id: 'ai-automation',
    title: 'Pillar 02: AI Automation & Workflows',
    category: 'Focus: Intelligent Operations',
    philosophy: 'If your team does a task twice, software should do it the third time.',
    description: 'We design custom AI workflows that capture, qualify, and follow up with leads in seconds, cutting operational drag and eliminating human delay.',
    details: 'Speed-to-Lead Engines: Instant WhatsApp and email follow-ups the moment a user submits an inquiry. • AI Qualification Agents: Intelligent bots that ask the right questions and book calls directly on your calendar. • CRM & Data Syncing: Automatic routing of leads, pipeline tracking, and revenue reporting across your tools.',
    flow: 'Inquiry ──► Qualification ──► Calendar Booking ──► CRM Sync',
    icon: <Cpu className="w-6 h-6 text-purple-600" />,
    stats: 'Intelligent Operations'
  },
  {
    id: 'social-media',
    title: 'Pillar 03: Social Media & Content Distribution',
    category: 'Focus: Brand Presence & Distribution',
    philosophy: 'Good content earns attention. Great content creates preference.',
    description: 'We build media operations that position your brand as the obvious choice in your market.',
    details: 'Content Frameworks: Educational breakdowns, proof-driven storytelling, and product-focused creative. • Multi-Format Production: Short-form video, carousels, and long-form insights engineered for organic reach. • Audience Retention: Active community management that turns passive viewers into brand advocates.',
    flow: 'Attention ──► Engagement ──► Preference ──► Advocacy',
    icon: <Bot className="w-6 h-6 text-purple-600" />,
    stats: 'Brand & Distribution'
  },
  {
    id: 'personal-branding',
    title: 'Pillar 04: Personal Branding',
    category: 'Focus: Founder & Executive Authority',
    philosophy: 'People do business with people they trust.',
    description: 'We position founders, executives, and operators as the leading voices in their sectors.',
    details: 'Strategic Positioning: Defining your unique point of view and market authority. • Done-For-You Content: End-to-end ghostwriting, narrative crafting, and post distribution across LinkedIn and X. • Direct Pipeline Impact: Turning founder profile traffic into strategic partnerships, press, and client inquiries.',
    flow: 'Authority ──► Trust ──► Partnerships ──► Pipeline',
    icon: <ShieldCheck className="w-6 h-6 text-purple-600" />,
    stats: 'Executive Authority'
  }
];

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 md:py-36 bg-white relative overflow-hidden border-b border-slate-200/80 text-slate-900">
      {/* Light Purple Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
        >
          <span className="text-xs font-mono font-bold text-purple-700 uppercase tracking-widest px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 mb-4 inline-flex items-center gap-2 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            PILLAR BREAKDOWN
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight font-heading leading-tight">
            How Each Engine Works. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-purple-600 to-indigo-600">
              The Four Pillars of Cael Forge.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Four integrated growth engines engineered strictly for unit economics, operational speed, brand preference, and market authority.
          </p>
        </motion.div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                y: -6, 
              }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="group relative bg-slate-50 border border-slate-200/90 rounded-3xl p-8 transition-all flex flex-col justify-between h-full cursor-pointer shadow-sm hover:bg-white hover:border-purple-300 hover:shadow-lg"
              onClick={() => setSelectedService(service)}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100/70 border border-purple-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-full">
                    {service.stats}
                  </span>
                </div>

                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                  {service.category}
                </span>

                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-purple-600 transition-colors font-heading">
                  {service.title}
                </h3>

                <p className="text-xs font-mono font-semibold text-purple-800 italic mb-3">
                  Philosophy: "{service.philosophy}"
                </p>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  {service.description}
                </p>

                <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-100 text-xs font-mono font-medium text-purple-900 mb-4">
                  {service.flow}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-purple-700 group-hover:text-purple-900 transition-colors">
                <span>View Engine Mechanics</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden text-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600"></div>
              
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-100/70 border border-purple-200 flex items-center justify-center">
                  {selectedService.icon}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-purple-700 tracking-wider">
                    {selectedService.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">{selectedService.title}</h3>
                </div>
              </div>

              <p className="text-base font-semibold text-slate-800 mb-4 leading-relaxed">
                {selectedService.description}
              </p>
              
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {selectedService.details}
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-700 bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-200">
                  <ShieldCheck className="w-4 h-4 text-purple-600" />
                  PROVEN PERFORMANCE GUARANTEE
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-all shadow-md"
                >
                  Discuss Service
                  <ArrowRight className="w-4 h-4 text-purple-200" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
