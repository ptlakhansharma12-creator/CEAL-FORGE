import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  Shield,
  Clock,
  CheckCircle2,
  TrendingUp,
  Activity,
  Bot,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Brain,
  Sliders,
  Check,
  Layers,
  Cpu,
  Eye,
  Radio,
  BarChart3
} from 'lucide-react';
import { ThreeCanvas } from './ThreeCanvas';
import { ShinyText } from './ShinyText';

// EXACTLY 4 CORE PILLARS FOR DYNAMIC CHANGING HERO TEXT
const FOUR_CORE_SERVICES = [
  {
    id: '01',
    serviceName: 'PERFORMANCE MARKETING',
    headlinePrefix: 'PILLAR 01: PERFORMANCE MARKETING',
    highlightText: 'PROFITABLE ACQUISITION',
    subtitle: 'Meta, Google & LinkedIn Ads, conversion funnels, high-intent landing pages, and creative testing.'
  },
  {
    id: '02',
    serviceName: 'AI AUTOMATION',
    headlinePrefix: 'PILLAR 02: AI AUTOMATION & WORKFLOWS',
    highlightText: 'INTELLIGENT OPERATIONS',
    subtitle: 'Instant AI lead qualification, WhatsApp workflows, automated CRM tracking, and custom AI agents.'
  },
  {
    id: '03',
    serviceName: 'SOCIAL MEDIA',
    headlinePrefix: 'PILLAR 03: SOCIAL MEDIA & DISTRIBUTION',
    highlightText: 'BRAND PRESENCE & DISTRIBUTION',
    subtitle: 'Strategic content, video storytelling, distribution systems, and active community engagement.'
  },
  {
    id: '04',
    serviceName: 'PERSONAL BRANDING',
    headlinePrefix: 'PILLAR 04: PERSONAL BRANDING',
    highlightText: 'FOUNDER & EXECUTIVE AUTHORITY',
    subtitle: 'Narrative positioning, ghostwriting, thought leadership, and digital presence for industry leaders.'
  }
];


const AI_SUGGESTIONS = [
  {
    id: 1,
    tag: 'OptiCall Bot',
    tagColor: 'text-purple-300 bg-purple-950/80 border-purple-500/80 shadow-[0_0_10px_rgba(168,85,247,0.3)]',
    title: 'Recommend upgrading subscription to user #8492',
    timestamp: 'Just now'
  },
  {
    id: 2,
    tag: 'Resolution',
    tagColor: 'text-cyan-300 bg-cyan-950/80 border-cyan-500/80 shadow-[0_0_10px_rgba(56,189,248,0.3)]',
    title: 'Auto-resolved 14 password reset tickets',
    timestamp: '1m ago'
  },
  {
    id: 3,
    tag: 'Alert',
    tagColor: 'text-rose-300 bg-rose-950/80 border-rose-500/80 shadow-[0_0_10px_rgba(244,63,94,0.3)]',
    title: 'Spike in API latency detected. Routing support.',
    timestamp: '3m ago'
  },
  {
    id: 4,
    tag: 'Attribution Engine',
    tagColor: 'text-indigo-300 bg-indigo-950/80 border-indigo-500/80 shadow-[0_0_10px_rgba(99,102,241,0.3)]',
    title: 'Meta ROAS scaled to 6.4x on Campaign #CF-902',
    timestamp: '5m ago'
  },
  {
    id: 5,
    tag: 'AI Sales Rep',
    tagColor: 'text-emerald-300 bg-emerald-950/80 border-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.3)]',
    title: 'Qualified lead & booked discovery call with Enterprise VP',
    timestamp: '8m ago'
  }
];

export function Hero() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [activeCalls, setActiveCalls] = useState(142);
  const [emailQueue, setEmailQueue] = useState(28);
  const [isTick, setIsTick] = useState(false);

  // 3D Perspective Spring Damping Mouse State
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const currentService = FOUR_CORE_SERVICES[activeServiceIndex];
  const CALENDLY_LINK = "https://calendly.com/harshvardhansharma676/discovery-call";

  // Auto-rotating timer for the 4 Core Services changing text (every 4 seconds)
  useEffect(() => {
    const serviceTimer = setInterval(() => {
      setActiveServiceIndex(prev => (prev + 1) % FOUR_CORE_SERVICES.length);
    }, 4000);

    return () => clearInterval(serviceTimer);
  }, []);

  // Real-time telemetry ticker & dynamic count updates
  useEffect(() => {
    const telemetryTimer = setInterval(() => {
      setActiveSuggestionIndex(prev => (prev + 1) % AI_SUGGESTIONS.length);
      setActiveCalls(prev => prev + (Math.random() > 0.5 ? 1 : -1));
      setIsTick(true);
      setTimeout(() => setIsTick(false), 300);
    }, 3800);

    return () => clearInterval(telemetryTimer);
  }, []);

  // 3D Spring Damped Mouse Movement Physics
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const targetRotateX = ((y - centerY) / centerY) * -15;
    const targetRotateY = ((x - centerX) / centerX) * 15;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt(prev => ({
      rotateX: prev.rotateX + (targetRotateX - prev.rotateX) * 0.16,
      rotateY: prev.rotateY + (targetRotateY - prev.rotateY) * 0.16,
      glareX,
      glareY
    }));
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen bg-[#070A12] text-white flex flex-col justify-between pt-28 sm:pt-36 pb-16 overflow-hidden select-none"
    >
      {/* Full-Screen CENTERED 3D WebGL Three.js Background Animation */}
      <ThreeCanvas
        variant="hero"
        className="absolute inset-0 w-full h-full z-0 opacity-35 pointer-events-none"
      />

      {/* Background Ambient Cyber Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Centered Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] bg-gradient-to-br from-purple-900/25 via-cyan-900/20 to-transparent" />

        {/* Cybernetic Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Hero Copy & Dynamic 4-Service Rotating Text */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Top Micro Badge & 4 Core Service Selector Pills */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6"
            >
              {FOUR_CORE_SERVICES.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveServiceIndex(idx)}
                  className={`inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                    activeServiceIndex === idx
                      ? 'bg-purple-950/90 text-cyan-300 border-cyan-400/80 shadow-[0_0_15px_rgba(56,189,248,0.4)] scale-105'
                      : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-slate-200'
                  }`}
                >
                  <span className="text-[9px] sm:text-[10px] opacity-75">{item.id}</span>
                  <span>{item.serviceName}</span>
                  {activeServiceIndex === idx && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  )}
                </button>
              ))}
            </motion.div>

            {/* Main Headline H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.05] mb-4 font-heading text-white uppercase drop-shadow-[0_4px_30px_rgba(255,255,255,0.25)]"
            >
              WE BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300 font-extrabold drop-shadow-[0_0_35px_rgba(56,189,248,0.7)]">
                GROWTH SYSTEMS THAT SCALE.
              </span>
            </motion.h1>

            {/* Sub-points & Connecting Engine Description */}
            <div className="mb-6 space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono font-bold text-cyan-300 uppercase tracking-wide">
                <span>• Not just isolated ads.</span>
                <span>• Not just social media posts.</span>
                <span>• Not just disconnected tools.</span>
              </div>
              <p className="text-slate-100 font-medium text-xs sm:text-base leading-relaxed max-w-xl">
                Cael Forge combines performance marketing, AI automation, social media, and personal branding into one connected engine that turns attention into paying customers.
              </p>
            </div>

            {/* Dynamic Animated Core Service Pillar Preview */}
            <div className="min-h-[90px] sm:min-h-[100px] flex flex-col justify-start w-full mb-6 p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-1"
                >
                  <div className="text-[10px] sm:text-xs font-mono font-extrabold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span>{currentService.headlinePrefix}</span>
                  </div>
                  
                  <h2 className="text-sm sm:text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200 tracking-tight font-heading">
                    {currentService.highlightText}
                  </h2>

                  <p className="text-slate-300 font-normal text-xs leading-relaxed max-w-xl">
                    {currentService.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12 w-full sm:w-auto"
            >
              {/* Primary White Button */}
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-full shadow-[0_0_35px_rgba(255,255,255,0.35)] transition-all hover:scale-[1.04] active:scale-[0.98] group cursor-pointer font-heading w-full sm:w-auto"
              >
                <span>Build Your Growth System →</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Dark Glass Button */}
              <a
                href="#cases"
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700 hover:border-cyan-400 rounded-full backdrop-blur-md transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer w-full sm:w-auto"
              >
                <span>See Case Studies & Proof →</span>
              </a>
            </motion.div>

            {/* Bottom Tagline Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/80 text-cyan-300 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              <span>The Cael Forge Core: Strategy • Performance • Automation • Authority</span>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Interactive 3D Perspective Parallax Operational AI Dashboard */}
          <div className="lg:col-span-6 [perspective:1400px]">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                transform: isHovered
                  ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.03, 1.03, 1.03)`
                  : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                transition: isHovered ? 'transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'transform 0.6s ease-out',
                transformStyle: 'preserve-3d'
              }}
              className="relative rounded-3xl bg-[#0C101C]/95 border border-purple-500/50 backdrop-blur-2xl p-5 sm:p-6 shadow-[0_25px_80px_rgba(168,85,247,0.25)] overflow-hidden group hover:border-cyan-400/70 transition-colors"
            >
              {/* Dynamic 3D Specular Glare Reflection */}
              {isHovered && (
                <div
                  className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.16) 0%, transparent 65%)`
                  }}
                />
              )}

              {/* 3D Holographic Corner Tech Brackets (Z-Layer: 80px) */}
              <div
                className="absolute top-3 left-3 text-[10px] font-mono text-purple-300 font-bold pointer-events-none transition-transform duration-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                style={{ transform: isHovered ? 'translateZ(80px)' : 'translateZ(0px)' }}
              >
                ┌ CF-AI ┐
              </div>
              <div
                className="absolute bottom-3 right-3 text-[10px] font-mono text-cyan-300 font-bold pointer-events-none transition-transform duration-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                style={{ transform: isHovered ? 'translateZ(80px)' : 'translateZ(0px)' }}
              >
                └ 3D-TELEMETRY ┘
              </div>

              {/* Card Top Glow Border */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-purple-500" />

              {/* 1. Header Bar Inside Dashboard (3D Layer: Z-35) */}
              <div
                className="flex items-center justify-between pb-5 mb-5 border-b border-slate-800/90 transition-transform duration-300"
                style={{ transform: isHovered ? 'translateZ(35px)' : 'translateZ(0px)' }}
              >
                {/* Left: System Live Pulsing Indicator */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                  </span>
                  <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono font-extrabold text-emerald-300 uppercase tracking-widest">
                    SYSTEM_LIVE
                  </span>
                </div>

                {/* Right: Version Tag */}
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-purple-200 bg-purple-950/70 border border-purple-800/80 px-3 py-1 rounded-md shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span className="font-bold">v2.4.1</span>
                </div>
              </div>

              {/* 2. Top Stats Row - 3 Stat Cards (3D Layer: Z-50) */}
              <div
                className="grid grid-cols-3 gap-3 mb-5 transition-transform duration-300"
                style={{ transform: isHovered ? 'translateZ(50px)' : 'translateZ(0px)' }}
              >
                {/* Card 1: Active Calls */}
                <div className={`bg-[#121726]/95 border rounded-2xl p-3.5 flex flex-col justify-between transition-all shadow-lg cursor-pointer ${
                  isTick ? 'border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-105' : 'border-slate-800 hover:border-purple-500/60'
                }`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-semibold text-slate-300">Active Calls</span>
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-700 uppercase">
                      Live
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                    {activeCalls}
                  </div>
                </div>

                {/* Card 2: Email Queue */}
                <div className="bg-[#121726]/95 border border-slate-800 rounded-2xl p-3.5 flex flex-col justify-between hover:border-rose-500/60 transition-all shadow-lg cursor-pointer">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-semibold text-slate-300">Email Queue</span>
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-700">
                      -12%
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                    {emailQueue}
                  </div>
                </div>

                {/* Card 3: QA Score */}
                <div className="bg-[#121726]/95 border border-slate-800 rounded-2xl p-3.5 flex flex-col justify-between hover:border-emerald-500/60 transition-all shadow-lg cursor-pointer">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-semibold text-slate-300">QA Score</span>
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700">
                      +0.8%
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                    98.5%
                  </div>
                </div>
              </div>

              {/* 3. Middle Section Split: Left AI Suggestions & Right Efficiency Gauge */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                
                {/* Left Side: Live AI Suggestions Box (3D Layer: Z-65) */}
                <div
                  className="md:col-span-7 bg-[#121726]/95 border border-slate-800/90 rounded-2xl p-4 flex flex-col justify-between transition-transform duration-300 shadow-xl relative overflow-hidden"
                  style={{ transform: isHovered ? 'translateZ(65px)' : 'translateZ(0px)' }}
                >
                  {/* Holographic Laser Scanline Animation */}
                  <motion.div
                    animate={{ y: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent pointer-events-none"
                  />

                  <div className="flex items-center gap-2 mb-3 z-10">
                    <Brain className="w-4 h-4 text-cyan-400 animate-pulse drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Live AI Suggestions
                    </h4>
                  </div>

                  {/* Suggestions List */}
                  <div className="space-y-2.5 min-h-[140px] flex flex-col justify-center z-10">
                    <AnimatePresence mode="wait">
                      {AI_SUGGESTIONS.slice(0, 3).map((item, idx) => {
                        const isActive = idx === activeSuggestionIndex % 3;
                        return (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 15 }}
                            transition={{ duration: 0.35 }}
                            className={`p-2.5 rounded-xl border text-xs transition-all ${
                              isActive
                                ? 'bg-purple-950/60 border-purple-400/80 shadow-[0_0_20px_rgba(168,85,247,0.35)] scale-[1.03]'
                                : 'bg-[#0E1320] border-slate-800/80 opacity-80 hover:opacity-100'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className={`text-[9.5px] font-mono font-bold px-1.5 py-0.5 rounded border ${item.tagColor}`}>
                                {item.tag}
                              </span>
                              <span className="text-[9px] text-slate-300 font-mono">
                                {item.timestamp}
                              </span>
                            </div>
                            <p className="text-[11.5px] text-slate-100 font-semibold leading-snug line-clamp-2">
                              {item.title}
                            </p>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Right Side: Circular Gauge & Big Stat Box (3D Layer: Z-80) */}
                <div
                  className="md:col-span-5 flex flex-col gap-3 transition-transform duration-300"
                  style={{ transform: isHovered ? 'translateZ(80px)' : 'translateZ(0px)' }}
                >
                  
                  {/* Arc Gauge Box */}
                  <div className="bg-[#121726]/95 border border-slate-800 rounded-2xl p-3.5 flex flex-col items-center justify-center relative overflow-hidden shadow-xl group/gauge hover:border-cyan-400/60 transition-colors">
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="text-[10.5px] font-semibold text-slate-300 flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-cyan-400 group-hover/gauge:scale-110 transition-transform" />
                        Efficiency Rate
                      </span>
                      <span className="text-[10px] font-mono font-bold text-emerald-400">99.4%</span>
                    </div>

                    {/* Circular Arc SVG Meter */}
                    <div className="relative w-24 h-24 flex items-center justify-center my-1">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        {/* Background Track */}
                        <path
                          className="text-slate-800"
                          strokeWidth="3.5"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        {/* Glowing Cyan/Purple Progress Path */}
                        <motion.path
                          className="text-purple-500"
                          strokeWidth="3.5"
                          strokeDasharray="99.4, 100"
                          strokeLinecap="round"
                          stroke="url(#gradient-purple-3d-bright)"
                          fill="none"
                          initial={{ strokeDasharray: "0, 100" }}
                          animate={{ strokeDasharray: "99.4, 100" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <defs>
                          <linearGradient id="gradient-purple-3d-bright" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="50%" stopColor="#38bdf8" />
                            <stop offset="100%" stopColor="#c084fc" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Center Text */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xs font-extrabold text-white font-mono drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">
                          99.4%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Big Stat Box: 1.2K+ Tasks/hr */}
                  <div className="bg-[#121726]/95 border border-slate-800 rounded-2xl p-3.5 flex flex-col justify-between shadow-xl">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                      1.2K+
                    </div>
                    <div className="text-[10px] text-slate-300 font-semibold mb-2">
                      Tasks / hr processed
                    </div>

                    {/* Bottom Status Tags */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-[8.5px] font-mono font-extrabold px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700 uppercase shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                        AUTOMATION
                      </span>
                      <span className="text-[8.5px] font-mono font-extrabold px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-700 uppercase shadow-[0_0_8px_rgba(168,85,247,0.3)]">
                        ACTIVE
                      </span>
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}
