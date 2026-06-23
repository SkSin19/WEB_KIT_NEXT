'use client';

import { useRef, useEffect } from 'react';

const destinations = [
  {
    name: 'Banff National Park',
    location: 'Alberta, Canada',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80',
  },
  {
    name: 'Cancún',
    location: 'Quintana Roo, Mexico',
    img: 'https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=600&q=80',
  },
  {
    name: 'Ko Samui',
    location: 'Surat Thani, Thailand',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
  },
  {
    name: 'Cappadocia',
    location: 'Central Anatolia, Turkey',
    img: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=600&q=80',
  },
  {
    name: 'Tayrona National Park',
    location: 'Santa Marta, Colombia',
    img: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&q=80',
  },
  {
    name: 'Santorini',
    location: 'Cyclades, Greece',
    img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
  },
  {
    name: 'Maldives',
    location: 'Indian Ocean',
    img: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80',
  },
];

export default function DestinationsStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX;
      scrollStart.current = track.scrollLeft;
      track.style.cursor = 'grabbing';
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      track.scrollLeft = scrollStart.current - (e.pageX - startX.current);
    };
    const onMouseUp = () => {
      isDragging.current = false;
      track.style.cursor = 'grab';
    };

    track.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      track.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <section className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-10">
        <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase mb-4">
          Drag to navigate
        </p>
        <h2
          className="text-white text-2xl md:text-4xl font-light"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Hidden Gem Places That Defy Imagination
        </h2>
      </div>

      {/* Drag strip */}
      <div
        ref={trackRef}
        className="flex gap-4 px-8 overflow-x-auto select-none"
        style={{
          cursor: 'grab',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {destinations.map((d, i) => (
          <div
            key={i}
            className="flex-shrink-0 relative group overflow-hidden rounded-sm"
            style={{ width: 280, height: 380 }}
          >
            <img
              src={d.img}
              alt={d.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              draggable={false}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)',
              }}
            />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-white/50 text-[10px] tracking-widest uppercase mb-1">
                {d.location}
              </p>
              <p
                className="text-white text-lg font-light"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {d.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}