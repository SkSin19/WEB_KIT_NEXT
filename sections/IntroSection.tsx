export default function IntroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-32 bg-[#0a0a0a]">
      <div className="max-w-3xl text-center">
        <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase mb-8">
          Our Philosophy
        </p>
        <h2
          className="text-white text-3xl md:text-5xl font-light leading-relaxed mb-10"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          A Window to Enchanting
          <br />
          Destinations
        </h2>
        <div
          className="w-12 h-px bg-white/20 mx-auto mb-10"
        />
        <p className="text-white/40 text-sm md:text-base leading-loose max-w-2xl mx-auto">
          The path to discovery is limitless, revealing breathtaking landscapes
          and exotic holiday destinations waiting to be explored. Every journey
          starts with curiosity, and Travel Next Level provides travel
          destination inspiration to help you plan where to travel next and
          create unforgettable experiences.
        </p>
        <a
          href="/destinations"
          className="inline-block mt-12 text-white/60 hover:text-white text-[10px] tracking-[0.4em] uppercase border-b border-white/20 hover:border-white/60 pb-1 transition-all duration-300"
        >
          Explore Now
        </a>
      </div>
    </section>
  );
}