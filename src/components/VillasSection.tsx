import { useState, useCallback, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";

const villas = [
  {
    name: "Balinese Premium Villas",
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600&q=80",
    duration: "2 days",
    rating: 4.9,
  },
  {
    name: "Ubud Tropical Retreat",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80",
    duration: "3 days",
    rating: 4.8,
  },
  {
    name: "Seminyak Beachfront Villa",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
    duration: "2 days",
    rating: 4.9,
  },
  {
    name: "Nusa Dua Oceanview",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    duration: "4 days",
    rating: 4.7,
  },
  {
    name: "Canggu Surf Villa",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    duration: "3 days",
    rating: 4.8,
  },
];

const CARD_W = 340;
const GAP = 28;

const VillasSection = () => {
  const [active, setActive] = useState(0);
  const touchX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const updateWidth = useCallback(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [updateWidth]);

  const go = useCallback((dir: 1 | -1) => {
    setActive((p) => Math.max(0, Math.min(villas.length - 1, p + dir)));
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const d = touchX.current - e.changedTouches[0].clientX;
    if (Math.abs(d) > 50) go(d > 0 ? 1 : -1);
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Villas
          </h2>
          <p className="font-inter text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">
            Handpicked luxury retreats in the world's most exclusive destinations.
            Each villa is a masterpiece of design and comfort.
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="relative"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="flex items-center" style={{ minHeight: 480 }}>
            <div
              className="flex"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(${containerWidth / 2 - CARD_W / 2 - active * (CARD_W + GAP)}px)`,
                transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {villas.map((villa, i) => {
                const isActive = i === active;
                const dist = Math.abs(i - active);

                return (
                  <div
                    key={villa.name}
                    onClick={() => setActive(i)}
                    className="shrink-0 cursor-pointer"
                    style={{
                      width: CARD_W,
                      transform: isActive
                        ? "scale(1.03)"
                        : `scale(${Math.max(0.9, 1 - dist * 0.05)})`,
                      opacity: isActive ? 1 : Math.max(0.5, 1 - dist * 0.25),
                      transition:
                        "transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.7s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  >
                    {/* Outer shell — soft shadow + border */}
                    <div
                      className="rounded-[26px] border border-border/50 overflow-hidden"
                      style={{
                        boxShadow: isActive
                          ? "0 18px 44px -10px hsl(var(--foreground) / 0.12), 0 6px 16px -6px hsl(var(--foreground) / 0.08)"
                          : "0 6px 20px -6px hsl(var(--foreground) / 0.06)",
                        transition: "box-shadow 0.7s cubic-bezier(0.4,0,0.2,1)",
                      }}
                    >
                      {/* Inner thick light frame */}
                      <div className="p-[7px] bg-card rounded-[26px]">
                        <div className="relative rounded-[20px] overflow-hidden aspect-[3/4]">
                          <img
                            src={villa.image}
                            alt={villa.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />

                          {/* Bottom gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                          {/* Info overlay */}
                          <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-12">
                            <h3 className="font-playfair text-lg font-semibold text-white mb-2 leading-snug drop-shadow-md">
                              {villa.name}
                            </h3>
                            <div className="flex items-center gap-4 text-xs font-inter text-white/85">
                              <span className="flex items-center gap-1">
                                <Clock size={13} />
                                {villa.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <Star size={13} className="fill-amber-400 text-amber-400" />
                                {villa.rating}/5
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => go(-1)}
            disabled={active === 0}
            className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30"
          >
            <ChevronLeft size={18} className="text-foreground" />
          </motion.button>

          <div className="flex items-center gap-2">
            {villas.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-full transition-all duration-500"
                style={{
                  width: i === active ? 22 : 7,
                  height: 7,
                  background:
                    i === active
                      ? "hsl(var(--primary))"
                      : "hsl(var(--muted-foreground) / 0.25)",
                }}
              />
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => go(1)}
            disabled={active === villas.length - 1}
            className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30"
          >
            <ChevronRight size={18} className="text-foreground" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default VillasSection;
