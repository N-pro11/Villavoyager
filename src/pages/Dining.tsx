import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin } from "lucide-react";

const restaurants = [
  { name: "The Ocean Terrace", cuisine: "Modern Asian", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", desc: "Open-air dining with panoramic ocean views and fresh seafood.", hours: "6:00 PM – 11:00 PM" },
  { name: "Bamboo Garden", cuisine: "Indonesian", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80", desc: "Traditional Indonesian flavors in a lush garden setting.", hours: "12:00 PM – 10:00 PM" },
  { name: "Sunset Pool Bar", cuisine: "Cocktails & Light Bites", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&q=80", desc: "Handcrafted cocktails and tapas by the infinity pool.", hours: "10:00 AM – Midnight" },
  { name: "The Wine Cellar", cuisine: "French Fine Dining", image: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=600&q=80", desc: "An intimate underground dining experience with curated wines.", hours: "7:00 PM – 11:00 PM" },
];

const Dining = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">Dining</h1>
            <p className="font-inter text-sm text-muted-foreground max-w-xl mx-auto">
              Savor extraordinary culinary journeys crafted by world-class chefs.
            </p>
          </div>

          <div className="space-y-16">
            {restaurants.map((r, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "direction-rtl" : ""}`}>
                <div className={`rounded-2xl overflow-hidden aspect-[16/10] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img src={r.image} alt={r.name} className="w-full h-full object-cover" />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-[10px] tracking-[0.15em] font-inter font-medium text-primary uppercase">{r.cuisine}</span>
                  <h2 className="font-playfair text-3xl font-bold text-foreground mt-2 mb-4">{r.name}</h2>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-4">{r.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-inter text-muted-foreground">
                    <MapPin size={14} />
                    <span>{r.hours}</span>
                  </div>
                  <button className="mt-6 bg-primary text-primary-foreground font-inter font-medium text-sm px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
                    Reserve a Table
                  </button>
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

export default Dining;
