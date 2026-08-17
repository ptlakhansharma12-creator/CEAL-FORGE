import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WelcomeIntro } from './components/WelcomeIntro';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Logos } from './components/Logos';
import { About } from './components/About';
import { Services } from './components/Services';
import { DataAnalyticsDashboard } from './components/DataAnalyticsDashboard';
import { PersonalBrandingShowcase } from './components/PersonalBrandingShowcase';
import { AiAdvantage } from './components/AiAdvantage';
import { FeaturesGrid } from './components/FeaturesGrid';
import { Process } from './components/Process';
import { FaqAndCases } from './components/FaqAndCases';
import { ContactAndFooter } from './components/ContactAndFooter';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-purple-600 selection:text-white">
      {/* Welcome Animation Video Overlay */}
      <AnimatePresence>
        {showIntro && <WelcomeIntro onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {/* Main Website Experience */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ScrollProgress />
        <Navbar onReplayIntro={handleReplayIntro} />
        <main>
          <Hero />
          <Logos />
          <About />
          <Services />
          <DataAnalyticsDashboard />
          <PersonalBrandingShowcase />
          <AiAdvantage />
          <FeaturesGrid />
          <Process />
          <FaqAndCases />
          <ContactAndFooter />
        </main>
      </motion.div>
    </div>
  );
}
