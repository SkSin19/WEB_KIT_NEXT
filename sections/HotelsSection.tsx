const hotels = [
  {
    name: 'Rubi Tulum',
    location: 'Cancún, Mexico',
    price: '$264/night',
    img: 'https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=800&q=80',
    tag: 'Luxury',
  },
  {
    name: 'Hotel Wings Cappadocia',
    location: 'Central Anatolia, Turkey',
    price: '$113/night',
    img: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800&q=80',
    tag: 'Unique',
  },
  {
    name: 'Atlantis, The Palm',
    location: 'Dubai, UAE',
    price: '$416/night',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    tag: 'Iconic',
  },
  {
    name: 'Siyam World Maldives',
    location: 'North Meemu Atoll, Maldives',
    price: '$904/night',
    img: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80',
    tag: 'Ultra-Luxury',
  },
  {
    name: 'Purana Suite Ubud',
    location: 'Bali, Indonesia',
    price: '$109/night',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    tag: 'Boutique',
  },
  {
    name: 'Sentido Pearl Beach Kos',
    location: 'Kos, Greece',
    price: '$120/night',
    img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    tag: 'Beach',
  },
];

export default function HotelsSection() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase mb-4">
              Handpicked Stays
            </p>
            <h2
              className="text-white text-2xl md:text-4xl font-light"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Where Comfort
              <br />
              Meets Adventure
            </h2>
          </div>
          <a
            href="/hotels"
            className="hidden md:inline-block text-white/40 hover:text-white text-[10px] tracking-widest uppercase border-b border-white/20 hover:border-white/50 pb-1 transition-all duration-300"
          >
            Explore Hotels
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, i) => (
            <div key={i} className="group relative overflow-hidden rounded-sm cursor-pointer">
              <div style={{ height: i === 0 || i === 3 ? 480 : 360 }}>
                <img
                  src={hotel.img}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Gradient */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
                }}
              />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="text-white/60 text-[9px] tracking-widest uppercase border border-white/20 px-3 py-1.5">
                  {hotel.tag}
                </span>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/40 text-[10px] tracking-widest uppercase mb-1">
                  {hotel.location}
                </p>
                <p
                  className="text-white text-lg font-light mb-2"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {hotel.name}
                </p>
                <p className="text-white/50 text-xs tracking-wider">
                  From {hotel.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}