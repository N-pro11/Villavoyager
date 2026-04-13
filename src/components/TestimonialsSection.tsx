import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    title: "Great..... Highly recommend the properties",
    text: "The stay was absolutely beautiful. The villa was clean, well-maintained, and exactly like the pictures. The pool area was our favorite spot — peaceful and perfect for relaxing evenings.",
    name: "Lisa",
    location: "New York City, NY",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    title: "An unforgettable experience for the family",
    text: "We celebrated our anniversary here and it was pure magic. The staff went above and beyond, arranging a private dinner on the beach. Truly a once-in-a-lifetime experience.",
    name: "James",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    title: "Paradise found — will definitely return",
    text: "The stay was absolutely beautiful. The villa was clean, well-maintained, and exactly like the pictures. The pool area was our favorite spot — peaceful and perfect for relaxing evenings.",
    name: "Sarah",
    location: "Sydney, Australia",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    title: "Luxury beyond our expectations",
    text: "From the moment we arrived, every detail was perfect. The private chef prepared incredible local cuisine and the spa treatments were world-class.",
    name: "Michael",
    location: "Toronto, Canada",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    title: "A hidden gem we'll never forget",
    text: "Secluded yet accessible, the villa offered the perfect balance of privacy and adventure. The sunrise views from the infinity pool were absolutely breathtaking.",
    name: "Amara",
    location: "Dubai, UAE",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Show 3 cards starting from current (wrapping)
  const getVisible = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(current + i) % testimonials.length]);
    }
    return items;
  };

  const visible = getVisible();

  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Loved. By those who've stayed.
          </h2>
          <p className="font-inter text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            The stay was absolutely beautiful. The villa was clean, well-maintained, and exactly like the pictures.
          </p>
        </div>

        {/* Cards */}
        <div className="relative">
          <AnimatePresence mode="popLayout" initial={false}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visible.map((t, i) => (
                <motion.div
                  key={`${current}-${i}`}
                  initial={{ opacity: 0, x: direction * 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -100 }}
                  transition={{ duration: 0.4, ease: "easeInOut", delay: i * 0.05 }}
                  className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <h3 className="font-playfair text-lg font-semibold text-foreground mb-3">
                    {t.title}
                  </h3>

                  <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-6">
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-inter text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="font-inter text-xs text-muted-foreground">{t.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronLeft size={18} className="text-foreground" />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary scale-125" : "bg-border hover:bg-muted-foreground"}`}
                />
              ))}
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronRight size={18} className="text-foreground" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
