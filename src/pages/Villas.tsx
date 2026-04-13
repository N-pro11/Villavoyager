import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Clock, Star, MapPin } from "lucide-react";

const allVillas = [
  { name: "Balinese Premium Villas", location: "Bali, Indonesia", image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600&q=80", duration: "2 days", rating: 4.9, price: "$450" },
  { name: "Ubud Tropical Retreat", location: "Ubud, Indonesia", image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80", duration: "3 days", rating: 4.8, price: "$380" },
  { name: "Seminyak Beachfront Villa", location: "Seminyak, Indonesia", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80", duration: "2 days", rating: 4.9, price: "$520" },
  { name: "Nusa Dua Oceanview", location: "Nusa Dua, Indonesia", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80", duration: "4 days", rating: 4.7, price: "$400" },
  { name: "Canggu Surf Villa", location: "Canggu, Indonesia", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80", duration: "3 days", rating: 4.8, price: "$350" },
  { name: "Uluwatu Cliff Resort", location: "Uluwatu, Indonesia", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", duration: "5 days", rating: 4.9, price: "$600" },
];

const Villas = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">Our Villas</h1>
            <p className="font-inter text-sm text-muted-foreground max-w-xl mx-auto">
              Discover our handpicked collection of luxury villas across the world's most exclusive destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allVillas.map((villa, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-4">
                  <img src={villa.image} alt={villa.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-inter text-lg font-bold text-white">{villa.price}<span className="text-sm font-normal text-white/70"> / night</span></p>
                  </div>
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-1">{villa.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <MapPin size={14} className="text-muted-foreground" />
                  <span className="font-inter text-xs text-muted-foreground">{villa.location}</span>
                </div>
                <div className="flex items-center gap-4 text-sm font-inter text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock size={14} />{villa.duration}</span>
                  <span className="flex items-center gap-1"><Star size={14} className="fill-amber-400 text-amber-400" />{villa.rating}/5</span>
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

export default Villas;
