import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { ShinyText } from './ShinyText';
import { Logo } from './Logo';

interface WelcomeIntroProps {
  onComplete: () => void;
}

export function WelcomeIntro({ onComplete }: WelcomeIntroProps) {
  const [isDismissing, setIsDismissing] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(10);
  const touchStartY = useRef<number>(0);

  const handleSkip = () => {
    if (isDismissing) return;
    setIsDismissing(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  // Automatic 10-second timer & Scroll-triggered website entrance
  useEffect(() => {
    // 1. Second Countdown Ticker
    const countdownInterval = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // 2. Auto-dismiss after 10 seconds (10000ms)
    const autoDismissTimeout = setTimeout(() => {
      handleSkip();
    }, 10000);

    // 3. Scroll Wheel Listener: Scroll down triggers website entrance
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 15) {
        handleSkip();
      }
    };

    // 4. Touch Swipe Listener for Mobile
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchEndY = e.touches[0].clientY;
      if (touchStartY.current - touchEndY > 30) {
        handleSkip();
      }
    };

    // 5. Keydown Listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        handleSkip();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(countdownInterval);
      clearTimeout(autoDismissTimeout);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDismissing]);

  const CALENDLY_LINK = "https://calendly.com/harshvardhansharma676/discovery-call";

  return (
    <div
      className={`fixed inset-0 z-[9999] transition-all duration-700 ease-in-out ${
        isDismissing ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      } relative min-h-screen overflow-hidden bg-[#f0f0ee] select-none`}
    >
      {/* Fullscreen autoplaying, muted, looping, playsInline background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
          type="video/mp4"
        />
      </video>

      {/* Foreground Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        
        {/* Top Floating Action Bar */}
        <div className="flex items-center justify-between pt-6 px-6 sm:px-12 md:px-20 lg:px-28">
          <div className="bg-white/90 border border-white/80 px-4 py-1.5 rounded-full shadow-md backdrop-blur-md">
            <span className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-wider">
              GROWTH SYSTEMS THAT SCALE
            </span>
          </div>

          <button
            onClick={handleSkip}
            className="inline-flex items-center gap-2 px-5 py-2 text-[13px] font-medium text-blue-600 bg-white/90 border border-blue-300 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-md cursor-pointer"
          >
            <span>Skip Intro ({secondsRemaining}s)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Hero Content (Bottom-Left Aligned Card with ONLY ONE Official Cael Forge Logo) */}
        <div className="flex-1 flex items-end pb-10 sm:pb-16 lg:pb-20 px-6 sm:px-12 md:px-20 lg:px-28">
          <div className="max-w-lg sm:max-w-xl bg-white/85 backdrop-blur-xl border border-white/60 p-6 sm:p-8 rounded-3xl shadow-2xl">
            
            {/* Exactly ONE Official Cael Forge Logo */}
            <div className="mb-4">
              <Logo size="lg" variant="purple" />
            </div>

            {/* 1. Badge Link */}
            <a
              href="#hero-section"
              onClick={handleSkip}
              className="inline-flex items-center gap-1.5 text-[11.5px] font-mono font-bold text-blue-600 hover:text-blue-700 transition-colors mb-3 group uppercase tracking-wider"
            >
              <span>CONNECTED GROWTH ENGINE</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>

            {/* 2. Headline <h1> with Animated Text "GROWTH SYSTEMS THAT SCALE" */}
            <h1 className="text-[1.5rem] sm:text-[2.0rem] leading-[1.15] font-extrabold text-gray-900 tracking-tight mb-3 font-heading uppercase">
              WE BUILD <br />
              <ShinyText text="GROWTH SYSTEMS THAT SCALE" speed={2.5} className="font-extrabold" />
            </h1>

            {/* 3. Subtext <p> */}
            <p className="text-[13px] sm:text-[14px] text-gray-600 font-normal leading-relaxed mb-4">
              Performance Marketing • AI Automation • Social Media • Personal Branding into one connected engine.
            </p>

            {/* 4. CTA Anchors */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-blue-600 border border-blue-400 rounded-full px-5 py-2.5 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 group cursor-pointer shadow-sm"
              >
                <span>Book Strategy Call</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </a>

              <button
                onClick={handleSkip}
                className="inline-flex items-center gap-2 text-[13px] font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-full px-5 py-2.5 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
              >
                <span>Scroll / Click to Enter</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
              </button>
            </div>

          </div>
        </div>

        {/* Bottom 10-Second Countdown Progress Bar */}
        <div className="relative z-20 px-6 pb-6 flex flex-col items-center gap-2">
          <div className="text-[11px] font-mono font-bold text-gray-800 flex items-center gap-2 bg-white/90 border border-white/60 px-4 py-1 rounded-full shadow-md">
            <ChevronDown className="w-3.5 h-3.5 text-blue-600 animate-bounce" />
            <span>SCROLL OR WAIT ({secondsRemaining}s) TO ENTER WEBSITE</span>
          </div>

          <div className="w-full max-w-md h-1.5 bg-gray-300/80 rounded-full overflow-hidden border border-white/40">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 rounded-full shadow-sm"
              style={{
                width: '100%',
                animation: 'shrinkProgress 10s linear forwards',
              }}
            />
          </div>
        </div>

      </div>

      <style>{`
        @keyframes shrinkProgress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
}
