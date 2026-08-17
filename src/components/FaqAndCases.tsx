import React from 'react';
import { motion } from 'motion/react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, BrainCircuit, Cpu, Network, Zap, Sparkles, TrendingUp, ArrowRight, ShieldCheck } from 'lucide-react';

const caseStudies = [
  {
    client: 'Restaurant & Hospitality Brand (Noida)',
    category: 'Hospitality & F&B',
    result: 'Consistent Profitability',
    metrics: [
      { label: 'Online Orders', val: '3× Increase' },
      { label: 'Walk-ins', val: '2× Growth' },
      { label: 'Status', val: 'Profitable' },
    ],
    summary: 'Took the business from 7 months of breaking even to consistent profitability with integrated performance & local discovery engines.',
  },
  {
    client: 'Cross-Industry Ad Management',
    category: 'Paid Media Scale',
    result: '₹1Cr+ Deployed',
    metrics: [
      { label: 'Profitable Spend', val: '₹1Cr+' },
      { label: 'Campaigns', val: 'High-Growth' },
      { label: 'Efficiency', val: 'Optimized' },
    ],
    summary: '₹1Cr+ in profitable ad spend deployed across high-growth campaigns with unit economics discipline.',
  },
  {
    client: 'Pipeline Acceleration',
    category: 'AI Lead Automation',
    result: '< 60s Response Time',
    metrics: [
      { label: 'Previous Time', val: '4 Hours' },
      { label: 'New Response', val: '< 60 Sec' },
      { label: 'Qualification', val: 'Automated' },
    ],
    summary: 'Automated lead qualification cut initial response times from 4 hours down to under 60 seconds.',
  },
];

const faqs = [
  { 
    q: "How fast can Cael Forge deploy an AI growth system for our business?", 
    a: "Our standard onboarding timeline spans 10 to 14 business days. During this sprint, we conduct a deep infrastructure audit, configure your AI agents, design performance ad creative, and establish custom attribution dashboards before launching." 
  },
  { 
    q: "How do your custom AI agents handle complex sales or support inquiries?", 
    a: "Cael Forge AI agents are trained on your company's proprietary knowledge base, past sales transcripts, and brand guidelines. They operate within strict guardrails and seamlessly hand off to human sales reps whenever high-touch negotiation is required." 
  },
  { 
    q: "What ad platforms and marketing channels do you specialize in?", 
    a: "We execute hyper-targeted performance campaigns across Meta (Facebook & Instagram), Google Search & YouTube, TikTok, and Programmatic Display, supported by automated email & SMS nurture sequences." 
  },
  { 
    q: "What performance guarantees or transparency does Cael Forge offer?", 
    a: "We believe in complete alignment with our clients. You receive 24/7 access to live executive dashboards tracking spend, ROAS, CAC, and attribution. We structure our engagements around strict performance benchmarks." 
  },
  { 
    q: "How does Cael Forge protect our proprietary business data?", 
    a: "Data privacy is paramount. All AI workflows and agents operate under enterprise-grade encryption and SOC2 compliance standards. Your business data is never shared or used to train public LLM models." 
  }
];

export function FaqAndCases() {
  return (
    <>
      {/* Proof / Case Studies Section (Pure Crisp White Background) */}
      <section id="cases" className="py-24 md:py-36 bg-white relative overflow-hidden text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
          >
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-4 inline-flex items-center gap-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              PROVEN RESULTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight font-heading leading-tight">
              Proven Results. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600">
                The numbers speak for themselves.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We focus strictly on systems, clear mechanics, and revenue. Here is how our growth engines perform in the real world.
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-200/90 rounded-3xl p-5 sm:p-8 shadow-sm flex flex-col justify-between hover:border-blue-500/50 hover:bg-white transition-all"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
                      {study.category}
                    </span>
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2 font-heading">{study.client}</h3>
                  <div className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 mb-4 font-heading">
                    {study.result}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {study.summary}
                  </p>
                </div>

                {/* Metrics Breakdown */}
                <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-1.5 sm:gap-2 bg-white rounded-2xl p-2.5 sm:p-3 text-center border border-slate-100 shadow-inner">
                  {study.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase font-semibold">{m.label}</div>
                      <div className="text-xs sm:text-base font-bold text-slate-900 font-heading">{m.val}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3D Hybrid Synergy Architecture Section (Bright Vibrant Gradient Background) */}
      <section className="py-24 md:py-36 bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 border-y border-white/20 relative overflow-hidden text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-mono font-bold text-cyan-200 uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4 inline-block shadow-md">
              THE HYBRID ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-heading">
              Human Strategy Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-amber-300">Autonomous AI</span>
            </h2>
            <p className="text-base sm:text-lg text-cyan-100 font-normal">
              Where elite strategic direction fuses with 60FPS AI execution for unprecedented market dominance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 border border-white/20 rounded-3xl p-5 sm:p-7 shadow-lg backdrop-blur-xl hover:bg-white/15 transition-colors">
              <Zap className="w-8 h-8 text-amber-300 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2 font-heading">Instant Campaign Triage</h4>
              <p className="text-sm text-cyan-100 leading-relaxed font-normal">AI algorithms continually audit ad placement performance, reallocating budget to top-performing audience pockets in real time.</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-3xl p-5 sm:p-7 shadow-lg backdrop-blur-xl hover:bg-white/15 transition-colors">
              <BrainCircuit className="w-8 h-8 text-cyan-200 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2 font-heading">Cognitive Creative Assist</h4>
              <p className="text-sm text-cyan-100 leading-relaxed font-normal">Our AI creative suite generates and tests hundreds of headline variants, hooks, and video angles every week.</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-3xl p-5 sm:p-7 shadow-lg backdrop-blur-xl hover:bg-white/15 transition-colors">
              <Sparkles className="w-8 h-8 text-amber-300 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2 font-heading">Self-Improving Loops</h4>
              <p className="text-sm text-cyan-100 leading-relaxed font-normal">Every conversion datapoint refines our predictive models, making your marketing campaigns progressively more efficient over time.</p>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section (Light Pearl Grey Background) */}
      <section id="faq" className="py-24 md:py-36 bg-slate-50 text-slate-900 border-b border-slate-200/80">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest mb-3 inline-block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Everything You Need to Know
            </h2>
          </motion.div>
          
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                key={i}
              >
                <Accordion.Item value={`item-${i}`} className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm data-[state=open]:border-blue-500/50 transition-colors">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left focus:outline-none group">
                      <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">{faq.q}</span>
                      <ChevronDown className="w-5 h-5 text-slate-400 group-data-[state=open]:rotate-180 transition-transform duration-300" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed text-sm font-normal">
                      {faq.a}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </div>
      </section>
    </>
  );
}
