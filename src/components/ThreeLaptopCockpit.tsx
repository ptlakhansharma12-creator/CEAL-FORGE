import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Activity, Radio, Sparkles, TrendingUp, CheckCircle2, Globe, Cpu, ShieldCheck, ArrowUpRight, BarChart3, Bot, Zap, Clock, MessageSquare, Play, Pause, RefreshCw } from 'lucide-react';
import { Logo } from './Logo';

export function ThreeLaptopCockpit() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'performance' | 'automations' | 'agents'>('overview');
  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const [liveRoas, setLiveRoas] = useState(6.85);
  const [liveEventsCount, setLiveEventsCount] = useState(14280);

  // Mouse Parallax 3D Spring Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["16deg", "-16deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-16deg", "16deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Auto-Cycle Tabs every 5 seconds
  useEffect(() => {
    if (!isAutoCycling) return;
    const tabs: ('overview' | 'performance' | 'automations' | 'agents')[] = ['overview', 'performance', 'automations', 'agents'];
    const interval = setInterval(() => {
      setActiveTab(prev => {
        const nextIndex = (tabs.indexOf(prev) + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoCycling]);

  // Real-time live data updates
  useEffect(() => {
    const liveInterval = setInterval(() => {
      setLiveRoas(prev => parseFloat((prev + (Math.random() * 0.08 - 0.03)).toFixed(2)));
      setLiveEventsCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 2000);
    return () => clearInterval(liveInterval);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full flex flex-col items-center justify-center p-2 sm:p-4"
      style={{ perspective: 1400 }}
    >
      {/* Ambient Neon Purple Glow behind Laptop */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-violet-500/20 to-indigo-500/10 blur-3xl -z-10 rounded-full animate-pulse"></div>

      {/* 3D Animated Laptop Chassis */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-2xl bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-[28px] p-3 shadow-[0_35px_80px_rgba(0,0,0,0.45)] border border-slate-600/80 cursor-crosshair"
      >
        {/* Laptop Display Lid Frame */}
        <div className="relative w-full aspect-[16/10] bg-[#070913] rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl flex flex-col justify-between p-3 sm:p-4 text-white">
          
          {/* Top Camera Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-3.5 bg-slate-900 rounded-b-xl z-30 flex items-center justify-center border-b border-slate-800">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 border border-slate-600 animate-pulse"></div>
          </div>

          {/* Screen Header Bar with Interactive Cockpit Tabs */}
          <div className="relative z-20 flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono pt-1">
            <div className="flex items-center gap-2">
              <Logo size="sm" variant="light" className="scale-75 origin-left" />
              <span className="hidden sm:inline font-extrabold text-white tracking-wider text-[11px]">
                CAEL FORGE REAL-TIME COCKPIT
              </span>
            </div>

            {/* Interactive Tabs Row */}
            <div className="flex items-center gap-1 bg-white/10 p-0.5 rounded-lg border border-white/10 text-[9px] font-mono overflow-x-auto max-w-[220px] xs:max-w-full shrink-0">
              <button
                onClick={() => { setActiveTab('overview'); setIsAutoCycling(false); }}
                className={`px-2 py-1 rounded-md transition-all shrink-0 ${activeTab === 'overview' ? 'bg-purple-600 text-white font-bold' : 'text-slate-300 hover:text-white'}`}
              >
                📊 Overview
              </button>
              <button
                onClick={() => { setActiveTab('performance'); setIsAutoCycling(false); }}
                className={`px-2 py-1 rounded-md transition-all shrink-0 ${activeTab === 'performance' ? 'bg-purple-600 text-white font-bold' : 'text-slate-300 hover:text-white'}`}
              >
                📈 Performance
              </button>
              <button
                onClick={() => { setActiveTab('automations'); setIsAutoCycling(false); }}
                className={`px-2 py-1 rounded-md transition-all shrink-0 ${activeTab === 'automations' ? 'bg-purple-600 text-white font-bold' : 'text-slate-300 hover:text-white'}`}
              >
                ⚙️ Automations
              </button>
              <button
                onClick={() => { setActiveTab('agents'); setIsAutoCycling(false); }}
                className={`px-2 py-1 rounded-md transition-all shrink-0 ${activeTab === 'agents' ? 'bg-purple-600 text-white font-bold' : 'text-slate-300 hover:text-white'}`}
              >
                🤖 AI Agents
              </button>
            </div>
          </div>

          {/* Screen Content Dashboard Modes */}
          <div className="relative z-10 flex-1 flex flex-col justify-between my-2 overflow-hidden">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: OVERVIEW COCKPIT (Recreated User Image Layout) */}
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full justify-between"
                >
                  {/* Top 3 KPI Cards */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-2 text-center">
                      <div className="text-[8px] font-mono text-slate-400 uppercase font-semibold">PRODUCTION EFFICIENCY</div>
                      <div className="text-xs sm:text-base font-extrabold text-white font-heading">94.8%</div>
                      <div className="text-[8px] font-mono text-emerald-400">↑ Optimal</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-2 text-center">
                      <div className="text-[8px] font-mono text-slate-400 uppercase font-semibold">MATERIAL UTILIZATION</div>
                      <div className="text-xs sm:text-base font-extrabold text-purple-400 font-heading">98.1%</div>
                      <div className="text-[8px] font-mono text-purple-300">● Live Stream</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-2 text-center">
                      <div className="text-[8px] font-mono text-slate-400 uppercase font-semibold">QUALITY YIELD</div>
                      <div className="text-xs sm:text-base font-extrabold text-emerald-400 font-heading">99.7%</div>
                      <div className="text-[8px] font-mono text-emerald-400">✓ SOC2 Verified</div>
                    </div>
                  </div>

                  {/* Monthly Output Line Chart & Donut Row */}
                  <div className="grid grid-cols-12 gap-2 my-1 items-center flex-1">
                    <div className="col-span-8 bg-white/5 border border-white/10 rounded-xl p-2 h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-300">
                        <span>MONTHLY OUTPUT vs PLAN</span>
                        <span className="text-purple-400 font-bold">+38% LIFT</span>
                      </div>
                      <div className="h-16 w-full relative">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60">
                          <path d="M 0 50 Q 30 20 60 35 T 120 15 T 180 25 T 200 10" fill="none" stroke="#8B5CF6" strokeWidth="2.5" />
                          <path d="M 0 55 Q 30 35 60 40 T 120 28 T 180 32 T 200 20" fill="none" stroke="#38BDF8" strokeWidth="2" strokeDasharray="2 2" />
                          <circle cx="120" cy="15" r="4" fill="#C084FC" className="animate-ping" />
                          <circle cx="120" cy="15" r="3" fill="#FFFFFF" />
                        </svg>
                      </div>
                    </div>

                    <div className="col-span-4 bg-white/5 border border-white/10 rounded-xl p-2 h-full flex flex-col items-center justify-center text-center">
                      <div className="text-[8px] font-mono text-slate-400 uppercase font-semibold mb-1">PROJECT A-113 STATUS</div>
                      <div className="relative w-11 h-11 flex items-center justify-center">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#1E1B4B" strokeWidth="3.5" />
                          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#A855F7" strokeWidth="3.5" strokeDasharray="75, 100" />
                        </svg>
                        <span className="absolute text-[10px] font-bold text-white font-heading">75%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: PERFORMANCE MARKETING COCKPIT */}
              {activeTab === 'performance' && (
                <motion.div
                  key="performance"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-2">
                      <div className="text-[8px] font-mono text-purple-300">BLENDED ROAS</div>
                      <div className="text-base font-extrabold text-white font-heading">{liveRoas}x</div>
                      <div className="text-[8px] font-mono text-emerald-400">↑ Meta & Google</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-2">
                      <div className="text-[8px] font-mono text-slate-400">CAC REDUCTION</div>
                      <div className="text-base font-extrabold text-purple-300 font-heading">$31.80</div>
                      <div className="text-[8px] font-mono text-emerald-400">-42% Cost Cut</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-2">
                      <div className="text-[8px] font-mono text-slate-400">CONVERSION LIFT</div>
                      <div className="text-base font-extrabold text-cyan-400 font-heading">+142%</div>
                      <div className="text-[8px] font-mono text-cyan-300">AI Bidding</div>
                    </div>
                  </div>

                  {/* Real-time Ad Creative Stream */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 my-1 space-y-1.5 text-[9px] font-mono">
                    <div className="text-purple-300 font-bold flex items-center justify-between">
                      <span>REAL-TIME AD CREATIVE TRIAGE</span>
                      <span className="text-emerald-400">● LIVE TESTING</span>
                    </div>
                    <div className="bg-black/40 p-1.5 rounded border border-white/10 flex items-center justify-between">
                      <span>⚡ Meta Retargeting Ad #4</span>
                      <span className="text-purple-400 font-bold">ROAS 7.2x (Budget +25%)</span>
                    </div>
                    <div className="bg-black/40 p-1.5 rounded border border-white/10 flex items-center justify-between">
                      <span>🎯 Google High-Intent Keywords</span>
                      <span className="text-cyan-400 font-bold">Conv. Rate 6.4%</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: AI AUTOMATIONS COCKPIT */}
              {activeTab === 'automations' && (
                <motion.div
                  key="automations"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2.5">
                    <div className="flex items-center justify-between text-[9px] font-mono text-purple-300 mb-2 font-bold">
                      <span>AUTONOMOUS WORKFLOW PIPELINE</span>
                      <span className="text-emerald-400">0ms LATENCY</span>
                    </div>

                    {/* Animated Workflow Nodes */}
                    <div className="flex items-center justify-between gap-1 text-[8px] font-mono text-center">
                      <div className="bg-purple-600/30 border border-purple-500/50 px-2 py-1.5 rounded text-white font-bold">
                        Lead Inbound
                      </div>
                      <div className="h-0.5 flex-1 bg-purple-500 animate-pulse"></div>
                      <div className="bg-violet-600/30 border border-violet-500/50 px-2 py-1.5 rounded text-white font-bold">
                        AI Enrich
                      </div>
                      <div className="h-0.5 flex-1 bg-purple-500 animate-pulse"></div>
                      <div className="bg-cyan-600/30 border border-cyan-500/50 px-2 py-1.5 rounded text-white font-bold">
                        Lead Score
                      </div>
                      <div className="h-0.5 flex-1 bg-purple-500 animate-pulse"></div>
                      <div className="bg-emerald-600/30 border border-emerald-500/50 px-2 py-1.5 rounded text-white font-bold">
                        CRM Sync
                      </div>
                    </div>
                  </div>

                  {/* Webhook Activity Feed */}
                  <div className="bg-black/40 border border-white/10 rounded-xl p-2 my-1 text-[9px] font-mono text-slate-300 space-y-1">
                    <div className="text-slate-400 font-bold">LIVE WEBHOOK PAYLOAD FEED:</div>
                    <div className="text-emerald-400 truncate">✓ [10:27 AM] Webhook #{liveEventsCount}: Lead enriched via Clearbit</div>
                    <div className="text-purple-300 truncate">⚡ [10:27 AM] Score: 98/100 ➔ Assigned to AI Agent</div>
                  </div>
                </motion.div>
              )}

              {/* TAB 4: AI AGENTS COCKPIT */}
              {activeTab === 'agents' && (
                <motion.div
                  key="agents"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2.5">
                    <div className="flex items-center justify-between text-[9px] font-mono text-purple-300 mb-2 font-bold">
                      <span>CONVERSATIONAL AI AGENT SESSION</span>
                      <span className="text-purple-400">RESPONSE: &lt; 3.8s</span>
                    </div>

                    {/* Chat Simulation */}
                    <div className="space-y-1.5 text-[9px] font-mono">
                      <div className="bg-white/10 p-1.5 rounded-lg text-slate-200 self-start max-w-[85%]">
                        <strong>Prospect:</strong> &quot;Can your AI agents book meetings directly into Calendly?&quot;
                      </div>
                      <div className="bg-purple-600/40 border border-purple-500/50 p-1.5 rounded-lg text-white ml-auto max-w-[85%]">
                        <strong>AI Agent:</strong> &quot;Yes! I qualify prospects in real-time and schedule directly into your team&apos;s calendar.&quot;
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[9px] font-mono mt-1">
                    <div className="bg-purple-500/10 border border-purple-500/30 p-1.5 rounded text-purple-300 font-bold text-center">
                      24/7 AUTONOMOUS REPS: ACTIVE
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 p-1.5 rounded text-emerald-400 font-bold text-center">
                      98.4% MATCH ACCURACY
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Bottom Cockpit Status Bar */}
          <div className="relative z-20 pt-2 border-t border-white/10 flex items-center justify-between text-[9px] font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-300">REAL-TIME COCKPIT: <strong className="text-white">OPERATIONAL</strong></span>
            </div>
            <div className="text-purple-400 font-bold">
              {liveEventsCount.toLocaleString()} EVENTS PROCESSED
            </div>
          </div>

          {/* Floating 3D Depth Card (Pops out on mouse hover) */}
          <motion.div
            style={{ transform: "translateZ(45px)", transformStyle: "preserve-3d" }}
            className="absolute bottom-3 right-3 z-30 bg-[#0B0F19]/95 border border-purple-500/60 p-2 rounded-xl shadow-[0_0_25px_rgba(139,92,246,0.5)] flex items-center gap-2 backdrop-blur-md"
          >
            <div className="w-6 h-6 rounded-lg bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300">
              <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <div>
              <div className="text-[8px] font-mono text-purple-300 font-bold">AI ENGINE RUNNING</div>
              <div className="text-[9px] font-bold text-white uppercase">{activeTab} MODE</div>
            </div>
          </motion.div>

        </div>

        {/* Laptop Keyboard & Trackpad Lower Base */}
        <div className="w-[102%] h-4 bg-gradient-to-b from-slate-800 to-slate-900 rounded-b-2xl border-t border-slate-700 flex items-center justify-center relative -mt-1 shadow-md">
          <div className="w-16 h-1 bg-slate-600 rounded-full"></div>
        </div>

      </motion.div>
    </div>
  );
}
