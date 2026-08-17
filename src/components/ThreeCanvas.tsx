import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  className?: string;
  variant?: 'hero' | 'grid' | 'ambient';
}

export function ThreeCanvas({ className = '', variant = 'hero' }: ThreeCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = variant === 'hero' ? 14 : 16;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Main Group for Full-Screen Scene
    const group = new THREE.Group();
    scene.add(group);

    if (variant === 'hero') {
      group.position.x = 0; // Perfectly centered 3D WebGL animation
      group.position.y = 0;
    }

    // 1. 3D Outer Dual Wireframe Geometries - Subtle & Elegant
    const icoGeometry = new THREE.IcosahedronGeometry(variant === 'hero' ? 7.0 : 6.5, 2);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.14,
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
    group.add(icoMesh);

    // Inner Dodecahedron Core
    const dodGeometry = new THREE.DodecahedronGeometry(4.5, 1);
    const dodMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
      emissive: 0x1e1b4b,
      emissiveIntensity: 0.35,
    });
    const dodMesh = new THREE.Mesh(dodGeometry, dodMaterial);
    group.add(dodMesh);

    // 2. 3D Glowing Torus Knot Energy Ring
    const knotGeo = new THREE.TorusKnotGeometry(2.8, 0.5, 120, 16);
    const knotMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    group.add(knotMesh);

    // 3. 3D Triple Orbit Rings
    const ringGeos = [
      { radius: 9.2, color: 0x38bdf8, rotX: Math.PI / 3, rotY: 0 },
      { radius: 11.8, color: 0xc084fc, rotX: -Math.PI / 4, rotY: Math.PI / 6 },
      { radius: 14.0, color: 0x818cf8, rotX: Math.PI / 6, rotY: -Math.PI / 3 },
    ];

    const rings: THREE.Mesh[] = [];
    ringGeos.forEach(r => {
      const geo = new THREE.TorusGeometry(r.radius, 0.035, 16, 100);
      const mat = new THREE.MeshBasicMaterial({ color: r.color, transparent: true, opacity: 0.18 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = r.rotX;
      mesh.rotation.y = r.rotY;
      group.add(mesh);
      rings.push(mesh);
    });

    // 4. Floating Orbiting Satellites Nodes
    const satelliteCount = 6;
    const satellites: THREE.Mesh[] = [];
    const satGeo = new THREE.OctahedronGeometry(0.35, 0);
    const satMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.5,
    });

    for (let i = 0; i < satelliteCount; i++) {
      const mesh = new THREE.Mesh(satGeo, satMat);
      group.add(mesh);
      satellites.push(mesh);
    }

    // 5. Full-Screen 3D Particle Cloud - Subtle Ambient Stars
    const particleCount = variant === 'hero' ? 380 : 150;
    const particlesGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const initialY = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      const x = (Math.random() - 0.5) * 75;
      const y = (Math.random() - 0.5) * 48;
      const z = (Math.random() - 0.5) * 48;
      particlePositions[idx] = x;
      particlePositions[idx + 1] = y;
      particlePositions[idx + 2] = z;
      initialY[i] = y;
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particlesMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.12,
      transparent: true,
      opacity: 0.42,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleSystem);

    // 6. Balanced Soft Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x38bdf8, 2.2, 80);
    cyanPointLight.position.set(16, 16, 16);
    scene.add(cyanPointLight);

    const purplePointLight = new THREE.PointLight(0xa855f7, 1.8, 80);
    purplePointLight.position.set(-16, -16, -16);
    scene.add(purplePointLight);

    // Full-Screen Mouse Interaction Tracking
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.001;
      mouseY = (event.clientY - windowHalfY) * 0.001;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler for Full-Screen Responsiveness
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Mesh Rotations
      icoMesh.rotation.y = elapsedTime * 0.07;
      icoMesh.rotation.x = elapsedTime * 0.04;

      dodMesh.rotation.y = -elapsedTime * 0.12;
      dodMesh.rotation.z = elapsedTime * 0.08;

      knotMesh.rotation.z = elapsedTime * 0.16;
      knotMesh.rotation.x = -elapsedTime * 0.1;

      // Orbit Rings Movement
      rings[0].rotation.z = elapsedTime * 0.06;
      rings[1].rotation.x = elapsedTime * 0.04;
      rings[2].rotation.y = elapsedTime * 0.07;

      // Orbiting Satellites Physics
      satellites.forEach((sat, i) => {
        const angle = elapsedTime * 0.6 + (i * Math.PI * 2) / satelliteCount;
        const radius = 8.8 + Math.sin(elapsedTime * 1.0 + i) * 1.0;
        sat.position.x = Math.cos(angle) * radius;
        sat.position.y = Math.sin(angle * 1.3) * 3.0;
        sat.position.z = Math.sin(angle) * radius;
        sat.rotation.y = elapsedTime * 1.5;
      });

      // Wave Particles Animation
      const posAttr = particlesGeo.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        const x = posArray[idx];
        const z = posArray[idx + 2];
        posArray[idx + 1] = initialY[i] + Math.sin(elapsedTime * 1.1 + x * 0.12 + z * 0.12) * 0.7;
      }
      posAttr.needsUpdate = true;

      // Smooth Mouse Damping Inertia
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      group.rotation.y = targetX * 1.4;
      group.rotation.x = targetY * 1.4;

      particleSystem.rotation.y = targetX * 0.6;
      particleSystem.rotation.x = targetY * 0.6;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Clean up Three.js resources
      icoGeometry.dispose();
      icoMaterial.dispose();
      dodGeometry.dispose();
      dodMaterial.dispose();
      knotGeo.dispose();
      knotMat.dispose();
      satGeo.dispose();
      satMat.dispose();
      rings.forEach(r => {
        r.geometry.dispose();
        (r.material as THREE.Material).dispose();
      });
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [variant]);

  return <div ref={mountRef} className={`pointer-events-none ${className}`} />;
}
