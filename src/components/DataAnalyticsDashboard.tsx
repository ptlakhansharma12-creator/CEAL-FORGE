import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BarChart3,
  TrendingUp,
  Sparkles,
  Filter,
  AlertTriangle,
  CheckCircle2,
  ArrowUpRight,
  Search,
  Cpu,
  Bot,
  Zap,
  DollarSign,
  Users,
  ShieldCheck,
  RefreshCw,
  Download,
  Check,
  ArrowRight,
  Sliders
} from 'lucide-react';

interface InsightItem {
  id: string;
  type: 'anomaly' | 'opportunity' | 'predictive' | 'optimization';
  title: string;
  channel: string;
  impact: string;
  description: string;
  actionText: string;
  confidence: number;
}

const sampleInsights: InsightItem[] = [
  {
    id: '1',
    type: 'anomaly',
    title: 'Meta Retargeting ROAS Spike Detected',
    channel: 'Meta Paid Ads',
    impact: '+142% ROAS Lift',
    description: 'AI automated ad creative rotation triggered a +142% increase in ROAS over 72 hours, reducing CAC from $68 to $32.40.',
    actionText: 'Auto-scale budget +25%',
    confidence: 98
  },
  {
    id: '2',
    type: 'opportunity',
    title: 'WhatsApp AI Agent Outperforming Email Nurture',
    channel: 'Conversational AI',
    impact: '3.4x Higher Meeting Rate',
    description: 'WhatsApp AI agent booked 3.4x more strategy calls than email drip campaigns, achieving a 4.2-second average response time.',
    actionText: 'Route 80% inbound traffic to AI Agent',
    confidence: 96
  },
  {
    id: '3',
    type: 'predictive',
    title: 'High-Ticket LTV Cohort Expansion Identified',
    channel: 'Revenue Operations',
    impact: '$5,400 Projected LTV',
    description: 'Machine learning cohort models identified 1,240 enterprise lookalikes with 48% higher 90-day retention probability.',
    actionText: 'Launch Lookalike Campaign',
    confidence: 94
  },
  {
    id: '4',
    type: 'optimization',
    title: 'Budget Reallocation Recommendation',
    channel: 'Cross-Channel Media',
    impact: '+$34,200 Est. Monthly Revenue',
    description: 'Reallocating 15% budget from low-yield display networks to Google Search high-intent keywords will yield +28% net conversions.',
    actionText: 'Execute AI Budget Reallocation',
    confidence: 99
  }
];

export function DataAnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | 'q3' | 'ytd'>('30d');
  const [selectedChannel, setSelectedChannel] = useState<'all' | 'meta' | 'google' | 'ai'>('all');
  const [activeQuery, setActiveQuery] = useState<string>('Detect ROAS Campaign Anomalies');
  const [customQueryInput, setCustomQueryInput] = useState<string>('');
  const [hoveredDataPoint, setHoveredDataPoint] = useState<number | null>(null);
  
  // Interactive Action Execution States
  const [executedActions, setExecutedActions] = useState<{ [id: string]: boolean }>({});
  const [executingId, setExecutingId] = useState<string | null>(null);
  
  // Live Telemetry Sync State
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>('Just now');
  
  // Toast Feedback State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const CALENDLY_LINK = "https://calendly.com/harshvardhansharma676/discovery-call";

  // Dynamic Chart Points based on time range
  const chartData = {
    '7d': [28, 42, 38, 56, 64, 78, 92],
    '30d': [20, 32, 28, 45, 52, 60, 58, 72, 85, 94, 110, 128],
    'q3': [15, 25, 40, 55, 70, 88, 105, 120, 145, 160, 185, 210],
    'ytd': [10, 30, 50, 80, 110, 150, 190, 240, 310, 380, 440, 520]
  };

  const currentPoints = chartData[timeRange];
  const maxVal = Math.max(...currentPoints);

  const sampleQueries = [
    'Detect ROAS Campaign Anomalies',
    'Predict Q4 LTV Cohort Scale',
    'Optimize Cross-Channel Ad Budget',
    'Audit AI Agent Meeting Velocity'
  ];

  // Trigger Toast Alert Helper
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3800);
  };

  // Handle Insight Action Execution Click
  const handleExecuteInsight = (insight: InsightItem) => {
    if (executedActions[insight.id]) return;
    
    setExecutingId(insight.id);
    setTimeout(() => {
      setExecutingId(null);
      setExecutedActions(prev => ({ ...prev, [insight.id]: true }));
      triggerToast(`✓ AI Action Executed: "${insight.actionText}" deployed to live ad pipeline.`);
    }, 1200);
  };

  // Handle Live Telemetry Sync Click
  const handleRefreshTelemetry = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setLastSyncTime('Just now');
      triggerToast('⚡ Live Telemetry Synced: Parsed 14,280 webhook data points in 0.4s');
    }, 1000);
  };

  // Handle Export CSV/Report Download Click
  const handleExportReport = () => {
    triggerToast(`📊 Telemetry Exported: Cael_Forge_Analytics_${timeRange.toUpperCase()}.csv generated.`);
  };

  // Handle Custom AI Query Submit
  const handleCustomQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQueryInput.trim()) return;
    setActiveQuery(customQueryInput.trim());
    triggerToast(`🔍 AI Query Analyzed: "${customQueryInput.trim()}"`);
    setCustomQueryInput('');
  };

  return (
    <section id="analytics-dashboard" className="py-20 sm:py-32 bg-[#FAFAFC] text-slate-900 border-y border-slate-200/80 relative overflow-hidden select-none">
      
      {/* Bright Purple Radial Glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Floating Interactive Toast Feedback Banner */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 right-6 z-50 bg-[#0C101C] text-white border border-purple-500/80 px-5 py-3 rounded-2xl shadow-[0_15px_40px_rgba(168,85,247,0.35)] flex items-center gap-3 backdrop-blur-xl"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-mono font-bold text-slate-100">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs font-mono font-bold text-purple-700 uppercase tracking-widest px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 mb-4 inline-flex items-center gap-2 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            AI DATA ANALYTICS & INSIGHTS ENGINE
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight font-heading leading-tight">
            Turn Raw Campaign Data Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-600">
              Actionable Growth Insights
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Our AI data analytics engine continuously parses campaign telemetry, detects performance anomalies, and generates automated insights to maximize your return on ad spend.
          </p>
        </motion.div>

        {/* Main Interactive Dashboard Panel Card */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(139,92,246,0.06)] relative overflow-hidden">
          
          {/* Header Bar with Action Controls & Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 mb-8">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100/70 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-purple-700 uppercase tracking-wider flex items-center gap-2">
                  <span>LIVE ANALYTICS ENGINE</span>
                  <span className="text-[10px] text-slate-400">({lastSyncTime})</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Sample Client Growth Dashboard</h3>
              </div>
            </div>

            {/* Controls, Action Buttons & Filters */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              
              {/* Refresh Telemetry Button */}
              <button
                onClick={handleRefreshTelemetry}
                disabled={isSyncing}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-xl transition-all cursor-pointer shadow-sm disabled:opacity-50"
                title="Sync Live Webhook Telemetry"
              >
                <RefreshCw className={`w-3.5 h-3.5 text-purple-700 ${isSyncing ? 'animate-spin' : ''}`} />
                <span>{isSyncing ? 'Syncing...' : 'Sync Data'}</span>
              </button>

              {/* Export CSV Report Button */}
              <button
                onClick={handleExportReport}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all cursor-pointer shadow-sm"
                title="Export Data CSV Report"
              >
                <Download className="w-3.5 h-3.5 text-slate-700" />
                <span>Export CSV</span>
              </button>

              {/* Time Range Selector */}
              <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-mono font-bold">
                {(['7d', '30d', 'q3', 'ytd'] as const).map(range => (
                  <button
                    key={range}
                    onClick={() => {
                      setTimeRange(range);
                      triggerToast(`Switched telemetry window to ${range.toUpperCase()}`);
                    }}
                    className={`px-2.5 sm:px-3 py-1 rounded-lg transition-all uppercase cursor-pointer ${
                      timeRange === range
                        ? 'bg-purple-600 text-white shadow-sm font-extrabold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>

              {/* Channel Filter */}
              <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-mono font-bold">
                {(['all', 'meta', 'google', 'ai'] as const).map(ch => (
                  <button
                    key={ch}
                    onClick={() => {
                      setSelectedChannel(ch);
                      triggerToast(`Filtered telemetry channel to: ${ch.toUpperCase()}`);
                    }}
                    className={`px-2.5 sm:px-3 py-1 rounded-lg transition-all uppercase cursor-pointer ${
                      selectedChannel === ch
                        ? 'bg-purple-600 text-white shadow-sm font-extrabold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {ch}
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* 4 Interactive Metric Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-8">
            
            <div
              onClick={() => triggerToast('Analyzed $1,428,500 across Meta & Google attribution channels.')}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 hover:border-purple-400 hover:bg-purple-50/40 transition-all cursor-pointer shadow-sm group"
            >
              <div className="flex items-center justify-between text-xs font-mono font-semibold text-slate-500 mb-2">
                <span>REVENUE ANALYZED</span>
                <DollarSign className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-1">$1,428,500</div>
              <div className="text-[11px] sm:text-xs font-mono font-bold text-emerald-600 flex items-center gap-1">
                <ArrowUpRight className="w-3.5 h-3.5" /> +34.2% YoY Growth
              </div>
            </div>

            <div
              onClick={() => triggerToast('Blended ROAS scaled to 6.85x (+1.85x above baseline target).')}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 hover:border-purple-400 hover:bg-purple-50/40 transition-all cursor-pointer shadow-sm group"
            >
              <div className="flex items-center justify-between text-xs font-mono font-semibold text-slate-500 mb-2">
                <span>BLENDED ROAS</span>
                <TrendingUp className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-1">6.85x</div>
              <div className="text-[11px] sm:text-xs font-mono font-bold text-purple-700 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" /> +1.85x vs Target
              </div>
            </div>

            <div
              onClick={() => triggerToast('14,280 inbound leads qualified with 98.4% match accuracy.')}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 hover:border-purple-400 hover:bg-purple-50/40 transition-all cursor-pointer shadow-sm group"
            >
              <div className="flex items-center justify-between text-xs font-mono font-semibold text-slate-500 mb-2">
                <span>AI QUALIFIED LEADS</span>
                <Bot className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-1">14,280</div>
              <div className="text-[11px] sm:text-xs font-mono font-bold text-indigo-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" /> 98.4% Match Accuracy
              </div>
            </div>

            <div
              onClick={() => triggerToast('Blended CAC reduced from $68.00 down to $32.40 (-42%).')}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 hover:border-purple-400 hover:bg-purple-50/40 transition-all cursor-pointer shadow-sm group"
            >
              <div className="flex items-center justify-between text-xs font-mono font-semibold text-slate-500 mb-2">
                <span>BLENDED CAC</span>
                <Zap className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-1">$32.40</div>
              <div className="text-[11px] sm:text-xs font-mono font-bold text-emerald-600 flex items-center gap-1">
                <ArrowUpRight className="w-3.5 h-3.5" /> -42% CAC Reduction
              </div>
            </div>

          </div>

          {/* Interactive Chart & Data Stream */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-6 mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div className="text-xs font-mono font-bold text-slate-700 uppercase">
                REVENUE SCALE VS CAC OPTIMIZATION ({timeRange.toUpperCase()})
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-purple-700 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span> Revenue Trend
                </span>
                <span className="flex items-center gap-1.5 text-indigo-600 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span> AI Optimization Threshold
                </span>
              </div>
            </div>

            {/* SVG Interactive Chart */}
            <div className="h-56 w-full relative flex items-end pt-6 overflow-x-auto">
              <svg className="w-full h-full overflow-visible min-w-[500px]" viewBox={`0 0 ${currentPoints.length * 50} 180`}>
                <defs>
                  <linearGradient id="purpleChartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                {[0, 45, 90, 135, 180].map((y, idx) => (
                  <line key={idx} x1="0" y1={y} x2={currentPoints.length * 50} y2={y} stroke="#E2E8F0" strokeDasharray="3 3" />
                ))}

                {/* Area fill under curve */}
                <path
                  d={`M 0 180 ${currentPoints.map((val, i) => `L ${i * 50 + 25} ${180 - (val / maxVal) * 140}`).join(' ')} L ${(currentPoints.length - 1) * 50 + 25} 180 Z`}
                  fill="url(#purpleChartGrad)"
                />

                {/* Curve Line */}
                <path
                  d={`M 25 ${180 - (currentPoints[0] / maxVal) * 140} ${currentPoints.map((val, i) => `L ${i * 50 + 25} ${180 - (val / maxVal) * 140}`).join(' ')}`}
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data Nodes */}
                {currentPoints.map((val, i) => {
                  const cx = i * 50 + 25;
                  const cy = 180 - (val / maxVal) * 140;
                  const formattedVal = (val * 1200).toLocaleString();
                  return (
                    <g
                      key={i}
                      className="cursor-pointer group/node"
                      onClick={() => triggerToast(`Node #${i + 1}: Revenue $${formattedVal} recorded.`)}
                      onMouseEnter={() => setHoveredDataPoint(i)}
                      onMouseLeave={() => setHoveredDataPoint(null)}
                    >
                      <circle cx={cx} cy={cy} r="6" fill="#8B5CF6" stroke="#FFFFFF" strokeWidth="2.5" className="group-hover/node:r-8 transition-all" />
                      {hoveredDataPoint === i && (
                        <g>
                          <rect x={cx - 45} y={cy - 35} width="90" height="26" rx="6" fill="#1E1B4B" />
                          <text x={cx} y={cy - 18} fill="#FFFFFF" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">
                            ${formattedVal}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* AI Automated Insight Discovery Engine (4 Insight Cards with FULLY WORKING Action Buttons) */}
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <h4 className="text-xl font-bold text-slate-900 font-heading">AI-Discovered Campaign Insights</h4>
              </div>
              <span className="text-xs font-mono font-bold text-purple-700 bg-purple-100/70 border border-purple-200 px-3 py-1 rounded-full w-fit">
                4 AUTOMATED PATTERNS FOUND
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {sampleInsights.map((insight) => {
                const isExecuted = executedActions[insight.id];
                const isLoading = executingId === insight.id;

                return (
                  <div 
                    key={insight.id}
                    className={`bg-white border rounded-2xl p-5 sm:p-6 shadow-sm transition-all flex flex-col justify-between ${
                      isExecuted
                        ? 'border-emerald-400 bg-emerald-50/20'
                        : 'border-slate-200/90 hover:border-purple-400 hover:shadow-md'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-lg">
                          {insight.channel}
                        </span>
                        <span className="text-xs font-mono font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                          {insight.impact}
                        </span>
                      </div>

                      <h5 className="text-base font-bold text-slate-900 mb-2 font-heading">{insight.title}</h5>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                        {insight.description}
                      </p>
                    </div>

                    {/* Interactive Action Execution Button */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-500 font-semibold">AI Confidence: <strong className="text-purple-700">{insight.confidence}%</strong></span>
                      
                      <button
                        onClick={() => handleExecuteInsight(insight)}
                        disabled={isExecuted || isLoading}
                        className={`font-bold flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                          isExecuted
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 font-extrabold'
                            : isLoading
                            ? 'bg-purple-100 text-purple-700 opacity-70'
                            : 'bg-purple-600 text-white hover:bg-purple-700 shadow-sm hover:scale-105 active:scale-95'
                        }`}
                      >
                        {isExecuted ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Executed</span>
                          </>
                        ) : isLoading ? (
                          <>
                            <RefreshCw className="w-3.5 h-3.5 animate-spin text-purple-700" />
                            <span>Deploying...</span>
                          </>
                        ) : (
                          <>
                            <span>{insight.actionText}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                          </>
                        )}
                      </button>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive "Ask AI Insights" Query Assistant */}
          <div className="p-5 sm:p-6 rounded-2xl bg-purple-50 border border-purple-200/80">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-900 uppercase">
                <Search className="w-4 h-4 text-purple-700" />
                INTERACTIVE DATA QUERY PROMPTS
              </div>
              <span className="text-[11px] font-mono text-purple-700 font-semibold">CLICK PRESET OR TYPE CUSTOM QUERY</span>
            </div>

            {/* Presets */}
            <div className="flex flex-wrap gap-2 mb-4">
              {sampleQueries.map((query, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveQuery(query);
                    triggerToast(`Executed query: "${query}"`);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all border cursor-pointer ${
                    activeQuery === query
                      ? 'bg-purple-700 text-white border-purple-700 shadow-sm scale-105'
                      : 'bg-white text-slate-700 border-purple-200 hover:bg-purple-100/70 hover:border-purple-300'
                  }`}
                >
                  {query}
                </button>
              ))}
            </div>

            {/* Custom Query Search Form */}
            <form onSubmit={handleCustomQuerySubmit} className="flex gap-2 mb-4">
              <input
                type="text"
                value={customQueryInput}
                onChange={(e) => setCustomQueryInput(e.target.value)}
                placeholder="Ask custom AI query (e.g. 'Show top converting landing page')..."
                className="flex-1 bg-white border border-purple-300 rounded-xl px-4 py-2 text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 shadow-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white text-xs font-mono font-bold rounded-xl transition-all shadow-sm cursor-pointer shrink-0"
              >
                Analyze
              </button>
            </form>

            {/* AI Analysis Result Panel */}
            {activeQuery && (
              <motion.div 
                key={activeQuery}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-white border border-purple-300 text-xs font-mono text-slate-800 flex items-start gap-3 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <strong className="text-purple-900">AI ANALYSIS FOR &quot;{activeQuery.toUpperCase()}&quot;:</strong>
                    <span className="text-[9.5px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      98.6% CONFIDENCE
                    </span>
                  </div>
                  <p className="text-slate-600 mt-1.5 leading-relaxed font-normal text-xs sm:text-sm">
                    Campaign data shows optimal performance efficiency when ad creative variations are refreshed every 5.2 days. Executing this recommendation will yield an estimated +18.4% additional conversion volume across high-intent channels.
                  </p>
                  
                  <div className="mt-3 pt-3 border-t border-purple-100 flex items-center justify-between">
                    <span className="text-[10px] text-slate-500">Telemetry Engine v2.4 Active</span>
                    <a
                      href={CALENDLY_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-700 hover:text-purple-900"
                    >
                      <span>Deploy to your revenue stack</span>
                      <ArrowRight className="w-3 h-3 text-purple-700" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
