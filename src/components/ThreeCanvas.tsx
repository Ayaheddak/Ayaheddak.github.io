import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  className?: string;
}

const ThreeCanvas = ({ className = '' }: ThreeCanvasProps) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const updateCameraDistance = () => {
      const width = window.innerWidth;
      camera.position.z = width < 640 ? 38 : width < 1024 ? 32 : 26;
    };
    updateCameraDistance();

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ==========================================
    // Helper: Round Glowing Circle Texture (No Square Cubes)
    // ==========================================
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.35, 'rgba(255, 255, 255, 0.85)');
        gradient.addColorStop(0.75, 'rgba(255, 255, 255, 0.25)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(32, 32, 31, 0, Math.PI * 2);
        ctx.fill();
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const circleTexture = createCircleTexture();

    // ==========================================
    // A. HERO CELESTIAL SPHERE & ORBITAL RINGS (Pure Circles & Spheres, Zero Cubes)
    // ==========================================
    const heroGroup = new THREE.Group();
    scene.add(heroGroup);

    // 1. Outer Smooth Wireframe Celestial Sphere (Planet)
    const sphereGeometry = new THREE.SphereGeometry(8.5, 36, 36);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1, // Indigo
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    });
    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    heroGroup.add(sphereMesh);

    // 2. Inner Glowing Core Sphere
    const innerSphereGeometry = new THREE.SphereGeometry(5.2, 28, 28);
    const innerSphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Cyan
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const innerSphereMesh = new THREE.Mesh(innerSphereGeometry, innerSphereMaterial);
    heroGroup.add(innerSphereMesh);

    // 3. Central Core Glowing Dot (Sphere)
    const centerDotGeometry = new THREE.SphereGeometry(1.6, 24, 24);
    const centerDotMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.8,
    });
    const centerDotMesh = new THREE.Mesh(centerDotGeometry, centerDotMaterial);
    heroGroup.add(centerDotMesh);

    // 4. Smooth Circular Planetary Ring 1 (Saturn Ring)
    const ringGeometry1 = new THREE.RingGeometry(12.5, 12.8, 128);
    const ringMaterial1 = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.32,
    });
    const ringMesh1 = new THREE.Mesh(ringGeometry1, ringMaterial1);
    ringMesh1.rotation.x = Math.PI / 3;
    heroGroup.add(ringMesh1);

    // 5. Smooth Circular Planetary Ring 2 (Orbital Gyroscope Ring)
    const ringGeometry2 = new THREE.RingGeometry(15.5, 15.8, 128);
    const ringMaterial2 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
    });
    const ringMesh2 = new THREE.Mesh(ringGeometry2, ringMaterial2);
    ringMesh2.rotation.y = Math.PI / 4;
    heroGroup.add(ringMesh2);

    // 6. Smooth Circular Planetary Ring 3 (Outer Horizon Ring)
    const ringGeometry3 = new THREE.RingGeometry(18.5, 18.7, 128);
    const ringMaterial3 = new THREE.MeshBasicMaterial({
      color: 0xa855f7, // Purple
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.18,
    });
    const ringMesh3 = new THREE.Mesh(ringGeometry3, ringMaterial3);
    ringMesh3.rotation.z = Math.PI / 6;
    heroGroup.add(ringMesh3);

    // ==========================================
    // B. GALAXY MOVING STARFIELD (All Round Circular Stars)
    // ==========================================
    const starCount = 1200;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starSpeeds = new Float32Array(starCount);
    const starColors = new Float32Array(starCount * 3);

    const palette = [
      new THREE.Color(0x818cf8), // Soft Indigo
      new THREE.Color(0x38bdf8), // Cyan / Sky
      new THREE.Color(0xc084fc), // Violet
      new THREE.Color(0xffffff), // Pure Starlight White
    ];

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 160;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 160;
      starPositions[i3 + 2] = (Math.random() - 0.5) * 200 - 30;

      starSpeeds[i] = 0.08 + Math.random() * 0.15;

      const color = palette[Math.floor(Math.random() * palette.length)];
      starColors[i3] = color.r;
      starColors[i3 + 1] = color.g;
      starColors[i3 + 2] = color.b;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    // Circular texture applied to PointsMaterial makes all stars smooth round circles
    const starMaterial = new THREE.PointsMaterial({
      size: 1.1,
      map: circleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const starfield = new THREE.Points(starGeometry, starMaterial);
    scene.add(starfield);

    // ==========================================
    // C. GENTLE SHOOTING STARS / METEORS
    // ==========================================
    const meteorGeometry = new THREE.BufferGeometry();
    const meteorPoints = 20;
    const meteorPositions = new Float32Array(meteorPoints * 3);
    meteorGeometry.setAttribute('position', new THREE.BufferAttribute(meteorPositions, 3));

    const meteorMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0,
    });
    const meteorLine = new THREE.Line(meteorGeometry, meteorMaterial);
    scene.add(meteorLine);

    let meteorActive = false;
    let meteorProgress = 0;
    let meteorStart = new THREE.Vector3();
    let meteorDir = new THREE.Vector3();
    let meteorTimer = 0;

    const triggerMeteor = () => {
      meteorActive = true;
      meteorProgress = 0;
      meteorStart.set(
        (Math.random() - 0.5) * 100,
        20 + Math.random() * 30,
        -20 + (Math.random() - 0.5) * 40
      );
      meteorDir.set(-1.2 - Math.random() * 0.5, -1 - Math.random() * 0.4, 0).normalize();
    };

    // ==========================================
    // D. INTERACTION & SCROLL CONTROLS
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.0008;
      mouseY = (event.clientY - windowHalfY) * 0.0008;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    let scrollY = 0;
    let targetScrollY = 0;
    let scrollSpeed = 0;
    let lastScrollY = 0;

    const onScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      updateCameraDistance();
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // ==========================================
    // E. ANIMATION LOOP (Smooth Celestial Sphere Rotation & Moving Round Stars)
    // ==========================================
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Mouse damping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Scroll interpolation
      scrollY += (targetScrollY - scrollY) * 0.08;
      scrollSpeed = Math.abs(scrollY - lastScrollY);
      lastScrollY = scrollY;

      // 1. HERO CELESTIAL SPHERES & RINGS (Fades gracefully on scroll)
      const heroThreshold = window.innerHeight * 0.85;
      const heroFade = Math.max(0, 1 - scrollY / heroThreshold);

      heroGroup.visible = heroFade > 0.01;
      if (heroGroup.visible) {
        sphereMaterial.opacity = 0.38 * heroFade;
        innerSphereMaterial.opacity = 0.5 * heroFade;
        centerDotMaterial.opacity = 0.8 * heroFade;
        ringMaterial1.opacity = 0.32 * heroFade;
        ringMaterial2.opacity = 0.25 * heroFade;
        ringMaterial3.opacity = 0.18 * heroFade;

        // Smooth circular rotation with mouse parallax
        heroGroup.rotation.y = targetX * 1.5 + elapsedTime * 0.15;
        heroGroup.rotation.x = targetY * 1.5 + Math.sin(elapsedTime * 0.3) * 0.1;

        // Inner sphere counter-rotation
        innerSphereMesh.rotation.y = -elapsedTime * 0.3;
        innerSphereMesh.rotation.x = elapsedTime * 0.2;

        // Concentric circular rings rotation
        ringMesh1.rotation.z = elapsedTime * 0.08;
        ringMesh2.rotation.z = -elapsedTime * 0.06;
        ringMesh3.rotation.z = elapsedTime * 0.04;

        heroGroup.position.y = -(scrollY * 0.04);
        heroGroup.position.z = -(scrollY * 0.05);
      }

      // 2. GALAXY MOVING ROUND STARS
      const positions = starGeometry.attributes.position.array as Float32Array;
      const boost = Math.min(scrollSpeed * 0.15, 1.2);

      for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;
        positions[i3 + 2] += starSpeeds[i] + boost;

        if (positions[i3 + 2] > 35) {
          positions[i3 + 2] = -160;
          positions[i3] = (Math.random() - 0.5) * 160;
          positions[i3 + 1] = (Math.random() - 0.5) * 160;
        }
      }
      starGeometry.attributes.position.needsUpdate = true;

      // Galaxy slow drift rotation
      starfield.rotation.y = targetX * 0.8 + elapsedTime * 0.015;
      starfield.rotation.x = targetY * 0.8 + Math.sin(elapsedTime * 0.05) * 0.02;

      // 3. SHOOTING STAR (Occasional streak)
      meteorTimer += 0.016;
      if (!meteorActive && meteorTimer > 4.5) {
        if (Math.random() < 0.02) {
          triggerMeteor();
          meteorTimer = 0;
        }
      }

      if (meteorActive) {
        meteorProgress += 0.035;
        const currentPos = meteorStart.clone().add(meteorDir.clone().multiplyScalar(meteorProgress * 70));
        const posArray = meteorGeometry.attributes.position.array as Float32Array;

        for (let j = 0; j < meteorPoints; j++) {
          const t = j / meteorPoints;
          const trailPos = currentPos.clone().sub(meteorDir.clone().multiplyScalar(t * 12));
          posArray[j * 3] = trailPos.x;
          posArray[j * 3 + 1] = trailPos.y;
          posArray[j * 3 + 2] = trailPos.z;
        }
        meteorGeometry.attributes.position.needsUpdate = true;
        meteorMaterial.opacity = Math.sin(meteorProgress * Math.PI) * 0.8;

        if (meteorProgress >= 1) {
          meteorActive = false;
          meteorMaterial.opacity = 0;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      circleTexture.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      innerSphereGeometry.dispose();
      innerSphereMaterial.dispose();
      centerDotGeometry.dispose();
      centerDotMaterial.dispose();
      ringGeometry1.dispose();
      ringMaterial1.dispose();
      ringGeometry2.dispose();
      ringMaterial2.dispose();
      ringGeometry3.dispose();
      ringMaterial3.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      meteorGeometry.dispose();
      meteorMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`pointer-events-none select-none ${className}`}
      style={{ overflow: 'hidden' }}
    />
  );
};

export default ThreeCanvas;
