'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.pause();

    let ctx: gsap.Context;
    let lastTime = -1;

    const init = () => {
      ctx = gsap.context(() => {
        const proxy = { t: 0 };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: '+=260%',
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            pinSpacing: true,
          },
        });

        // Initial states
        gsap.set(titleRef.current, { opacity: 1, y: 0, scale: 1 });
        gsap.set(scrollHintRef.current, { opacity: 1, y: 0 });
        gsap.set(videoWrapRef.current, { scale: 1 });

        // ===== VIDEO SCRUB =====
        tl.to(proxy, {
          t: 1,
          duration: 10,
          ease: 'none',
          onUpdate: () => {
            if (!video.duration) return;

            const targetTime = proxy.t * video.duration;

            // reduce excessive seeking
            if (Math.abs(targetTime - lastTime) > 0.03) {
              video.currentTime = targetTime;
              lastTime = targetTime;
            }
          },
        }, 0);

        // ===== SUBTLE VIDEO ZOOM FOR CINEMATIC FEEL =====
        tl.to(
          videoWrapRef.current,
          {
            scale: 1.08,
            ease: 'none',
            duration: 10,
          },
          0
        );

        // ===== TITLE FADE OUT NICER =====
        tl.to(
          titleRef.current,
          {
            opacity: 0,
            y: -40,
            scale: 0.96,
            duration: 2,
            ease: 'power2.out',
          },
          0.2
        );

        // ===== SCROLL HINT DISAPPEARS QUICKLY =====
        tl.to(
          scrollHintRef.current,
          {
            opacity: 0,
            y: 10,
            duration: 0.8,
            ease: 'power2.out',
          },
          0
        );
      }, container);
    };

    if (video.readyState >= 2) {
      init();
    } else {
      video.addEventListener('loadedmetadata', init, { once: true });
    }

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Video wrapper so we can scale it */}
      <div
        ref={videoWrapRef}
        className="absolute inset-0 will-change-transform"
      >
        <video
          ref={videoRef}
          src="/scrollVideos/old-stone-gate.mp4"
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
          onPlay={(e) => e.currentTarget.pause()}
        />
      </div>

      {/* Main vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(0,0,0,0.08) 0%,
              rgba(0,0,0,0.18) 35%,
              rgba(0,0,0,0.45) 70%,
              rgba(0,0,0,0.7) 100%
            )
          `,
        }}
      />

      {/* CENTER DARKENING LAYER — this hides the green middle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(0,0,0,0.45) 0%,
              rgba(0,0,0,0.28) 22%,
              rgba(0,0,0,0.08) 45%,
              rgba(0,0,0,0) 70%
            )
          `,
          mixBlendMode: 'multiply',
        }}
      />

      {/* Optional cool tint to make it feel less green */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(8,15,30,0.28), rgba(8,15,30,0.18), rgba(0,0,0,0.32))',
        }}
      />

      {/* Hero title */}
      <div
        ref={titleRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
      >
        <p className="text-white/60 text-xs tracking-[0.4em] uppercase mb-6">
          Discover the World
        </p>

        <h1
          className="text-white text-4xl md:text-6xl lg:text-7xl font-light leading-tight"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Step Into a World
          <br />
          of Discoveries
        </h1>

        <p className="text-white/60 mt-6 text-sm tracking-wider max-w-md leading-7">
          Unique travel destinations await to spark curiosity and inspire your
          next adventure.
        </p>
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
      >
        <span className="text-white/55 text-[10px] tracking-[0.4em] uppercase">
          Scroll to enter
        </span>

        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          className="animate-bounce"
        >
          <path
            d="M4 7l6 6 6-6"
            stroke="white"
            strokeOpacity="0.55"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}