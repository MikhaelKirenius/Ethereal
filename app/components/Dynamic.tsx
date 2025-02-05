import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
}

const InteractiveWaveGradient: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isPressed: false });
  const velocityRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    let animationFrameId: number;

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (x: number, y: number, color: string): Particle => ({
      x,
      y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      size: Math.random() * 3 + 1,
      color,
      life: 1
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const prevX = mouseRef.current.x;
      const prevY = mouseRef.current.y;
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      
      velocityRef.current = {
        x: mouseRef.current.x - prevX,
        y: mouseRef.current.y - prevY
      };

      if (mouseRef.current.isPressed) {
        for (let i = 0; i < 3; i++) {
          particlesRef.current.push(
            createParticle(
              mouseRef.current.x,
              mouseRef.current.y,
              Math.random() > 0.5 ? '#00FFE0' : '#BD00FF'
            )
          );
        }
      }
    };

    const handleMouseDown = () => {
      mouseRef.current.isPressed = true;
      for (let i = 0; i < 20; i++) {
        particlesRef.current.push(
          createParticle(
            mouseRef.current.x,
            mouseRef.current.y,
            Math.random() > 0.5 ? '#00FFE0' : '#BD00FF'
          )
        );
      }
    };

    const handleMouseUp = () => {
      mouseRef.current.isPressed = false;
    };

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    resize();

    const drawWave = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      frequency: number,
      color: string,
      amplitude: number,
      offset: number,
      customTime: number = time
    ) => {
      ctx.beginPath();
      
      const mouseInfluence = 100;
      const points: [number, number][] = [];

      for (let i = 0; i <= width; i += 2) {
        const distanceFromMouse = Math.sqrt(
          Math.pow((i - mouseRef.current.x), 2) + 
          Math.pow((height/2 - mouseRef.current.y), 2)
        );
        
        const mouseEffect = Math.max(0, 1 - distanceFromMouse / mouseInfluence);
        const velocityEffect = mouseEffect * (velocityRef.current.y * 0.2);
        
        const y = Math.sin((i * frequency + customTime) / 100) * amplitude +
                 Math.sin((i * frequency * 0.5 + customTime * 1.5) / 100) * (amplitude * 0.5) +
                 velocityEffect;
        
        points.push([i, height / 2 + y + offset]);
      }

      // Smooth curve through points
      ctx.moveTo(points[0][0], points[0][1]);
      for (let i = 0; i < points.length - 1; i++) {
        const xc = (points[i][0] + points[i + 1][0]) / 2;
        const yc = (points[i][1] + points[i + 1][1]) / 2;
        ctx.quadraticCurveTo(points[i][0], points[i][1], xc, yc);
      }

      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      
      const gradient = ctx.createLinearGradient(0, height/2, width, height);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, color + '00');
      
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const updateParticles = () => {
      particlesRef.current = particlesRef.current.filter(p => p.life > 0.1);
      
      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // gravity
        p.life *= 0.95;
        p.size *= 0.97;
      });
    };

    const drawParticles = (ctx: CanvasRenderingContext2D) => {
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      
      particlesRef.current.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.life * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });
      
      ctx.restore();
    };

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      updateParticles();
      
      // Draw base waves
      ctx.globalAlpha = 0.6;
      for (let i = 0; i < 3; i++) {
        drawWave(
          ctx, 
          canvas.width, 
          canvas.height, 
          2 + i * 0.5, 
          '#00FFE0', 
          40 - i * 5, 
          -20 + i * 20, 
          time * (0.8 + i * 0.2)
        );
        
        drawWave(
          ctx, 
          canvas.width, 
          canvas.height, 
          2.5 + i * 0.5, 
          '#BD00FF', 
          45 - i * 5, 
          40 + i * 20, 
          -time * (0.9 + i * 0.2)
        );
      }

      // Draw particles on top
      drawParticles(ctx);

      time += 0.5;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
      style={{ background: 'black', cursor: 'pointer' }}
      aria-hidden="true"
    />
  );
};

export default InteractiveWaveGradient;