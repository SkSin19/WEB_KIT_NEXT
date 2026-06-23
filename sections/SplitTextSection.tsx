'use client';

import { useRef } from 'react';

const panels = [
  {
    label: 'Adventure',
    heading: 'Where Nature\nMeets Adventure',
    sub: 'Travel to places where the beauty of nature and the human wonder meet in absolute harmony. Let your curiosity guide you to the best adventure travel destinations.',
    bg: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80',
  },
  {
    label: 'Discovery',
    heading: 'Where the Sky\nMeets the Earth',
    sub: 'Travel to places where nature\'s beauty and human wonder come together in perfect harmony. Let your curiosity guide you to new heights and breathtaking destinations.',
    bg: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1400&q=80',
  },
];

export default function SplitTextSection() {
  return (
    <>
      {panels.map((panel, i) => (
        <section
          key={i}
          className="relative min-h-screen flex items-end overflow-hidden"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
            style={{ backgroundImage: `url('${panel.bg}')` }}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pb-20 md:pb-28 w-full">
            <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase mb-6">
              {panel.label}
            </p>
            <h2
              className="text-white text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 whitespace-pre-line"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {panel.heading}
            </h2>
            <p className="text-white/50 text-sm leading-loose max-w-lg">
              {panel.sub}
            </p>
          </div>
        </section>
      ))}
    </>
  );
}