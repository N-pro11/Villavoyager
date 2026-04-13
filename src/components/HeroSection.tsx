import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "./SearchBar";

const slides = [
  {
    bg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
    card: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80",
    title: "INDONESIA",
    description:
      "Discover breathtaking villas nestled among Indonesia's pristine coastlines, lush rice terraces, and volcanic landscapes. Your luxury escape begins here.",
  },
  {
    bg: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80",
    card: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
    title: "BALI",
    description:
      "Immerse yourself in Bali's spiritual charm — from ancient temples and emerald jungles to world-class surf breaks and sunset clifftops.",
  },
  {
    bg: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80",
    card: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    title: "MALDIVES",
    description:
      "Crystal-clear lagoons, private overwater bungalows, and untouched coral reefs. Experience paradise redefined in the Maldives.",
  },
  {
    bg: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80",
    card: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    title: "THAILAND",
    description:
      "From Bangkok's golden spires to the turquoise waters of Phuket, Thailand offers an unforgettable blend of culture, cuisine, and coastline.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [liked, setLiked] = useState(false);

  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const slide = slides[current];

  return (
    <section className="relative h-screen flex flex-col overflow-hidden">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url('${s.bg}')`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

      {/* Vertical dot indicator */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full border border-white/60 transition-all ${
              i === current ? "bg-white scale-125" : "bg-transparent hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Main content area */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl w-full mx-auto px-6 lg:px-12 pt-20">
        {/* Left — Text */}
        <div className="flex-1 text-white max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-[1] mb-6 tracking-wide">
                {slide.title}
              </h1>
              <p className="font-inter text-sm leading-relaxed text-white/80 max-w-md mb-8">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground font-inter font-medium text-sm tracking-[0.1em] px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Book Now
          </motion.button>
        </div>

        {/* Center-right — Card Carousel */}
        <div className="hidden md:flex flex-col items-center gap-4">
          <div className="relative w-52 lg:w-60 h-[300px] lg:h-[360px] rounded-2xl overflow-hidden shadow-2xl">
            {slides.map((s, i) => (
              <img
                key={i}
                src={s.card}
                alt={`Destination ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              />
            ))}

            <button
              onClick={() => setLiked(!liked)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Heart size={14} className={liked ? "fill-red-500 text-red-500" : "text-white"} />
            </button>
          </div>

          {/* Arrows below card */}
          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={prev}
              className="w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-white/90 transition-colors"
            >
              <ChevronLeft size={16} className="text-foreground" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={next}
              className="w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-white/90 transition-colors"
            >
              <ChevronRight size={16} className="text-foreground" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 pb-6">
        <SearchBar variant="hero" />
      </div>
    </section>
  );
};

export default HeroSection;
