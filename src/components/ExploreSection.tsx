import { useEffect, useRef, useState } from "react";

const ExploreSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;

      const progress = Math.max(0, Math.min(1,
        (windowHeight - rect.top) / (windowHeight + sectionHeight)
      ));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textTranslateY = (scrollProgress - 0.35) * 600;

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80')`,
          backgroundAttachment: "fixed",
        }}
      />

      <div className="absolute inset-0 bg-black/20" />

      {/* EXPLORE text — more opaque */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform"
        style={{
          transform: `translateY(${textTranslateY}px)`,
        }}
      >
        <h2
          className="font-playfair font-black text-white/70 tracking-[0.2em] select-none whitespace-nowrap"
          style={{
            fontSize: "clamp(6rem, 18vw, 20rem)",
            lineHeight: 1,
            textShadow: "0 4px 80px rgba(0,0,0,0.5)",
          }}
        >
          EXPLORE
        </h2>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-[55%] bg-cover bg-bottom pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80')`,
          backgroundAttachment: "fixed",
          maskImage: "linear-gradient(to top, black 50%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 50%, transparent 100%)",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default ExploreSection;
