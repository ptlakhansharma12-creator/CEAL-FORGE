import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, X, Orbit, ShieldCheck, Zap, Bot, Laptop, Target, TrendingUp, Cpu, BarChart3, Radio, Activity, Eye, CheckCircle2 } from 'lucide-react';

interface ServicePlanet {
  id: string;
  name: string;
  category: string;
  orbitRadius: number;
  speed: number;
  size: number;
  color: number;
  emissive: number;
  hexColor: string;
  hasRing?: boolean;
  desc: string;
  stat: string;
  liveMetric: string;
  icon: React.ReactNode;
}

const servicePlanets: ServicePlanet[] = [
  {
    id: 'performance-marketing',
    name: 'Performance Marketing',
    category: 'Paid Media & ROAS',
    orbitRadius: 3.8,
    speed: 0.75,
    size: 0.44,
    color: 0xa855f7,
    emissive: 0x7e22ce,
    hexColor: '#a855f7',
    stat: '4.8x Avg ROAS',
    liveMetric: '$420K Monthly Ad Spend Managed',
    desc: 'Precision Meta, Google, & Programmatic media buying driven by predictive attribution engines.',
    icon: <TrendingUp className="w-5 h-5 text-purple-400" />
  },
  {
    id: 'ai-data-analytics',
    name: 'AI Data Analytics',
    category: 'Insight Engine',
    orbitRadius: 5.4,
    speed: 0.58,
    size: 0.50,
    color: 0xc084fc,
    emissive: 0x9333ea,
    hexColor: '#c084fc',
    stat: 'Automated Anomalies',
    liveMetric: '14,280 Webhook Signals Parsed',
    desc: 'Automated pattern discovery, campaign anomaly detection, and predictive LTV cohort modeling.',
    icon: <BarChart3 className="w-5 h-5 text-violet-300" />
  },
  {
    id: 'ai-automations',
    name: 'AI Automations',
    category: 'Process Orchestration',
    orbitRadius: 7.0,
    speed: 0.44,
    size: 0.54,
    color: 0x38bdf8,
    emissive: 0x0284c7,
    hexColor: '#38bdf8',
    stat: '85% Cost Reduction',
    liveMetric: '0ms Latency CRM Pipeline',
    desc: 'Autonomous process workflows that eliminate operational drag and accelerate lead response times.',
    icon: <Cpu className="w-5 h-5 text-sky-400" />
  },
  {
    id: 'ai-agents',
    name: 'AI Sales Agents',
    category: 'Conversational Reps',
    orbitRadius: 8.6,
    speed: 0.34,
    size: 0.60,
    color: 0x818cf8,
    emissive: 0x4f46e5,
    hexColor: '#818cf8',
    hasRing: true,
    stat: '24/7 Instant Response',
    liveMetric: '< 3.8s Lead Qualification',
    desc: 'Custom conversational AI reps that qualify inbound prospects and book strategy calls 24/7.',
    icon: <Bot className="w-5 h-5 text-indigo-300" />
  },
  {
    id: 'website-development',
    name: 'WebGL Web Engines',
    category: '60FPS Web Applications',
    orbitRadius: 10.2,
    speed: 0.26,
    size: 0.52,
    color: 0x34d399,
    emissive: 0x059669,
    hexColor: '#34d399',
    hasRing: true,
    stat: '99+ PageSpeed Rating',
    liveMetric: '60FPS Smooth Rendering',
    desc: 'Bespoke, high-resolution WebGL web applications engineered for elite conversions.',
    icon: <Laptop className="w-5 h-5 text-emerald-400" />
  },
  {
    id: 'growth-systems',
    name: 'Revenue Architecture',
    category: 'End-to-End Scale',
    orbitRadius: 11.8,
    speed: 0.20,
    size: 0.66,
    color: 0xf43f5e,
    emissive: 0xe11d48,
    hexColor: '#f43f5e',
    hasRing: true,
    stat: '348% Annual Scale',
    liveMetric: '100% Attribution Accuracy',
    desc: 'Integrated revenue growth architecture combining attribution analytics and retention loops.',
    icon: <Zap className="w-5 h-5 text-rose-400" />
  }
];

export function AiSolarSystem() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedPlanet, setSelectedPlanet] = useState<ServicePlanet | null>(null);
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);
  
  // Real-time 2D Projected Screen Coordinates for Floating HTML Labels
  const [planetScreenPositions, setPlanetScreenPositions] = useState<{ [key: string]: { x: number; y: number; visible: boolean } }>({});

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 650;

    // --- 1. Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070a12, 0.022);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 15, 19);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;
    container.appendChild(renderer.domElement);

    // --- 2. Lighting ---
    const ambientLight = new THREE.AmbientLight(0x1e1b4b, 2.2);
    scene.add(ambientLight);

    const sunLight = new THREE.PointLight(0xc084fc, 14, 50);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    const purpleFillLight = new THREE.DirectionalLight(0x8b5cf6, 3.0);
    purpleFillLight.position.set(10, 15, 10);
    scene.add(purpleFillLight);

    // --- 3. CENTRAL PURPLE AI SUN CORE ---
    const sunGroup = new THREE.Group();
    scene.add(sunGroup);

    const sunGeo = new THREE.IcosahedronGeometry(1.7, 3);
    const sunMat = new THREE.MeshStandardMaterial({
      color: 0xc084fc,
      emissive: 0x8b5cf6,
      emissiveIntensity: 3.5,
      roughness: 0.1,
      metalness: 0.8,
    });
    const sunMesh = new THREE.Mesh(sunGeo, sunMat);
    sunGroup.add(sunMesh);

    const coronaGeo = new THREE.IcosahedronGeometry(2.05, 2);
    const coronaMat = new THREE.MeshBasicMaterial({
      color: 0xf5d0fe,
      transparent: true,
      opacity: 0.5,
      wireframe: true,
    });
    const coronaMesh = new THREE.Mesh(coronaGeo, coronaMat);
    sunGroup.add(coronaMesh);

    const sunRingGeo = new THREE.TorusGeometry(2.6, 0.04, 16, 120);
    const sunRingMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.85,
    });
    const sunRing = new THREE.Mesh(sunRingGeo, sunRingMat);
    sunRing.rotation.x = Math.PI / 2.2;
    sunGroup.add(sunRing);

    // --- 4. REVOLVING PLANETS & ORBITAL RINGS ---
    const planetMeshes: { planet: ServicePlanet; mesh: THREE.Group; angle: number; labelMesh: THREE.Mesh }[] = [];

    servicePlanets.forEach((planetData, index) => {
      // Orbital Ring Track
      const orbitLineGeo = new THREE.TorusGeometry(planetData.orbitRadius, 0.025, 16, 140);
      const orbitLineMat = new THREE.MeshBasicMaterial({
        color: planetData.color,
        transparent: true,
        opacity: 0.45,
      });
      const orbitLine = new THREE.Mesh(orbitLineGeo, orbitLineMat);
      orbitLine.rotation.x = Math.PI / 2;
      scene.add(orbitLine);

      const planetGroup = new THREE.Group();

      const pGeo = new THREE.SphereGeometry(planetData.size, 32, 32);
      const pMat = new THREE.MeshStandardMaterial({
        color: planetData.color,
        emissive: planetData.emissive,
        emissiveIntensity: 1.1,
        metalness: 0.7,
        roughness: 0.15,
      });
      const pMesh = new THREE.Mesh(pGeo, pMat);
      planetGroup.add(pMesh);

      if (planetData.hasRing) {
        const ringGeo = new THREE.TorusGeometry(planetData.size * 1.75, 0.03, 16, 80);
        const ringMat = new THREE.MeshBasicMaterial({
          color: planetData.color,
          transparent: true,
          opacity: 0.8,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = Math.PI / 3;
        planetGroup.add(ringMesh);
      }

      // High-Resolution 3D Canvas Label Mesh
      const labelCanvas = document.createElement('canvas');
      labelCanvas.width = 512;
      labelCanvas.height = 128;
      const lCtx = labelCanvas.getContext('2d')!;

      // Background Box
      lCtx.fillStyle = 'rgba(12, 16, 28, 0.95)';
      lCtx.fillRect(0, 0, 512, 128);

      // Neon Border
      lCtx.strokeStyle = planetData.hexColor;
      lCtx.lineWidth = 6;
      lCtx.strokeRect(4, 4, 504, 120);

      // Bright Text
      lCtx.fillStyle = '#FFFFFF';
      lCtx.font = 'bold 32px "Space Grotesk", sans-serif';
      lCtx.textAlign = 'center';
      lCtx.textBaseline = 'middle';
      lCtx.shadowColor = planetData.hexColor;
      lCtx.shadowBlur = 12;
      lCtx.fillText(planetData.name.toUpperCase(), 256, 64);

      const labelTex = new THREE.CanvasTexture(labelCanvas);
      const labelMat = new THREE.MeshBasicMaterial({
        map: labelTex,
        transparent: true,
        opacity: 0.98,
        side: THREE.DoubleSide,
      });
      const labelGeo = new THREE.PlaneGeometry(3.0, 0.75);
      const labelMesh = new THREE.Mesh(labelGeo, labelMat);
      labelMesh.position.set(0, planetData.size + 0.8, 0);
      planetGroup.add(labelMesh);

      const initialAngle = (index / servicePlanets.length) * Math.PI * 2;
      planetGroup.position.x = Math.cos(initialAngle) * planetData.orbitRadius;
      planetGroup.position.z = Math.sin(initialAngle) * planetData.orbitRadius;

      scene.add(planetGroup);
      planetMeshes.push({ planet: planetData, mesh: planetGroup, angle: initialAngle, labelMesh });
    });

    // Space Particles (700+)
    const particlesCount = 700;
    const particlesGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 50;
      particlePositions[i + 1] = (Math.random() - 0.5) * 25;
      particlePositions[i + 2] = (Math.random() - 0.5) * 50;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xc084fc,
      size: 0.12,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const spaceParticles = new THREE.Points(particlesGeo, particleMat);
    scene.add(spaceParticles);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX = (e.clientX - cx) * 0.0003;
      mouseY = (e.clientY - cy) * 0.0003;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const handleContainerClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseVector.x = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
      mouseVector.y = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;

      raycaster.setFromCamera(mouseVector, camera);
      const meshesToTest = planetMeshes.map(pm => pm.mesh.children[0]);
      const intersects = raycaster.intersectObjects(meshesToTest);

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object;
        const found = planetMeshes.find(pm => pm.mesh.children[0] === hitMesh);
        if (found) {
          setSelectedPlanet(found.planet);
        }
      }
    };
    container.addEventListener('click', handleContainerClick);

    // Temp vector for 2D screen coordinate projections
    const tempVec = new THREE.Vector3();

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      sunMesh.rotation.y = elapsedTime * 0.5;
      coronaMesh.rotation.y = -elapsedTime * 0.4;
      coronaMesh.rotation.z = elapsedTime * 0.3;
      sunRing.rotation.z = elapsedTime * 0.6;

      const scalePulse = 1 + Math.sin(elapsedTime * 3.5) * 0.08;
      coronaMesh.scale.set(scalePulse, scalePulse, scalePulse);

      const newPositions: { [key: string]: { x: number; y: number; visible: boolean } } = {};

      planetMeshes.forEach(pm => {
        pm.angle += delta * pm.planet.speed * 0.5;
        pm.mesh.position.x = Math.cos(pm.angle) * pm.planet.orbitRadius;
        pm.mesh.position.z = Math.sin(pm.angle) * pm.planet.orbitRadius;

        pm.mesh.children[0].rotation.y += delta * 1.5;
        pm.labelMesh.quaternion.copy(camera.quaternion);

        // Project 3D planet position to 2D screen coordinates
        pm.mesh.getWorldPosition(tempVec);
        tempVec.y += pm.planet.size + 0.6;
        tempVec.project(camera);

        const isVisible = tempVec.z < 1;
        const rawX = (tempVec.x * 0.5 + 0.5) * width;
        const rawY = (-tempVec.y * 0.5 + 0.5) * height;

        // Clamp coordinates for flawless mobile responsiveness
        const x = Math.max(70, Math.min(width - 70, rawX));
        const y = Math.max(45, Math.min(height - 35, rawY));

        newPositions[pm.planet.id] = { x, y, visible: isVisible };
      });

      setPlanetScreenPositions(newPositions);

      spaceParticles.rotation.y = elapsedTime * 0.04;

      scene.rotation.y = mouseX * 0.7;
      scene.rotation.x = mouseY * 0.4;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('click', handleContainerClick);

      sunGeo.dispose();
      sunMat.dispose();
      coronaGeo.dispose();
      coronaMat.dispose();
      sunRingGeo.dispose();
      sunRingMat.dispose();
      particlesGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section id="ai-solar-system" className="py-24 md:py-36 bg-[#070A12] relative overflow-hidden border-b border-slate-800 text-white select-none">
      
      {/* Ambient Radial Lighting Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-600/15 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest px-4 py-1.5 rounded-full bg-slate-900 border border-purple-500/60 mb-4 inline-flex items-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <Orbit className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: '8s' }} />
            THE CAEL FORGE AI ECOSYSTEM
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight font-heading leading-tight drop-shadow-[0_4px_25px_rgba(255,255,255,0.2)]">
            The 3D Solar System of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300 font-extrabold">
              Autonomous Growth Services
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
            At the center of our architecture burns the <strong className="text-purple-300">Cael Forge AI Core (The Purple Sun)</strong>, radiating energy into 6 revolving Service Planets that orbit in real-time.
          </p>
        </motion.div>

        {/* 3D WebGL Solar System Canvas Window */}
        <div className="relative w-full h-[560px] sm:h-[680px] rounded-3xl border border-purple-500/40 bg-[#080B15] backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden">
          
          <div ref={mountRef} className="w-full h-full cursor-pointer" />

          {/* REAL-TIME 2D PROJECTED FLOATING HIGH-CONTRAST PLANET LABELS */}
          {servicePlanets.map((planet) => {
            const pos = planetScreenPositions[planet.id];
            if (!pos || !pos.visible) return null;

            const isSelected = selectedPlanet?.id === planet.id;
            const isHovered = hoveredPlanet === planet.id;

            return (
              <div
                key={planet.id}
                style={{
                  position: 'absolute',
                  left: `${pos.x}px`,
                  top: `${pos.y}px`,
                  transform: 'translate(-50%, -100%)',
                  pointerEvents: 'auto',
                }}
                onClick={() => setSelectedPlanet(planet)}
                onMouseEnter={() => setHoveredPlanet(planet.id)}
                onMouseLeave={() => setHoveredPlanet(null)}
                className={`transition-all duration-200 cursor-pointer z-30 ${
                  isSelected || isHovered ? 'scale-110' : 'scale-100'
                }`}
              >
                <div
                  className="px-3.5 py-1.5 rounded-full bg-[#0C101C]/95 border backdrop-blur-xl flex items-center gap-2 shadow-2xl transition-all"
                  style={{
                    borderColor: planet.hexColor,
                    boxShadow: `0 0 20px ${planet.hexColor}60`,
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full animate-ping"
                    style={{ backgroundColor: planet.hexColor }}
                  />
                  <span className="text-xs font-mono font-extrabold text-white tracking-wide uppercase whitespace-nowrap">
                    {planet.name}
                  </span>
                  <span
                    className="text-[9.5px] font-mono font-bold px-1.5 py-0.5 rounded text-white"
                    style={{ backgroundColor: `${planet.hexColor}40` }}
                  >
                    {planet.stat}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Central Sun Overlay Label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center z-10">
            <div className="text-[10px] font-mono font-extrabold text-purple-200 uppercase tracking-[0.3em] bg-purple-950/80 px-4 py-1.5 rounded-full border border-purple-500/80 shadow-[0_0_30px_rgba(192,132,252,0.8)] backdrop-blur-md">
              AI SUN CORE
            </div>
          </div>

          {/* Top Real-Time Status Telemetry Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
            <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg">
              <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono font-extrabold text-emerald-300 uppercase">
                6 REVOLVING SERVICE PLANETS ACTIVE
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-slate-900/90 border border-slate-700 px-3.5 py-1.5 rounded-full backdrop-blur-md text-[10px] font-mono text-purple-300 font-bold shadow-lg">
              <Activity className="w-3.5 h-3.5 text-purple-400" />
              <span>ORBITAL SPEED: 60FPS</span>
            </div>
          </div>

          {/* Helper Hint Banner */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none text-center z-20">
            <span className="text-xs font-mono font-bold text-purple-200 bg-slate-900/90 px-5 py-2 rounded-full border border-purple-500/60 flex items-center gap-2 backdrop-blur-md shadow-2xl">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
              CLICK ANY REVOLVING SERVICE PLANET BADGE TO INSPECT CAPABILITY
            </span>
          </div>

        </div>

        {/* 6 PLANETS QUICK ACCESS BADGE SELECTOR GRID BELOW CANVAS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
          {servicePlanets.map((planet) => (
            <button
              key={planet.id}
              onClick={() => setSelectedPlanet(planet)}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                selectedPlanet?.id === planet.id
                  ? 'bg-purple-950/80 border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.4)] scale-105'
                  : 'bg-[#0E1320] border-slate-800 hover:border-slate-600 hover:bg-slate-900/80'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-1.5 rounded-xl bg-slate-900 border border-slate-800">
                  {planet.icon}
                </span>
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: planet.hexColor }}
                />
              </div>
              <div>
                <div className="text-xs font-bold text-white font-heading truncate">
                  {planet.name}
                </div>
                <div className="text-[9.5px] font-mono text-cyan-300 font-semibold mt-0.5">
                  {planet.stat}
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* PLANET DETAIL MODAL OVERLAY */}
      <AnimatePresence>
        {selectedPlanet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedPlanet(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-[#0C101C] border border-purple-500/60 rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(168,85,247,0.3)] text-white"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPlanet(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-purple-950/80 border border-purple-800">
                  {selectedPlanet.icon}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    {selectedPlanet.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                    {selectedPlanet.name}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed mb-6">
                {selectedPlanet.desc}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-[#121726] border border-slate-800 p-3 rounded-2xl">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Core Benchmark</div>
                  <div className="text-base font-extrabold text-cyan-300 font-mono mt-1">
                    {selectedPlanet.stat}
                  </div>
                </div>
                <div className="bg-[#121726] border border-slate-800 p-3 rounded-2xl">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Live Telemetry</div>
                  <div className="text-xs font-bold text-emerald-300 font-mono mt-1">
                    {selectedPlanet.liveMetric}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <a
                  href="https://calendly.com/harshvardhansharma676/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all font-heading shadow-lg"
                >
                  <span>Book Strategy Call</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </a>

                <button
                  onClick={() => setSelectedPlanet(null)}
                  className="text-xs font-mono text-slate-400 hover:text-white"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
