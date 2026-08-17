import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  UserCheck,
  Mic,
  Video,
  TrendingUp,
  Award,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Radio,
  Share2,
  Tv,
  MessageSquare,
  CheckCircle2,
  Zap,
  ArrowRight
} from 'lucide-react';

interface CollageItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  stat: string;
  statLabel: string;
  color: string;
}

const collageItems: CollageItem[] = [
  {
    id: 'stage',
    title: 'Keynote & Global Stage Positioning',
    subtitle: 'Elevate founder authority on premier industry stages and international summits.',
    badge: 'KEYNOTE AUTHORITY',
    image: '/personal-brand-stage.jpg',
    stat: '5.2M+',
    statLabel: 'Monthly Impressions',
    color: 'from-purple-600 to-indigo-600'
  },
  {
    id: 'podcast',
    title: 'Executive Podcast & Broadcast Studio',
    subtitle: 'High-production podcasting and media appearances that build trust at scale.',
    badge: 'PODCAST NETWORK',
    image: '/personal-brand-podcast.jpg',
    stat: '140K+',
    statLabel: 'Executive Audience',
    color: 'from-cyan-600 to-blue-600'
  },
  {
    id: 'media',
    title: 'Data-Driven Content Intelligence',
    subtitle: 'Turn complex industry insights into high-converting viral thought leadership.',
    badge: 'CONTENT ENGINE',
    image: '/personal-brand-media.jpg',
    stat: '3.8x',
    statLabel: 'Inbound Deal Velocity',
    color: 'from-emerald-600 to-teal-600'
  },
  {
    id: 'studio',
    title: 'High-Impact Video Production',
    subtitle: 'Cinema-grade video creation engineered to capture buyer attention.',
    badge: 'VIRAL PRODUCTION',
    image: '/personal-brand-studio.jpg',
    stat: '8.4x',
    statLabel: 'Engagement Lift',
    color: 'from-rose-600 to-purple-600'
  }
];

export function PersonalBrandingShowcase() {
  const [activeTab, setActiveTab] = useState<'positioning' | 'production' | 'distribution'>('positioning');
  const [selectedImage, setSelectedImage] = useState<CollageItem>(collageItems[0]);

  const CALENDLY_LINK = "https://calendly.com/harshvardhansharma676/discovery-call";

  return (
    <section id="personal-branding" className="py-20 sm:py-32 bg-[#070A12] text-white relative overflow-hidden select-none border-y border-slate-800/80">
      
      {/* Background Neon Purple Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[180px] pointer-events-none" />

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
            <UserCheck className="w-3.5 h-3.5 text-purple-400" />
            FOUNDER & EXECUTIVE PERSONAL BRANDING
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight font-heading leading-tight">
            Turn Founder Authority Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-indigo-300">
              Predictable Organic Revenue
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            People buy from founders, not anonymous logos. Cael Forge builds cinema-grade executive branding, podcast engines, and viral thought leadership that convert views into high-ticket enterprise deals.
          </p>
        </motion.div>

        {/* 4-Image Collage Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 items-stretch">
          
          {/* Main Large Featured Hero Collage Item (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 group relative rounded-3xl overflow-hidden border border-purple-500/40 bg-slate-900/90 shadow-[0_20px_60px_rgba(168,85,247,0.2)] min-h-[380px] sm:min-h-[460px] flex flex-col justify-end p-6 sm:p-8 cursor-pointer"
            onClick={() => setSelectedImage(selectedImage)}
          >
            {/* Background Image with Zoom & Dark Gradient */}
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-[#070A12]/50 to-transparent" />

            {/* Top Floating Badge & Live Indicator */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
              <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-500/60 px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-md">
                ⚡ {selectedImage.badge}
              </span>
              <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-[10px] font-mono text-emerald-300 font-bold uppercase">LIVE SYSTEM</span>
              </div>
            </div>

            {/* Bottom Content Panel Overlay */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
                  {selectedImage.stat}
                </div>
                <span className="text-xs font-mono text-slate-300 font-semibold uppercase bg-purple-950/70 border border-purple-800 px-2.5 py-1 rounded-lg">
                  {selectedImage.statLabel}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading">
                {selectedImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-xl">
                {selectedImage.subtitle}
              </p>
            </div>
          </motion.div>

          {/* Right Side 3-Collage Items Thumbnails Grid (5 cols) */}
          <div className="md:col-span-5 grid grid-cols-1 gap-4">
            {collageItems.map((item) => {
              const isSelected = selectedImage.id === item.id;

              return (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage(item)}
                  className={`group relative rounded-2xl overflow-hidden border p-4 flex items-center gap-4 cursor-pointer transition-all ${
                    isSelected
                      ? 'border-purple-400 bg-purple-950/40 shadow-[0_0_25px_rgba(168,85,247,0.3)]'
                      : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                  }`}
                >
                  {/* Thumbnail Image */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden relative shrink-0 border border-slate-700">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-purple-900/20" />
                  </div>

                  {/* Thumbnail Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-950 border border-purple-800 px-2 py-0.5 rounded uppercase">
                        {item.badge}
                      </span>
                      <ArrowUpRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-cyan-400 rotate-45' : 'text-slate-500 group-hover:text-slate-300'}`} />
                    </div>
                    <h4 className="text-sm font-bold text-white truncate font-heading">{item.title}</h4>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{item.subtitle}</p>
                    <div className="text-xs font-mono font-extrabold text-cyan-400 mt-1">
                      {item.stat} <span className="text-[10px] text-slate-400 font-normal">{item.statLabel}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* 3 Executive Branding Deliverable Pillar Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/60 transition-all shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-700 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
              <Mic className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2 font-heading">Podcast & Media Studio</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
              End-to-end podcast production, sound design, and guest booking that positions founders alongside industry titans.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-purple-400">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>100% Turnkey Production</span>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/60 transition-all shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-700 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <Video className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2 font-heading">Short-Form Video Engine</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
              High-hook, cinema-grade reels, Shorts, and TikToks edited specifically to capture enterprise B2B buyer interest.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Multi-Platform Distribution</span>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/60 transition-all shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-700 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2 font-heading">Thought Leadership & PR</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
              Ghostwritten LinkedIn essays, newsletters, and press features that drive qualified inbound discovery calls.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Revenue-Attributed Authority</span>
            </div>
          </div>

        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-950/80 via-slate-900 to-indigo-950/80 border border-purple-500/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_rgba(168,85,247,0.15)]">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-1 block">
              READY TO SCALE YOUR FOUNDER AUTHORITY?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Build Your Personal Brand Engine Today
            </h3>
          </div>

          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold rounded-2xl shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2 text-sm font-mono shrink-0 cursor-pointer"
          >
            <span>Schedule Strategy Call</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>

      </div>
    </section>
  );
}
