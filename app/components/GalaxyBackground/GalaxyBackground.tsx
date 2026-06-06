'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../hooks/useTheme';

/**
 * Interactive animated background: teal "galaxy" dots drifting across the
 * screen in three sizes — large soft glowing orbs, medium dots, and tiny
 * twinkling star dots. Reacts subtly to the cursor (parallax). No grid/lines.
 *
 * Theme accent teal is #0d9488 (kept consistent with the app theme).
 */

type Layer = 1 | 2 | 3;

interface Particle {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  vx: number;
  vy: number;
  layer: Layer; // 1 = far/small, 2 = medium, 3 = near/large glow
  twinkleSpeed: number;
  twinklePhase: number;
  color: RGB;
  glowColor: RGB;
}

interface RGB {
  r: number;
  g: number;
  b: number;
}

// Theme colours broken into channels so we can vary alpha freely.
const TEAL = { r: 13, g: 148, b: 136 };
const TEAL_LIGHT = { r: 45, g: 212, b: 191 }; // brighter teal for highlights
const YELLOW = { r: 253, g: 224, b: 110 }; // warm amber/yellow (theme accent)
const YELLOW_LIGHT = { r: 253, g: 230, b: 138 };

export const GalaxyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];

    // Pointer parallax target / eased value
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    const buildParticles = () => {
      // Scale particle count to viewport area, capped for performance.
      const area = width * height;
      const count = Math.min(420, Math.max(140, Math.round(area / 4500)));
      particles = [];
      for (let i = 0; i < count; i++) {
        // Distribute layers: mostly tiny stars, some medium, few big orbs.
        const roll = Math.random();
        let layer: Layer = 1;
        if (roll > 0.95) layer = 3;
        else if (roll > 0.78) layer = 2;

        // Smaller dots overall, with a tiny far layer.
        const r =
          layer === 3 ? rand(1.6, 2.8) : layer === 2 ? rand(0.8, 1.4) : rand(0.3, 0.8);

        // Mix teal and yellow dots (teal-dominant to keep the theme).
        const isYellow = Math.random() > 0.62;
        const baseC = isYellow ? YELLOW : TEAL;
        const glowC = isYellow ? YELLOW_LIGHT : TEAL_LIGHT;
        // Larger/nearer dots drift a touch faster (parallax depth).
        const speed = layer === 3 ? rand(0.10, 0.22) : layer === 2 ? rand(0.05, 0.13) : rand(0.02, 0.07);
        const angle = rand(0, Math.PI * 2);

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r,
          baseAlpha:
            layer === 3 ? rand(0.45, 0.8) : layer === 2 ? rand(0.3, 0.6) : rand(0.15, 0.5),
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          layer,
          twinkleSpeed: rand(0.4, 1.6),
          twinklePhase: rand(0, Math.PI * 2),
          color: baseC,
          glowColor: glowC,
        });
      }
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles();
    };

    const onPointerMove = (e: MouseEvent) => {
      // Normalised offset from center, -1..1
      pointer.tx = (e.clientX / width - 0.5) * 2;
      pointer.ty = (e.clientY / height - 0.5) * 2;
    };

    let last = 0;
    let raf = 0;

    const draw = (time: number) => {
      const dt = last ? Math.min((time - last) / 16.67, 3) : 1; // frames elapsed (~60fps base)
      last = time;

      // Ease pointer toward target for smooth parallax.
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;

      const isLight = themeRef.current === 'light';
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = isLight ? 'source-over' : 'lighter';

      const t = time / 1000;

      for (const p of particles) {
        if (!prefersReduced) {
          p.x += p.vx * dt;
          p.y += p.vy * dt;

          // Wrap around edges for an endless galaxy field.
          if (p.x < -5) p.x = width + 5;
          else if (p.x > width + 5) p.x = -5;
          if (p.y < -5) p.y = height + 5;
          else if (p.y > height + 5) p.y = -5;
        }

        // Twinkle
        const twinkle = prefersReduced
          ? 1
          : 0.65 + 0.35 * Math.sin(t * p.twinkleSpeed + p.twinklePhase);

        // Parallax: nearer (larger) layers shift more with the pointer.
        const depth = p.layer === 3 ? 26 : p.layer === 2 ? 14 : 6;
        const px = p.x - pointer.x * depth;
        const py = p.y - pointer.y * depth;

        const alpha = Math.min(1, p.baseAlpha * twinkle * (isLight ? 0.7 : 1));
        const c = p.layer === 3 ? p.glowColor : p.color;

        if (p.layer === 3) {
          // Soft glowing orb (galaxy feel) via radial gradient.
          const g = p.color;
          const glow = ctx.createRadialGradient(px, py, 0, px, py, p.r * 5);
          glow.addColorStop(0, `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha})`);
          glow.addColorStop(0.4, `rgba(${g.r}, ${g.g}, ${g.b}, ${alpha * 0.35})`);
          glow.addColorStop(1, `rgba(${g.r}, ${g.g}, ${g.b}, 0)`);
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(px, py, p.r * 5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Solid dot core.
        ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onPointerMove);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onPointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    />
  );
};
