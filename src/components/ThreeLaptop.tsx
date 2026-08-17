import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeLaptopProps {
  progress: number; // 0 (closed) to 1 (fully open & zoomed)
  activeTab?: 'overview' | 'agents' | 'pipeline';
  className?: string;
}

export function ThreeLaptop({ progress, activeTab = 'overview', className = '' }: ThreeLaptopProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const targetProgressRef = useRef(progress);
  const currentProgressRef = useRef(progress);
  const activeTabRef = useRef(activeTab);

  useEffect(() => {
    targetProgressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    activeTabRef.current = activeTab;
  }, [activeTab]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // --- 1. Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 3.2, 9.2);
    camera.lookAt(0, 0.5, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    container.appendChild(renderer.domElement);

    // --- 2. Lighting Setup ---
    const ambientLight = new THREE.AmbientLight(0x0f172a, 2.0);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x3b82f6, 4.5);
    keyLight.position.set(6, 12, 8);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 3.5);
    fillLight.position.set(-8, 6, -4);
    scene.add(fillLight);

    const haloLight = new THREE.PointLight(0x38bdf8, 6, 20);
    haloLight.position.set(0, -0.6, 0);
    scene.add(haloLight);

    // --- 3. Materials ---
    const titaniumMaterial = new THREE.MeshStandardMaterial({
      color: 0x070a12,
      metalness: 0.95,
      roughness: 0.12,
    });

    const keyboardMat = new THREE.MeshStandardMaterial({
      color: 0x030712,
      roughness: 0.4,
      metalness: 0.4,
    });

    const keyCapMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      emissive: 0x2563eb,
      emissiveIntensity: 0.55,
      roughness: 0.25,
    });

    const bezelMaterial = new THREE.MeshStandardMaterial({
      color: 0x020617,
      roughness: 0.05,
      metalness: 0.95,
    });

    const emblemMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x3b82f6,
      emissiveIntensity: 1.6,
      metalness: 0.9,
      roughness: 0.1,
    });

    // --- 4. Dynamic Executive AI Dashboard Canvas Texture ---
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 1024;
    screenCanvas.height = 640;
    const ctx = screenCanvas.getContext('2d')!;

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const screenMaterial = new THREE.MeshBasicMaterial({
      map: screenTexture,
    });

    // --- 5. Build 3D Laptop Mesh ---
    const laptopGroup = new THREE.Group();
    scene.add(laptopGroup);

    // Base
    const baseWidth = 5.6;
    const baseDepth = 3.8;
    const baseThickness = 0.18;

    const baseGeo = new THREE.BoxGeometry(baseWidth, baseThickness, baseDepth);
    const baseMesh = new THREE.Mesh(baseGeo, titaniumMaterial);
    baseMesh.position.set(0, baseThickness / 2, 0);
    laptopGroup.add(baseMesh);

    // Keyboard Deck
    const kbDeckGeo = new THREE.BoxGeometry(4.8, 0.02, 2.2);
    const kbDeckMesh = new THREE.Mesh(kbDeckGeo, keyboardMat);
    kbDeckMesh.position.set(0, baseThickness / 2 + 0.01, -0.4);
    laptopGroup.add(kbDeckMesh);

    // Glowing Key Grid
    const keyGeo = new THREE.BoxGeometry(4.6, 0.02, 2.0);
    const keyMesh = new THREE.Mesh(keyGeo, keyCapMat);
    keyMesh.position.set(0, baseThickness / 2 + 0.02, -0.4);
    laptopGroup.add(keyMesh);

    // Trackpad
    const trackpadGeo = new THREE.BoxGeometry(1.6, 0.01, 1.1);
    const trackpadMesh = new THREE.Mesh(trackpadGeo, titaniumMaterial);
    trackpadMesh.position.set(0, baseThickness / 2 + 0.01, 1.0);
    laptopGroup.add(trackpadMesh);

    // Hinge Pivot Group
    const hingePivot = new THREE.Group();
    hingePivot.position.set(0, baseThickness, -baseDepth / 2 + 0.05);
    laptopGroup.add(hingePivot);

    // Lid Assembly
    const lidGroup = new THREE.Group();
    hingePivot.add(lidGroup);

    // Outer Lid
    const lidShellGeo = new THREE.BoxGeometry(baseWidth, baseThickness * 0.9, baseDepth);
    const lidShellMesh = new THREE.Mesh(lidShellGeo, titaniumMaterial);
    lidShellMesh.position.set(0, 0, baseDepth / 2);
    lidGroup.add(lidShellMesh);

    // Screen Bezel
    const bezelGeo = new THREE.BoxGeometry(baseWidth * 0.96, 0.02, baseDepth * 0.96);
    const bezelMesh = new THREE.Mesh(bezelGeo, bezelMaterial);
    bezelMesh.position.set(0, -baseThickness * 0.45, baseDepth / 2);
    lidGroup.add(bezelMesh);

    // Display Mesh
    const screenWidth = baseWidth * 0.9;
    const screenDepth = baseDepth * 0.88;
    const screenGeo = new THREE.PlaneGeometry(screenWidth, screenDepth);
    const screenMesh = new THREE.Mesh(screenGeo, screenMaterial);
    screenMesh.rotation.x = Math.PI / 2;
    screenMesh.position.set(0, -baseThickness * 0.46, baseDepth / 2);
    lidGroup.add(screenMesh);

    // Glowing Emblem
    const emblemGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.02, 32);
    const emblemMesh = new THREE.Mesh(emblemGeo, emblemMaterial);
    emblemMesh.position.set(0, baseThickness * 0.46, baseDepth / 2);
    lidGroup.add(emblemMesh);

    lidGroup.rotation.x = 0;

    // --- 6. 3D Floating Holographic Telemetry Panels ---
    const floatDashboardGroup = new THREE.Group();
    laptopGroup.add(floatDashboardGroup);

    // Holographic Panel 1 (Left: ROAS & Scaling)
    const card1Canvas = document.createElement('canvas');
    card1Canvas.width = 340;
    card1Canvas.height = 190;
    const c1Ctx = card1Canvas.getContext('2d')!;
    c1Ctx.fillStyle = '#0B0F19';
    c1Ctx.fillRect(0, 0, 340, 190);
    c1Ctx.strokeStyle = '#38BDF8';
    c1Ctx.lineWidth = 4;
    c1Ctx.strokeRect(0, 0, 340, 190);
    c1Ctx.fillStyle = '#38BDF8';
    c1Ctx.font = 'bold 18px "Space Grotesk"';
    c1Ctx.fillText('LIVE ROAS TRACKER', 20, 42);
    c1Ctx.fillStyle = '#FFFFFF';
    c1Ctx.font = 'bold 44px "Space Grotesk"';
    c1Ctx.fillText('6.85x', 20, 105);
    c1Ctx.fillStyle = '#60A5FA';
    c1Ctx.font = '14px "JetBrains Mono"';
    c1Ctx.fillText('▲ +142% vs Benchmark', 20, 148);

    const c1Tex = new THREE.CanvasTexture(card1Canvas);
    const c1Mat = new THREE.MeshBasicMaterial({ map: c1Tex, transparent: true, opacity: 0.95, side: THREE.DoubleSide });
    const c1Geo = new THREE.PlaneGeometry(1.9, 1.05);
    const c1Mesh = new THREE.Mesh(c1Geo, c1Mat);
    c1Mesh.position.set(-3.7, 2.3, 0.5);
    c1Mesh.rotation.y = 0.35;
    floatDashboardGroup.add(c1Mesh);

    // Holographic Panel 2 (Right: AI Agents Status)
    const card2Canvas = document.createElement('canvas');
    card2Canvas.width = 340;
    card2Canvas.height = 190;
    const c2Ctx = card2Canvas.getContext('2d')!;
    c2Ctx.fillStyle = '#0B0F19';
    c2Ctx.fillRect(0, 0, 340, 190);
    c2Ctx.strokeStyle = '#3B82F6';
    c2Ctx.lineWidth = 4;
    c2Ctx.strokeRect(0, 0, 340, 190);
    c2Ctx.fillStyle = '#60A5FA';
    c2Ctx.font = 'bold 18px "Space Grotesk"';
    c2Ctx.fillText('ACTIVE AI AGENTS', 20, 42);
    c2Ctx.fillStyle = '#FFFFFF';
    c2Ctx.font = 'bold 44px "Space Grotesk"';
    c2Ctx.fillText('24 / 24', 20, 105);
    c2Ctx.fillStyle = '#38BDF8';
    c2Ctx.font = '14px "JetBrains Mono"';
    c2Ctx.fillText('● 100% SLA Operational', 20, 148);

    const c2Tex = new THREE.CanvasTexture(card2Canvas);
    const c2Mat = new THREE.MeshBasicMaterial({ map: c2Tex, transparent: true, opacity: 0.95, side: THREE.DoubleSide });
    const c2Geo = new THREE.PlaneGeometry(1.9, 1.05);
    const c2Mesh = new THREE.Mesh(c2Geo, c2Mat);
    c2Mesh.position.set(3.7, 2.3, 0.5);
    c2Mesh.rotation.y = -0.35;
    floatDashboardGroup.add(c2Mesh);

    // --- 7. Space Particle System & Orbit Rings ---
    const particlesCount = 180;
    const particlesGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 18;
      particlePositions[i + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i + 2] = (Math.random() - 0.5) * 18;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.09,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particlesGeo, particleMat);
    scene.add(particleSystem);

    const ringGeo = new THREE.TorusGeometry(5.4, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.45,
      wireframe: true,
    });
    const cyberRing = new THREE.Mesh(ringGeo, ringMat);
    cyberRing.rotation.x = Math.PI / 3;
    scene.add(cyberRing);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX = (e.clientX - cx) * 0.00035;
      mouseY = (e.clientY - cy) * 0.00035;
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

    // --- 8. Render Screen Canvas Dashboard ---
    let tick = 0;

    const renderScreenDashboard = (p: number) => {
      tick += 0.04;
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, screenCanvas.width, screenCanvas.height);

      const grad = ctx.createLinearGradient(0, 0, screenCanvas.width, screenCanvas.height);
      grad.addColorStop(0, '#030712');
      grad.addColorStop(0.5, '#0B0F19');
      grad.addColorStop(1, '#0F172A');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, screenCanvas.width, screenCanvas.height);

      // Grid Lines
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.15)';
      ctx.lineWidth = 1;
      for (let x = 0; x < screenCanvas.width; x += 64) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, screenCanvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < screenCanvas.height; y += 64) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(screenCanvas.width, y);
        ctx.stroke();
      }

      // Top Executive Header
      ctx.fillStyle = 'rgba(15, 23, 42, 0.92)';
      ctx.fillRect(30, 25, screenCanvas.width - 60, 65);
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.45)';
      ctx.strokeRect(30, 25, screenCanvas.width - 60, 65);

      ctx.fillStyle = '#60A5FA';
      ctx.font = 'bold 24px "Space Grotesk", sans-serif';
      ctx.fillText('CAEL FORGE  |  EXECUTIVE AI DASHBOARD', 60, 64);

      ctx.fillStyle = '#38BDF8';
      ctx.font = 'bold 14px "JetBrains Mono", monospace';
      ctx.fillText('● REAL-TIME TELEMETRY ONLINE', screenCanvas.width - 330, 64);

      const tabMode = activeTabRef.current;

      if (tabMode === 'overview') {
        // OVERVIEW: Live Revenue Curve & Metric Cards
        ctx.beginPath();
        ctx.strokeStyle = '#38BDF8';
        ctx.lineWidth = 5;

        const graphX = 60;
        const graphY = 490;
        const graphW = 540;

        ctx.moveTo(graphX, graphY);
        for (let i = 0; i <= 20; i++) {
          const x = graphX + (i / 20) * graphW;
          const noise = Math.sin(i * 0.6 + tick) * 18;
          const y = graphY - Math.pow(i / 20, 2) * 270 + noise;
          ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.shadowColor = '#3B82F6';
        ctx.shadowBlur = 15;
        ctx.stroke();
        ctx.shadowBlur = 0;

        const cardW = 280;
        const cardH = 135;
        const cardX = 660;

        // Card 1
        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        ctx.fillRect(cardX, 115, cardW, cardH);
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.5)';
        ctx.strokeRect(cardX, 115, cardW, cardH);
        ctx.fillStyle = '#94A3B8';
        ctx.font = '13px "JetBrains Mono"';
        ctx.fillText('CLIENT REVENUE SCALE', cardX + 20, 145);
        ctx.fillStyle = '#60A5FA';
        ctx.font = 'bold 36px "Space Grotesk"';
        ctx.fillText('+348.4%', cardX + 20, 192);

        // Card 2
        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        ctx.fillRect(cardX, 275, cardW, cardH);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
        ctx.strokeRect(cardX, 275, cardW, cardH);
        ctx.fillStyle = '#94A3B8';
        ctx.font = '13px "JetBrains Mono"';
        ctx.fillText('AI AGENT ACTIONS', cardX + 20, 305);
        ctx.fillStyle = '#38BDF8';
        ctx.font = 'bold 36px "Space Grotesk"';
        ctx.fillText('4,280,000+', cardX + 20, 352);

        // Card 3
        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        ctx.fillRect(cardX, 435, cardW, cardH);
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.5)';
        ctx.strokeRect(cardX, 435, cardW, cardH);
        ctx.fillStyle = '#94A3B8';
        ctx.font = '13px "JetBrains Mono"';
        ctx.fillText('OPTIMIZED ROAS', cardX + 20, 465);
        ctx.fillStyle = '#818CF8';
        ctx.font = 'bold 36px "Space Grotesk"';
        ctx.fillText('6.85x', cardX + 20, 512);

      } else if (tabMode === 'agents') {
        // AGENTS TAB: Live AI Agent Node Map
        ctx.fillStyle = '#94A3B8';
        ctx.font = 'bold 18px "Space Grotesk"';
        ctx.fillText('AUTONOMOUS AGENT MESH TELEMETRY', 60, 130);

        const agentsList = [
          { name: 'Lead Qualifier Agent', status: 'ACTIVE', latency: '12ms', load: '98%' },
          { name: 'ROAS Bid Optimizer', status: 'ACTIVE', latency: '8ms', load: '99%' },
          { name: 'Ad Creative Generator', status: 'ACTIVE', latency: '45ms', load: '94%' },
          { name: 'CRM Data Enricher', status: 'ACTIVE', latency: '15ms', load: '96%' },
        ];

        agentsList.forEach((agent, i) => {
          const y = 160 + i * 95;
          ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
          ctx.fillRect(60, y, 904, 75);
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
          ctx.strokeRect(60, y, 904, 75);

          ctx.fillStyle = '#38BDF8';
          ctx.font = 'bold 20px "Space Grotesk"';
          ctx.fillText(agent.name, 90, y + 45);

          ctx.fillStyle = '#60A5FA';
          ctx.font = 'bold 14px "JetBrains Mono"';
          ctx.fillText(`● ${agent.status}  |  LATENCY: ${agent.latency}  |  LOAD: ${agent.load}`, 560, y + 45);
        });

      } else {
        // PIPELINE TAB: Live Lead Conversion Pipeline
        ctx.fillStyle = '#94A3B8';
        ctx.font = 'bold 18px "Space Grotesk"';
        ctx.fillText('LIVE ATTRIBUTION & PIPELINE CONVERSION', 60, 130);

        const stages = [
          { stage: 'Inbound Clicks', count: '142,800', rate: '100%' },
          { stage: 'AI Agent Engaged', count: '84,200', rate: '58.9%' },
          { stage: 'Qualified Leads', count: '18,400', rate: '12.8%' },
          { stage: 'Booked Strategy Calls', count: '3,420', rate: '2.4%' },
        ];

        stages.forEach((st, i) => {
          const y = 160 + i * 95;
          ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
          ctx.fillRect(60, y, 904, 75);
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
          ctx.strokeRect(60, y, 904, 75);

          ctx.fillStyle = '#FFFFFF';
          ctx.font = 'bold 20px "Space Grotesk"';
          ctx.fillText(st.stage, 90, y + 45);

          ctx.fillStyle = '#38BDF8';
          ctx.font = 'bold 24px "Space Grotesk"';
          ctx.fillText(st.count, 560, y + 48);

          ctx.fillStyle = '#94A3B8';
          ctx.font = '14px "JetBrains Mono"';
          ctx.fillText(`CONV: ${st.rate}`, 820, y + 45);
        });
      }

      screenTexture.needsUpdate = true;
    };

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      currentProgressRef.current += (targetProgressRef.current - currentProgressRef.current) * 0.08;
      const p = currentProgressRef.current;

      const openPhase = Math.min(1, p / 0.65);
      const maxAngle = Math.PI * 0.64;
      lidGroup.rotation.x = -openPhase * maxAngle;

      floatDashboardGroup.position.y = Math.sin(tick * 0.8) * 0.1;
      floatDashboardGroup.scale.setScalar(openPhase);

      const zoomPhase = Math.max(0, (p - 0.5) / 0.5);

      const startCamZ = 9.2;
      const targetCamZ = 3.5 - zoomPhase * 1.8;

      const startCamY = 3.2;
      const targetCamY = 1.3 - zoomPhase * 0.6;

      camera.position.z = startCamZ + (targetCamZ - startCamZ) * zoomPhase;
      camera.position.y = startCamY + (targetCamY - startCamY) * zoomPhase;

      particleSystem.rotation.y = tick * 0.05;
      cyberRing.rotation.z = tick * 0.08;

      laptopGroup.rotation.y = (mouseX * 0.8) + (Math.sin(tick * 0.5) * 0.02);
      laptopGroup.rotation.x = (mouseY * 0.5) + (zoomPhase * 0.15);

      renderScreenDashboard(p);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      baseGeo.dispose();
      kbDeckGeo.dispose();
      keyGeo.dispose();
      trackpadGeo.dispose();
      lidShellGeo.dispose();
      bezelGeo.dispose();
      screenGeo.dispose();
      emblemGeo.dispose();
      c1Geo.dispose();
      c2Geo.dispose();
      particlesGeo.dispose();
      ringGeo.dispose();

      titaniumMaterial.dispose();
      keyboardMat.dispose();
      keyCapMat.dispose();
      bezelMaterial.dispose();
      screenMaterial.dispose();
      emblemMaterial.dispose();
      c1Mat.dispose();
      c2Mat.dispose();
      particleMat.dispose();
      ringMat.dispose();
      screenTexture.dispose();
      c1Tex.dispose();
      c2Tex.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
}
