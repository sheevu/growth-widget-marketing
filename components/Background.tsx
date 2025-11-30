import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    // Initial sizing
    handleResize();

    // Particle configuration
    const particleCount = 45; // Reduced for ambient feel
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.1, // Slower
        speedY: (Math.random() - 0.5) * 0.1, // Slower
        opacity: Math.random() * 0.3 + 0.05, // Lower opacity
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "white";
      particles.forEach((p) => {
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around screen edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#0B0F19]">
      
      {/* Mesh Gradient Base */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0B0F19] to-[#0B0F19] opacity-90" />

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Aqua Aurora Glows - Top Left (Cyan/Teal) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1, 1.3, 1],
          opacity: [0.1, 0.25, 0.15, 0.25, 0.1], // Low opacity for ambient feel
          x: [0, 50, -30, 20, 0],
          y: [0, -40, 30, -20, 0],
          rotate: [0, 10, -5, 5, 0]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-[-10%] left-[0%] w-[700px] h-[700px] bg-cyan-600/20 rounded-full blur-[140px]" 
      />
      
      {/* Aqua Aurora Glows - Top Right (Blue/Violet) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 0.9, 1.2, 1],
          opacity: [0.1, 0.2, 0.1, 0.2, 0.1],
          x: [0, -60, 40, -20, 0],
          y: [0, 50, -40, 30, 0],
          rotate: [0, -10, 10, -5, 0]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-[5%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px]" 
      />
      
      {/* Aqua Aurora Glows - Bottom (Purple/Indigo) */}
      <motion.div 
         animate={{ 
          scale: [1, 1.4, 1.1, 1.5, 1],
          opacity: [0.08, 0.15, 0.1, 0.15, 0.08],
          x: [0, 40, -20, 30, 0],
          y: [0, -30, 20, -20, 0]
        }}
        transition={{ 
          duration: 35, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute bottom-[-20%] left-[20%] w-[800px] h-[800px] bg-violet-800/20 rounded-full blur-[130px]" 
      />

      {/* Center Subtle Pulse (Teal) */}
      <motion.div 
         animate={{ 
          opacity: [0.02, 0.08, 0.02],
          scale: [0.9, 1.1, 0.9]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px]" 
      />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};