'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { ProgressBar, ProgressTrack } from './TopScroller.styles';

const EASE = 0.18;

export const TopScroller: React.FC = () => {
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const measure = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        window.document.documentElement.scrollHeight - window.innerHeight;
      targetRef.current =
        docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
    };

    const tick = () => {
      const target = targetRef.current;
      const current = currentRef.current;
      const next = current + (target - current) * EASE;

      // Snap when close enough to avoid endless micro-updates
      currentRef.current = Math.abs(target - next) < 0.0005 ? target : next;

      const bar = barRef.current;
      if (bar) {
        bar.style.transform = `scaleX(${currentRef.current})`;
        bar.setAttribute(
          'aria-valuenow',
          String(Math.round(currentRef.current * 100))
        );
      }

      if (currentRef.current !== target) {
        frameRef.current = window.requestAnimationFrame(tick);
      } else {
        frameRef.current = null;
      }
    };

    const schedule = () => {
      measure();
      if (frameRef.current == null) {
        frameRef.current = window.requestAnimationFrame(tick);
      }
    };

    // Reset smoothly when route changes
    currentRef.current = 0;
    targetRef.current = 0;
    if (barRef.current) {
      barRef.current.style.transform = 'scaleX(0)';
    }

    measure();
    schedule();

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frameRef.current != null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [pathname]);

  return (
    <>
      <ProgressTrack aria-hidden="true" />
      <ProgressBar
        ref={barRef}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
        aria-label="Page scroll progress"
      />
    </>
  );
};
