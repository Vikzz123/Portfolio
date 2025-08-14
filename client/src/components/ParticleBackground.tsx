import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      
      const colors = ['#6366f1', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.3 + 0.1
        });
      }
      
      particlesRef.current = particles;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Floating animation
        const floatOffset = Math.sin(Date.now() * 0.001 + index) * 0.5;
        const drawY = particle.y + floatOffset;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, drawY, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections between nearby particles
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = drawY - (otherParticle.y + Math.sin(Date.now() * 0.001 + otherIndex) * 0.5);
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, drawY);
              ctx.lineTo(otherParticle.x, otherParticle.y + Math.sin(Date.now() * 0.001 + otherIndex) * 0.5);
              ctx.strokeStyle = particle.color;
              ctx.globalAlpha = (1 - distance / 100) * 0.1;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30 dark:opacity-20"
      style={{ background: 'transparent' }}
    />
  );
};
