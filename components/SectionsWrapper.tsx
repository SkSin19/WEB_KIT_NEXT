'use client';

export default function SectionsWrapper() {
  return (
    <div className="min-h-screen w-full bg-[#0b1220] text-white">
      {/* Section 1 */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="text-white/50 uppercase tracking-[0.35em] text-xs mb-4">
          Welcome
        </p>
        <h2
          className="text-4xl md:text-6xl font-light leading-tight"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Travel Beyond
          <br />
          the Ordinary
        </h2>
        <p className="mt-6 max-w-2xl text-white/60 text-sm md:text-base leading-7">
          Explore handpicked destinations, unforgettable experiences, and
          journeys designed to awaken curiosity.
        </p>
      </section>

      {/* Section 2 */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-[#0f172a]">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-4">
              Featured Escapes
            </p>
            <h3
              className="text-3xl md:text-5xl font-light leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Hidden gems,
              <br />
              timeless stories
            </h3>
            <p className="mt-6 text-white/60 leading-7">
              From quiet coastal villages to mountain sanctuaries, discover
              places that feel personal, cinematic, and unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="h-56 rounded-2xl bg-white/10 backdrop-blur-sm" />
            <div className="h-72 rounded-2xl bg-white/10 backdrop-blur-sm mt-10" />
            <div className="h-72 rounded-2xl bg-white/10 backdrop-blur-sm -mt-8" />
            <div className="h-56 rounded-2xl bg-white/10 backdrop-blur-sm" />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-[#111827]">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-14">
            <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-4">
              Experiences
            </p>
            <h3
              className="text-3xl md:text-5xl font-light"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Crafted for wonder
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Mountain Retreats',
                text: 'Wake up above the clouds with immersive stays surrounded by silence and breathtaking views.',
              },
              {
                title: 'Coastal Escapes',
                text: 'Experience golden shores, hidden coves, and sea-facing stays curated for calm and beauty.',
              },
              {
                title: 'Cultural Journeys',
                text: 'Walk through history, local traditions, and meaningful places that stay with you long after.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
              >
                <h4 className="text-2xl font-light mb-4">{item.title}</h4>
                <p className="text-white/60 leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-[#0b1220]">
        <div className="max-w-3xl text-center">
          <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-4">
            Begin your journey
          </p>
          <h3
            className="text-4xl md:text-6xl font-light leading-tight"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Where will the next door
            <br />
            take you?
          </h3>
          <p className="mt-6 text-white/60 leading-7">
            Discover extraordinary destinations and stories waiting just beyond
            the threshold.
          </p>

          <button className="mt-10 rounded-full border border-white/20 px-8 py-3 text-sm uppercase tracking-[0.25em] text-white/80 hover:bg-white hover:text-black transition">
            Explore Now
          </button>
        </div>
      </section>
    </div>
  );
}