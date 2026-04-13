import { useState } from "react";
import { ArrowRight } from "lucide-react";

const experiencesTabs = ["SPA & WELLNESS", "DINING", "EXPERIENCES", "ACCOMMODATIONS"];
const eventsTabs = ["WEDDINGS", "MEETINGS", "EVENTS"];

const experiencesData: Record<string, { title: string; desc: string; images: string[] }> = {
  "SPA & WELLNESS": {
    title: "Spa & Wellness",
    desc: "From ocean-view treatment rooms to private wellness sanctuaries, every experience at Havanza is a journey of rejuvenation and coastal elegance.",
    images: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80",
    ],
  },
  DINING: {
    title: "Fine Dining",
    desc: "Savor world-class cuisine prepared by renowned chefs, from beachside grills to candlelit fine dining under the stars.",
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
    ],
  },
  EXPERIENCES: {
    title: "Adventures",
    desc: "Explore hidden waterfalls, sunrise volcano treks, and private island tours curated exclusively for our guests.",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&q=80",
    ],
  },
  ACCOMMODATIONS: {
    title: "Accommodations",
    desc: "From ocean-view rooms to private pool suites, every accommodation is a sanctuary of luxury and coastal elegance.",
    images: [
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
    ],
  },
};

const eventsData: Record<string, { title: string; desc: string; images: string[] }> = {
  WEDDINGS: {
    title: "Weddings",
    desc: "From ocean-view ceremonies to private pool receptions, every wedding at Havanza is a celebration of love and coastal elegance.",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
    ],
  },
  MEETINGS: {
    title: "Corporate Meetings",
    desc: "State-of-the-art meeting facilities with stunning ocean views, perfect for inspiring your next big idea.",
    images: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    ],
  },
  EVENTS: {
    title: "Private Events",
    desc: "Host unforgettable celebrations in our exclusive venues, from intimate gatherings to grand galas.",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    ],
  },
};

const ExperiencesSection = () => {
  const [expTab, setExpTab] = useState("SPA & WELLNESS");
  const [evtTab, setEvtTab] = useState("WEDDINGS");

  const exp = experiencesData[expTab];
  const evt = eventsData[evtTab];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
        {/* Curated Experiences */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <p className="text-xs tracking-[0.2em] font-inter text-muted-foreground mb-2">1 / 4</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8">
              Curated<br />Experiences
            </h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-1 mb-8">
              {experiencesTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setExpTab(tab)}
                  className={`text-[10px] tracking-[0.15em] font-inter font-medium px-4 py-2 rounded-full transition-all ${
                    expTab === tab
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
              {exp.title}
            </h3>
            <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-6 max-w-md">
              {exp.desc}
            </p>
            <button className="flex items-center gap-2 text-sm font-inter font-medium text-primary hover:gap-3 transition-all">
              Learn more <ArrowRight size={16} />
            </button>
          </div>

          {/* Right - Overlapping Images */}
          <div className="relative h-[500px]">
            <div className="absolute top-0 right-0 w-[65%] h-[75%] rounded-2xl overflow-hidden shadow-xl">
              <img src={exp.images[0]} alt={exp.title} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-2xl overflow-hidden shadow-xl border-4 border-background">
              <img src={exp.images[1]} alt={exp.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Meetings & Events — Mirrored */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Overlapping Images (mirrored) */}
          <div className="relative h-[500px] order-2 lg:order-1">
            <div className="absolute top-0 left-0 w-[65%] h-[75%] rounded-2xl overflow-hidden shadow-xl">
              <img src={evt.images[0]} alt={evt.title} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-2xl overflow-hidden shadow-xl border-4 border-background">
              <img src={evt.images[1]} alt={evt.title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <p className="text-xs tracking-[0.2em] font-inter text-muted-foreground mb-2">1 / 4</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8">
              Meetings<br />& Events
            </h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-1 mb-8">
              {eventsTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setEvtTab(tab)}
                  className={`text-[10px] tracking-[0.15em] font-inter font-medium px-4 py-2 rounded-full transition-all ${
                    evtTab === tab
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
              {evt.title}
            </h3>
            <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-6 max-w-md">
              {evt.desc}
            </p>
            <button className="flex items-center gap-2 text-sm font-inter font-medium text-primary hover:gap-3 transition-all">
              Learn more <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
