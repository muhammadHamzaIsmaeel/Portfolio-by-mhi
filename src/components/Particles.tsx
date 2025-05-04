"use client";
import { useCallback } from "react";
import { useCanvas } from "../hooks/useCanvas";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

interface CanvasWithParticles extends HTMLCanvasElement {
  particles?: Particle[];
}

const Particles = () => {
  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Type the canvas with our extended interface
    const canvas = ctx.canvas as CanvasWithParticles;
    
    // Create particles array if it doesn't exist
    if (!canvas.particles) {
      const particles: Particle[] = [];
      const colors = ['rgba(139, 92, 246, 0.5)', 'rgba(234, 179, 8, 0.5)', 'rgba(255, 255, 255, 0.3)'];
      
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      canvas.particles = particles;
    }

    // Type guard to ensure particles exist
    if (!canvas.particles) return;

    // Update and draw particles
    canvas.particles.forEach(particle => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Reset particles that go off screen
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX = -particle.speedX;
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY = -particle.speedY;
      }

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    });
  }, []);

  const canvasRef = useCanvas(draw);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-20 pointer-events-none"
      width={typeof window !== 'undefined' ? window.innerWidth : 0}
      height={typeof window !== 'undefined' ? window.innerHeight : 0}
    />
  );
};

export default Particles;