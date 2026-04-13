import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const images = [
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
  "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&q=80",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">Gallery</h1>
            <p className="font-inter text-sm text-muted-foreground max-w-xl mx-auto">
              A visual journey through paradise.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setSelected(i)}
              >
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ height: i % 3 === 0 ? "400px" : i % 3 === 1 ? "300px" : "350px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8"
          onClick={() => setSelected(null)}
        >
          <img
            src={images[selected]}
            alt={`Gallery ${selected + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
