import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Play, Calculator, Briefcase, DollarSign, TrendingUp, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';
import { Logo } from './Logo';

interface NavbarProps {
  onReplayIntro?: () => void;
}

export function Navbar({ onReplayIntro }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<'roi' | 'careers' | null>(null);

  // ROI Calculator Interactive State
  const [monthlySpend, setMonthlySpend] = useState<number>(25000);
  const [targetRoas, setTargetRoas] = useState<number>(5.5);

  const projectedRevenue = monthlySpend * targetRoas;
  const annualScale = projectedRevenue * 12;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CALENDLY_LINK = "https://calendly.com/harshvardhansharma676/discovery-call";

  const navLinks = [
    { name: 'Home', href: '#hero-section' },
    { name: 'About us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#cases' },
    { name: 'ROI Calculator', action: () => setActiveModal('roi') },
    { name: 'Careers', action: () => setActiveModal('careers') },
    { name: 'Contact us', href: '#contact' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out',
          scrolled
            ? 'py-2.5 bg-[#070A12]/95 backdrop-blur-2xl border-b border-slate-800/90 shadow-2xl'
            : 'py-3.5 bg-[#070A12]/80 backdrop-blur-xl border-b border-white/10'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            
            {/* Logo - Perfectly Centered & Compact */}
            <a href="#hero-section" className="flex items-center h-full py-0.5 group">
              <Logo size="md" variant="light" />
            </a>

            {/* Desktop Navigation Links Pill - Ultra Compact & Crystal Clear */}
            <nav className="hidden xl:flex items-center gap-5 bg-slate-900/90 border border-slate-800/90 px-5 py-1.5 rounded-full backdrop-blur-xl shadow-lg h-9">
              {navLinks.map((link) => (
                link.action ? (
                  <button
                    key={link.name}
                    onClick={link.action}
                    className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 hover:text-purple-400 transition-colors hover:scale-105 transform cursor-pointer flex items-center gap-1 leading-none"
                  >
                    {link.name === 'ROI Calculator' && <Calculator className="w-3 h-3 text-purple-400" />}
                    {link.name === 'Careers' && <Briefcase className="w-3 h-3 text-purple-400" />}
                    {link.name}
                  </button>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 hover:text-purple-400 transition-colors hover:scale-105 transform inline-block leading-none"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </nav>

            {/* Right Action Buttons - Perfectly Aligned */}
            <div className="hidden lg:flex items-center gap-2.5 h-9">
              {onReplayIntro && (
                <button
                  onClick={onReplayIntro}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-purple-300 bg-purple-950/70 border border-purple-800/70 rounded-full hover:bg-purple-900/90 transition-all shadow-sm cursor-pointer h-full"
                  title="Replay Welcome Intro Animation"
                >
                  <Play className="w-3 h-3 fill-purple-400 text-purple-400" />
                  <span>Intro</span>
                </button>
              )}

              {/* Calendly Book Strategy Call Button */}
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4.5 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-950 bg-white hover:bg-slate-100 rounded-full transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-[1.03] active:scale-95 group font-heading h-full"
              >
                <span>Book a Call</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform text-slate-950" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="xl:hidden p-1.5 text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-[#070A12]/98 border-b border-slate-800 shadow-2xl backdrop-blur-2xl xl:hidden z-50 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex flex-col px-6 py-6 gap-3">
                {navLinks.map((link) => (
                  link.action ? (
                    <button
                      key={link.name}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        link.action!();
                      }}
                      className="text-sm font-bold uppercase tracking-wider text-slate-200 hover:text-cyan-400 text-left flex items-center gap-2 py-2 border-b border-slate-800/60"
                    >
                      {link.name === 'ROI Calculator' && <Calculator className="w-4 h-4 text-purple-400" />}
                      {link.name === 'Careers' && <Briefcase className="w-4 h-4 text-purple-400" />}
                      {link.name}
                    </button>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-sm font-bold uppercase tracking-wider text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/60"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )
                ))}

                {onReplayIntro && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onReplayIntro();
                    }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono font-bold uppercase tracking-wider text-purple-300 bg-purple-950/80 border border-purple-800 rounded-xl mt-2"
                  >
                    <Play className="w-3.5 h-3.5 fill-purple-400 text-purple-400" />
                    Replay Welcome Intro
                  </button>
                )}

                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-white hover:bg-slate-100 rounded-xl shadow-lg mt-1 font-heading"
                >
                  <span>Book a Discovery Call</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Interactive ROI Calculator & Careers Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl overflow-hidden text-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600"></div>

              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* ROI CALCULATOR MODAL CONTENT */}
              {activeModal === 'roi' && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600">
                      <Calculator className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold uppercase text-purple-700 tracking-wider">INTERACTIVE REVENUE MODELING</span>
                      <h3 className="text-2xl font-bold text-slate-900 font-heading">Cael Forge ROI Calculator</h3>
                    </div>
                  </div>

                  <div className="space-y-6 mb-8">
                    {/* Monthly Spend Slider */}
                    <div>
                      <div className="flex justify-between items-center text-sm font-semibold mb-2">
                        <label className="text-slate-700">Monthly Ad Spend ($USD)</label>
                        <span className="font-mono font-extrabold text-purple-700 text-lg">${monthlySpend.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="5000"
                        max="200000"
                        step="5000"
                        value={monthlySpend}
                        onChange={(e) => setMonthlySpend(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                      />
                    </div>

                    {/* Target ROAS Slider */}
                    <div>
                      <div className="flex justify-between items-center text-sm font-semibold mb-2">
                        <label className="text-slate-700">Target Blended ROAS</label>
                        <span className="font-mono font-extrabold text-purple-700 text-lg">{targetRoas}x</span>
                      </div>
                      <input
                        type="range"
                        min="3.0"
                        max="10.0"
                        step="0.5"
                        value={targetRoas}
                        onChange={(e) => setTargetRoas(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                      />
                    </div>

                    {/* Results Box */}
                    <div className="grid sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-purple-50 border border-purple-200">
                      <div>
                        <div className="text-xs font-mono font-bold text-slate-500 uppercase">Est. Monthly Revenue</div>
                        <div className="text-2xl font-extrabold text-slate-900 font-heading">${projectedRevenue.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-slate-500 uppercase">Est. Annual Revenue Scale</div>
                        <div className="text-2xl font-extrabold text-purple-700 font-heading">${annualScale.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-purple-600" /> Based on 340+ Client Campaign Audits
                    </span>
                    <a
                      href={CALENDLY_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setActiveModal(null)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-all shadow-md"
                    >
                      Book ROI Strategy Call
                      <ArrowRight className="w-4 h-4 text-purple-200" />
                    </a>
                  </div>
                </div>
              )}

              {/* CAREERS MODAL CONTENT */}
              {activeModal === 'careers' && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold uppercase text-purple-700 tracking-wider">JOIN CAEL FORGE</span>
                      <h3 className="text-2xl font-bold text-slate-900 font-heading">Careers & Talent</h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    We are hiring world-class media buyers, AI prompt engineers, full-stack WebGL developers, and growth strategists to build the next generation of AI marketing infrastructure.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                      <div>
                        <div className="text-sm font-bold text-slate-900 font-heading">Senior AI Media Buyer & Growth Lead</div>
                        <div className="text-xs text-slate-500 font-mono">Full-Time · Remote / Faridabad HQ</div>
                      </div>
                      <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="text-xs font-mono font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full hover:bg-purple-200">Apply Now</a>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                      <div>
                        <div className="text-sm font-bold text-slate-900 font-heading">Autonomous AI Agent Engineer</div>
                        <div className="text-xs text-slate-500 font-mono">Full-Time · Python & LLMs</div>
                      </div>
                      <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="text-xs font-mono font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full hover:bg-purple-200">Apply Now</a>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                      <div>
                        <div className="text-sm font-bold text-slate-900 font-heading">3D WebGL / React Developer</div>
                        <div className="text-xs text-slate-500 font-mono">Full-Time · Three.js & Vite</div>
                      </div>
                      <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="text-xs font-mono font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full hover:bg-purple-200">Apply Now</a>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <span className="text-xs font-mono text-slate-500">Send resume to: <strong>hello@caelforge.com</strong></span>
                    <button
                      onClick={() => setActiveModal(null)}
                      className="px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
