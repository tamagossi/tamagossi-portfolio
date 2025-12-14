'use client';

import { StarsBackground } from '@/shared/backgrounds/StarsBackground';
import { ChevronDown } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

export default function HeroSection() {
  const helloText = useMemo(() => 'Hello, World', []);
  const tamaText = useMemo(() => 'I am Tama...', []);

  const [showHello, setShowHello] = useState(true);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [typedHello, setTypedHello] = useState('');
  const [typedSecond, setTypedSecond] = useState('');
  const [showWave, setShowWave] = useState(false);
  const [showCta, setShowCta] = useState(false);
  const [lockScroll, setLockScroll] = useState(true);

  useEffect(() => {
    let i = 0;
    const intervalId = window.setInterval(() => {
      i += 1;
      setTypedHello(helloText.slice(0, i));
      if (i >= helloText.length) {
        window.clearInterval(intervalId);
        setShowWave(true);
        const pauseTimer = window.setTimeout(() => {
          setShowHello(false);
          setShowSecond(true);
        }, 2000);
        return () => window.clearTimeout(pauseTimer);
      }
    }, 80);
    return () => window.clearInterval(intervalId);
  }, [helloText]);

  useEffect(() => {
    if (!showSecond) return;
    let i = 0;
    const intervalId = window.setInterval(() => {
      i += 1;
      setTypedSecond(tamaText.slice(0, i));
      if (i >= tamaText.length) {
        window.clearInterval(intervalId);
        const t = window.setTimeout(() => setShowThird(true), 1500);
        return () => window.clearTimeout(t);
      }
    }, 80);
    return () => window.clearInterval(intervalId);
  }, [showSecond, tamaText]);

  useEffect(() => {
    if (!showThird) return;
    const t = window.setTimeout(() => setShowCta(true), 800);
    return () => window.clearTimeout(t);
  }, [showThird]);

  useEffect(() => {
    const prevent = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };
    if (lockScroll) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('wheel', prevent as EventListener, { passive: false });
      window.addEventListener('touchmove', prevent as EventListener, { passive: false });
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('wheel', prevent as EventListener);
      window.removeEventListener('touchmove', prevent as EventListener);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('wheel', prevent as EventListener);
      window.removeEventListener('touchmove', prevent as EventListener);
    };
  }, [lockScroll]);

  return (
    <StarsBackground>
      <div className="relative min-h-screen flex flex-col justify-center items-center p-6 text-white text-center">
        {showHello && (
          <h1
            aria-live="polite"
            className="mx-auto max-w-[50ch] text-balance text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight z-10"
            data-testid="hero-hello-heading"
          >
            <span>{typedHello}</span>
            {showWave && (
              <span className="wave-hand fade-in" role="img" aria-label="waving hand">
                👋
              </span>
            )}
          </h1>
        )}

        {showSecond && (
          <p
            aria-live="polite"
            className="fade-in mx-auto mt-4 max-w-[55ch] text-balance text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            data-testid="hero-subtitle"
          >
            {typedSecond}
          </p>
        )}

        {showThird && (
          <p
            className="fade-up mx-auto mt-3 max-w-[65ch] text-balance antialiased text-2xl md:text-3xl font-medium leading-relaxed text-zinc-300"
            data-testid="hero-role"
          >
            Sometimes I sleep. Mostly, I ship.
          </p>
        )}

        {showCta && (
          <a
            href="#build"
            className="fade-up group absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full border border-zinc-800/50 bg-zinc-900/60 px-4 py-2 text-sm md:text-base text-white shadow-md backdrop-blur-sm transition hover:bg-zinc-800/70 focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Jump to What I build"
            data-testid="cta-what-i-build"
            aria-controls="build"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('build');
              setLockScroll(false);
              el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            <ChevronDown className="h-5 w-5 animate-bounce" />
            <span>What I build</span>
          </a>
        )}
      </div>
    </StarsBackground>
  );
}
