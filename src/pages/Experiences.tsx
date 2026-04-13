import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

const experiences = [
  { title: "Private Sunset Cruise", category: "Adventure", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80", desc: "Sail along the stunning coastline as the sun dips below the horizon." },
  { title: "Traditional Spa Ritual", category: "Wellness", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80", desc: "Indulge in ancient healing traditions with locally sourced ingredients." },
  { title: "Volcanic Sunrise Trek", category: "Adventure", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", desc: "Witness breathtaking views from the summit of an active volcano at dawn." },
  { title: "Private Chef Experience", category: "Dining", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", desc: "A world-class chef prepares a multi-course meal in your villa." },
  { title: "Underwater Temple Dive", category: "Adventure", image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=600&q=80", desc: "Explore stunning underwater temples and coral gardens." },
  { title: "Yoga & Meditation Retreat", category: "Wellness", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80", desc: "Find inner peace with guided sessions overlooking rice terraces." },
];

const Experiences = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">Experiences</h1>
            <p className="font-inter text-sm text-muted-foreground max-w-xl mx-auto">
              Curated moments designed to create lasting memories in paradise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, i) => (
              <div key={i} className="group cursor-pointer flex gap-6 items-start">
                <div className="w-48 h-36 rounded-xl overflow-hidden shrink-0">
                  <img src={exp.image} alt={exp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="py-2">
                  <span className="text-[10px] tracking-[0.15em] font-inter font-medium text-primary uppercase">{exp.category}</span>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mt-1 mb-2">{exp.title}</h3>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-3">{exp.desc}</p>
                  <span className="flex items-center gap-1.5 text-sm font-inter font-medium text-primary">
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Experiences;
