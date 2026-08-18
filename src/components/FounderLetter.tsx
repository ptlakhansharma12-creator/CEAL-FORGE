import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MailOpen, Sparkles, Feather } from 'lucide-react';

export function FounderLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="founder-letter" className="py-24 sm:py-36 bg-[#070A12] text-white relative overflow-hidden select-none border-y border-slate-800/80">
      
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest px-4 py-1.5 rounded-full bg-amber-950/70 border border-amber-800/80 inline-flex items-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Feather className="w-3.5 h-3.5 text-amber-400" />
            A LETTER FROM THE FOUNDER
          </span>
        </motion.div>

        {/* Interactive Animated Envelope & Letter Container */}
        <motion.div
          initial="closed"
          whileInView="open"
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => setIsOpen(true)}
          className="relative w-full"
        >
          
          {/* Closed Envelope Visual Indicator (Fades out when letter unfolds) */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5 }}
                onClick={() => setIsOpen(true)}
                className="mx-auto max-w-sm bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/40 rounded-3xl p-8 text-center cursor-pointer shadow-[0_20px_50px_rgba(245,158,11,0.15)] hover:border-amber-400 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber-950/80 border border-amber-700/80 flex items-center justify-center text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white font-heading">A Personal Note</h4>
                <p className="text-xs text-slate-400 mt-1 font-mono">Click to open letter from Harshvardhan</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Paper-Styled Letter Card (Expands full-width with authentic paper styling) */}
          <motion.div
            variants={{
              closed: { opacity: 0, y: 40, scale: 0.95 },
              open: { opacity: 1, y: 0, scale: 1 }
            }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-[#FAF7F2] text-slate-800 rounded-3xl p-7 sm:p-12 lg:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.5)] border border-[#E8E2D8] relative overflow-hidden"
            style={{
              backgroundImage: 'radial-gradient(#E5DFD5 0.75px, transparent 0.75px)',
              backgroundSize: '24px 24px'
            }}
          >
            
            {/* Subtle Paper Watermark & Header Stamp */}
            <div className="flex items-center justify-between pb-8 mb-8 border-b border-[#E2DAD0]/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600/80" />
                <span className="text-xs font-mono font-bold text-[#786C5E] uppercase tracking-widest">CAEL FORGE • FOUNDER NOTE</span>
              </div>
              <span className="text-xs font-mono text-[#8C8070] italic">Personal Message</span>
            </div>

            {/* Letter Content Body */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.3
                  }
                }
              }}
              className="space-y-6 text-base sm:text-lg text-[#2C261F] leading-relaxed font-serif font-normal"
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="text-xl sm:text-2xl font-semibold text-[#1A1510] font-sans"
              >
                Hi, I&apos;m Harshvardhan.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                I&apos;ve always lived at the intersection of two obsessions: how technology actually works under the hood, and how businesses actually grow in the real world, not in theory, not in a case study PDF, but in the messy, specific reality of a founder trying to get their next ten customers.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                Somewhere along the way, I noticed a pattern that bothered me. Most businesses weren&apos;t failing because they lacked ambition or effort. They were failing because their growth was fragmented, an ad campaign here, a social media page there, a CRM nobody updated, all disconnected, none of it talking to each other. I didn&apos;t want to be another person selling one more disconnected service into that mess. I wanted to build the thing that connects it.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="font-semibold text-[#1A1510] font-sans text-lg sm:text-xl"
              >
                That&apos;s why Cael Forge exists.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                Over the years, I&apos;ve had the chance to work with businesses across the US, UK, UAE, and several European markets, learning firsthand how differently growth gets engineered across mature economies versus emerging ones, and how much of what works abroad hasn&apos;t fully arrived in India yet.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                And that&apos;s where my focus is now. The world is moving toward AI-powered growth faster than most businesses, and most people, are ready for. I don&apos;t think that gap should exist in India. I started Cael Forge to help Indian businesses build the same AI-led growth systems the world&apos;s most advanced companies already run on, and just as importantly, to help Indian youth get AI-ready before this shift stops being optional.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="italic text-[#4A4035]"
              >
                This isn&apos;t a pitch. It&apos;s the reason I show up to work on this every day.
              </motion.p>

              {/* Signature Block */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                }}
                className="pt-8 border-t border-[#E2DAD0] mt-10 font-sans"
              >
                {/* Hand-drawn / Script Styled Signature */}
                <div className="relative inline-block mb-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#1A1510] tracking-tight font-serif italic">
                    — Harshvardhan Bharadwaj
                  </span>
                  
                  {/* Decorative Hand-drawn Underline SVG */}
                  <svg className="w-full h-3 text-amber-700/60 mt-0.5" viewBox="0 0 240 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                      d="M 5 8 Q 80 2, 160 7 T 235 5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.6 }}
                    />
                  </svg>
                </div>

                <p className="text-xs sm:text-sm text-[#665B4E] font-medium font-sans">
                  Founder & CEO, Cael Forge
                </p>
              </motion.div>

            </motion.div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
