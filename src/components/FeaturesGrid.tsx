import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Maximize, BarChart, RefreshCw, Clock, Handshake, ArrowRight, Sparkles } from 'lucide-react';

const industries = [
  'B2B SaaS & Tech', 'E-Commerce & DTC Brands', 'FinTech & Wealth Management', 
  'HealthTech & Telemed', 'High-Ticket Professional Services', 'EdTech & Digital Learning', 
  'Luxury Real Estate', 'Enterprise AI Infrastructure', 'Subscription Consumer Services'
];

const reasons = [
  { title: 'Dedicated AI Squad', icon: <Shield className="w-5 h-5 text-blue-600" /> },
  { title: 'Predictive ROAS Models', icon: <Zap className="w-5 h-5 text-indigo-600" /> },
  { title: 'Scalable Growth Engine', icon: <Maximize className="w-5 h-5 text-cyan-600" /> },
  { title: 'Real-Time Telemetry', icon: <BarChart className="w-5 h-5 text-blue-600" /> },
  { title: 'Rapid 14-Day Deployment', icon: <RefreshCw className="w-5 h-5 text-indigo-600" /> },
  { title: '24/7 Autonomous Agents', icon: <Clock className="w-5 h-5 text-cyan-600" /> },
  { title: 'Outcome-Aligned Partner', icon: <Handshake className="w-5 h-5 text-purple-600" /> }
];

export function FeaturesGrid() {
  return (
    <>
      {/* Industries Accelerated (Bright Vibrant Gradient Banner) */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 border-y border-white/20 relative overflow-hidden text-white shadow-xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center"
        >
          <p className="text-xs font-mono font-bold text-cyan-100 uppercase tracking-widest mb-10 drop-shadow">
            INDUSTRIES WE ACCELERATE TO MARKET LEADERSHIP
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                key={i} 
                className="px-5 py-2.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm font-semibold text-white hover:bg-white hover:text-blue-700 transition-all cursor-default shadow-md font-heading"
              >
                {ind}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Cael Forge (Pure Crisp White Background) */}
      <section className="py-24 md:py-36 bg-slate-50 relative overflow-hidden text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-4 inline-flex items-center gap-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              THE CAEL FORGE STANDARD
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading">
              Why Category Leaders Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600">Cael Forge</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {reasons.map((reason, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                key={i} 
                className="bg-white border border-slate-200/90 backdrop-blur-xl rounded-3xl p-6 flex flex-col items-center text-center gap-4 hover:border-blue-500/50 shadow-sm transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">{reason.title}</h4>
              </motion.div>
            ))}
            
            <motion.a 
              href="https://calendly.com/harshvardhansharma676/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ duration: 0.3, delay: reasons.length * 0.05 }}
              className="bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 text-white rounded-3xl p-6 flex flex-col items-center justify-center text-center gap-2 hover:shadow-lg transition-all cursor-pointer shadow-md group"
            >
              <h4 className="text-sm font-bold text-white font-heading">Initiate Growth Audit</h4>
              <span className="text-xs text-cyan-200 font-mono font-bold flex items-center gap-1">
                Book Strategy Call <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}
