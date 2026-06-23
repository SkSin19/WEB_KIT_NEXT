'use client';

import { useRef, useEffect } from 'react';

const articles = [
  {
    title: 'Travel to Bali: Top 10 Hotels and Activities',
    category: 'Travel Guides',
    date: 'November 8, 2025',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
  },
  {
    title: 'Swimming with Pigs in the Crystal Clear Waters of the Bahamas',
    category: 'Experiences',
    date: 'November 8, 2025',
    img: 'https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=600&q=80',
  },
  {
    title: 'Travel to Dubai: Top 10 Hotels and Activities',
    category: 'Travel Guides',
    date: 'November 2, 2025',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
  },
  {
    title: 'Crystal Clear Waters: Dream Destinations Around the World',
    category: 'Inspiration',
    date: 'November 6, 2025',
    img: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80',
  },
  {
    title: 'Hidden Gem Kos, Greece: Pure Relaxation with Swim-Up Pools',
    category: 'Hidden Gems',
    date: 'November 8, 2025',
    img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
  },
  {
    title: 'The Most Beautiful Beaches and Resorts in the Maldives',
    category: 'Luxury',
    date: 'November 4, 2025',
    img: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&q=80',
  },
];

export default function LatestArticles() {
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
    <section className="py-24 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-10 flex items-end justify-between">
        <div>
          <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase mb-4">
            Drag to navigate
          </p>
          <h2
            className="text-white text-2xl md:text-4xl font-light"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Latest Articles
          </h2>
        </div>
        <a
          href="/blog"
          className="hidden md:inline-block text-white/40 hover:text-white text-[10px] tracking-widest uppercase border-b border-white/20 hover:border-white/50 pb-1 transition-all duration-300"
        >
          View All
        </a>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 px-8 overflow-x-auto select-none"
        style={{ cursor: 'grab', scrollbarWidth: 'none' }}
      >
        {articles.map((a, i) => (
          <div
            key={i}
            className="flex-shrink-0 group"
            style={{ width: 320 }}
          >
            <div className="overflow-hidden rounded-sm mb-5" style={{ height: 220 }}>
              <img
                src={a.img}
                alt={a.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                draggable={false}
              />
            </div>
            <p className="text-white/30 text-[10px] tracking-widest uppercase mb-2">
              {a.category} · {a.date}
            </p>
            <h3
              className="text-white/80 text-base font-light leading-snug group-hover:text-white transition-colors duration-300"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {a.title}
            </h3>
            <a
              href="/blog"
              className="inline-block mt-4 text-white/30 hover:text-white text-[10px] tracking-widest uppercase border-b border-white/10 hover:border-white/40 pb-1 transition-all duration-300"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}