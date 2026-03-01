import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  hue: number;
  life: number;
  maxLife: number;
}

const SparkleCanvas = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: 0,
      hue: [42, 280, 320, 200][Math.floor(Math.random() * 4)],
      life: 0,
      maxLife: Math.random() * 200 + 100,
    });

    for (let i = 0; i < 40; i++) {
      const p = createParticle();
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.life++;
        p.x += p.speedX;
        p.y += p.speedY;

        const progress = p.life / p.maxLife;
        p.opacity = progress < 0.3 ? progress / 0.3 : progress > 0.7 ? (1 - progress) / 0.3 : 1;

        ctx.save();
        ctx.globalAlpha = p.opacity * 0.7;
        ctx.fillStyle = `hsl(${p.hue}, 80%, 70%)`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsl(${p.hue}, 80%, 70%)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw star shape for some
        if (p.size > 2) {
          ctx.beginPath();
          for (let j = 0; j < 4; j++) {
            const angle = (j * Math.PI) / 2;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x + Math.cos(angle) * p.size * 3, p.y + Math.sin(angle) * p.size * 3);
          }
          ctx.strokeStyle = `hsl(${p.hue}, 80%, 80%)`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
        ctx.restore();

        if (p.life >= p.maxLife) {
          particles[i] = createParticle();
        }
      });

      animId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default SparkleCanvas;
