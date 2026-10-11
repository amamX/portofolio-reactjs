import { useEffect, useRef } from "react";

/**
 * Komponen KineticGridBackground:
 * Background interaktif berbasis canvas dengan konsep Kinetic Grid:
 * - Titik-titik grid (dots) dan garis penghubung (lines).
 * - Saat kursor bergerak (mouse move), grid akan melengkung/warp mendekati posisi kursor.
 * - Saat pengguna mengklik di mana saja (click/tap), menghasilkan gelombang riak (ripple effect)
 *   yang menyebar melingkar ke seluruh grid.
 * - Mendukung tema gelap berkelas (dark mode) dengan titik dan garis berpendar biru/cyan lembut.
 */
export default function KineticGridBackground({
  gridSize = 48,
  dotSize = 1.8,
  warpRadius = 220,
  warpStrength = 42,
  gridColor = "rgba(148, 163, 184, 0.18)", // Slate subtle grid line
  dotColor = "rgba(100, 116, 139, 0.28)", // Slate dot
  activeDotColor = "rgba(14, 165, 233, 0.95)", // Sky blue glow
  activeLineColor = "rgba(56, 189, 248, 0.55)", // Cyan glow
  showLines = true,
  className = "",
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, isHovered: false });
  const ripplesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Tangani perubahan ukuran window
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Pergerakan mouse dengan interpolasi mulus (damping lerp)
    const handleMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovered = false;
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    // Efek ripple saat klik
    const handleClick = (e) => {
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: Math.max(width, height) * 0.45,
        speed: 7,
        amplitude: 22,
        decay: 0.965,
        alpha: 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);

    // Loop animasi requestAnimationFrame
    const render = () => {
      // Lerp mouse coordinates untuk transisi warping yang sangat mulus
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      // Update ripples
      const activeRipples = ripplesRef.current;
      for (let r = activeRipples.length - 1; r >= 0; r--) {
        const ripple = activeRipples[r];
        ripple.radius += ripple.speed;
        ripple.amplitude *= ripple.decay;
        ripple.alpha *= ripple.decay;

        if (ripple.radius > ripple.maxRadius || ripple.amplitude < 0.2) {
          activeRipples.splice(r, 1);
        }
      }

      // Hitung baris dan kolom grid
      const cols = Math.ceil(width / gridSize) + 2;
      const rows = Math.ceil(height / gridSize) + 2;

      // Hitung posisi setiap titik (warped positions)
      const points = [];

      for (let i = 0; i < cols; i++) {
        points[i] = [];
        const baseX = i * gridSize;

        for (let j = 0; j < rows; j++) {
          const baseY = j * gridSize;

          let warpedX = baseX;
          let warpedY = baseY;
          let intensity = 0;

          // 1. Interaksi Kursor: Warp gravitasi ke arah kursor
          if (mouse.x > 0 && mouse.y > 0) {
            const dx = mouse.x - baseX;
            const dy = mouse.y - baseY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < warpRadius && dist > 0) {
              const force = (1 - dist / warpRadius) * warpStrength;
              // Tarik grid ke arah kursor
              warpedX += (dx / dist) * force;
              warpedY += (dy / dist) * force;
              intensity = Math.max(intensity, 1 - dist / warpRadius);
            }
          }

          // 2. Interaksi Klik: Gelombang Riak (Sinusoidal Ripple)
          for (let r = 0; r < activeRipples.length; r++) {
            const ripple = activeRipples[r];
            const rdx = baseX - ripple.x;
            const rdy = baseY - ripple.y;
            const rDist = Math.sqrt(rdx * rdx + rdy * rdy);
            const distDiff = Math.abs(rDist - ripple.radius);

            const waveWidth = 60;
            if (distDiff < waveWidth && rDist > 0) {
              const wave = Math.sin((distDiff / waveWidth) * Math.PI) * ripple.amplitude;
              warpedX += (rdx / rDist) * wave;
              warpedY += (rdy / rDist) * wave;
              intensity = Math.max(intensity, (1 - distDiff / waveWidth) * ripple.alpha * 0.8);
            }
          }

          points[i][j] = {
            x: warpedX,
            y: warpedY,
            intensity,
          };
        }
      }

      // Render Garis Grid (Horisontal & Vertikal)
      if (showLines) {
        ctx.lineWidth = 1;

        // Garis Horisontal
        for (let j = 0; j < rows; j++) {
          ctx.beginPath();
          for (let i = 0; i < cols; i++) {
            const pt = points[i][j];
            if (i === 0) {
              ctx.moveTo(pt.x, pt.y);
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          }
          ctx.strokeStyle = gridColor;
          ctx.stroke();
        }

        // Garis Vertikal
        for (let i = 0; i < cols; i++) {
          ctx.beginPath();
          for (let j = 0; j < rows; j++) {
            const pt = points[i][j];
            if (j === 0) {
              ctx.moveTo(pt.x, pt.y);
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          }
          ctx.strokeStyle = gridColor;
          ctx.stroke();
        }

        // Render Garis dengan Efek Pendar (Glow) di sekitar kursor
        for (let i = 0; i < cols - 1; i++) {
          for (let j = 0; j < rows - 1; j++) {
            const p1 = points[i][j];
            const p2 = points[i + 1][j];
            const p3 = points[i][j + 1];

            // Garis horisontal dekat kursor
            const avgIntH = (p1.intensity + p2.intensity) / 2;
            if (avgIntH > 0.05) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = activeLineColor;
              ctx.lineWidth = 1 + avgIntH * 1.5;
              ctx.stroke();
            }

            // Garis vertikal dekat kursor
            const avgIntV = (p1.intensity + p3.intensity) / 2;
            if (avgIntV > 0.05) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p3.x, p3.y);
              ctx.strokeStyle = activeLineColor;
              ctx.lineWidth = 1 + avgIntV * 1.5;
              ctx.stroke();
            }
          }
        }
      }

      // Render Titik-Titik Grid (Dots)
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const pt = points[i][j];

          ctx.beginPath();
          const r = dotSize + pt.intensity * 2.2;
          ctx.arc(pt.x, pt.y, r, 0, Math.PI * 2);

          if (pt.intensity > 0.05) {
            ctx.fillStyle = activeDotColor;
            // Efek shadow pendar neon
            ctx.shadowColor = activeDotColor;
            ctx.shadowBlur = pt.intensity * 8;
          } else {
            ctx.fillStyle = dotColor;
            ctx.shadowBlur = 0;
          }
          ctx.fill();
        }
      }
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
    };
  }, [gridSize, dotSize, warpRadius, warpStrength, gridColor, dotColor, activeDotColor, activeLineColor, showLines]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ display: "block" }}
    />
  );
}
