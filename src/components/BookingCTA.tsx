import SearchBar from "./SearchBar";

const BookingCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Your Perfect Escape Awaits
        </h2>
        <p className="font-inter text-sm text-white/70 mb-12">
          Your perfect escape is just one booking away.
        </p>

        <SearchBar variant="footer" />
      </div>
    </section>
  );
};

export default BookingCTA;
