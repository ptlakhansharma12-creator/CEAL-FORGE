import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Cpu, Fingerprint, Network, Sparkles } from 'lucide-react';

export function AiAdvantage() {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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

  return (
    <section id="ai-advantage" className="py-24 md:py-36 relative overflow-hidden bg-white text-slate-900 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 relative"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={ref}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 blur-3xl -z-10 rounded-full"></div>
            
            {/* 3D Interactive Tech Visual */}
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative aspect-square rounded-full border border-slate-200 bg-slate-50 backdrop-blur-xl flex items-center justify-center shadow-xl cursor-crosshair max-w-md mx-auto"
            >
              {/* Outer Animated 3D Ring */}
              <motion.div 
                animate={{ rotateZ: 360, rotateX: [20, -20, 20], rotateY: [-20, 20, -20] }} 
                transition={{ rotateZ: { duration: 40, repeat: Infinity, ease: "linear" }, rotateX: { duration: 15, repeat: Infinity, ease: "easeInOut" }, rotateY: { duration: 15, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute w-[90%] h-[90%] rounded-full border border-blue-500/40 border-dashed"
                style={{ transformStyle: "preserve-3d", transform: "translateZ(40px)" }}
              />

              {/* Middle Animated 3D Ring */}
              <motion.div 
                animate={{ rotateZ: -360, rotateX: [-15, 15, -15], rotateY: [15, -15, 15] }} 
                transition={{ rotateZ: { duration: 30, repeat: Infinity, ease: "linear" }, rotateX: { duration: 12, repeat: Infinity, ease: "easeInOut" }, rotateY: { duration: 12, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute w-[70%] h-[70%] rounded-full border-2 border-indigo-400/40"
                style={{ transformStyle: "preserve-3d", transform: "translateZ(60px)" }}
              />
              
              {/* Inner Glowing Core */}
              <motion.div 
                style={{ transform: "translateZ(100px)", transformStyle: "preserve-3d" }}
                className="relative w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.5)]"
              >
                <motion.div 
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center shadow-lg"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <span className="text-cyan-400 font-extrabold text-2xl font-heading tracking-tight">AI</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-4 inline-flex items-center gap-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              OUR PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight font-heading">
              Marketing has evolved. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600">Cael Forge builds what’s next.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed font-normal">
              The marketing landscape has fundamentally shifted. Growth is no longer about isolated tactics or vanity metrics.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="w-3.5 h-3.5 rounded-full bg-blue-600 shadow-sm"></div>
                  <div className="w-0.5 h-full bg-slate-200 mx-auto mt-2"></div>
                </div>
                <div className="pb-2">
                  <h4 className="text-base font-bold text-slate-900 mb-1 font-heading">Market Dynamics Have Shifted</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Ad platforms are more competitive. Generic content is everywhere. Attention is harder to capture and hold.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="w-3.5 h-3.5 rounded-full bg-indigo-600 shadow-sm"></div>
                  <div className="w-0.5 h-full bg-slate-200 mx-auto mt-2"></div>
                </div>
                <div className="pb-2">
                  <h4 className="text-base font-bold text-slate-900 mb-1 font-heading">Integrated Growth Advantage</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    The businesses that lead the next decade will not simply be the ones that spend the most.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="w-3.5 h-3.5 rounded-full bg-cyan-600 shadow-sm"></div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1 font-heading">Seamless Revenue Conversion</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    They will be the ones with integrated, intelligent systems that turn interest into revenue seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
