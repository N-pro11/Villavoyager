import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, Users, MapPin } from "lucide-react";

const Reserve = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", destination: "", checkin: "", checkout: "", guests: "2", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend
    alert("Reservation request submitted! We'll contact you shortly.");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">Reserve</h1>
            <p className="font-inter text-sm text-muted-foreground max-w-xl mx-auto">
              Begin your luxury escape. Fill in the details below and our concierge will get in touch.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-12 shadow-sm space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-[0.15em] font-inter font-semibold text-muted-foreground uppercase mb-2">Full Name</label>
                <input name="name" value={formData.name} onChange={handleChange} required className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 font-inter text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-primary/30" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] font-inter font-semibold text-muted-foreground uppercase mb-2">Email</label>
                <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 font-inter text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-primary/30" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] font-inter font-semibold text-muted-foreground uppercase mb-2">Phone</label>
                <input name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 font-inter text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-primary/30" placeholder="+1 234 567 890" />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] font-inter font-semibold text-muted-foreground uppercase mb-2">
                  <MapPin size={12} className="inline mr-1" />Destination
                </label>
                <select name="destination" value={formData.destination} onChange={handleChange} required className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 font-inter text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30">
                  <option value="">Select a destination</option>
                  <option value="bali">Bali, Indonesia</option>
                  <option value="ubud">Ubud, Indonesia</option>
                  <option value="seminyak">Seminyak, Indonesia</option>
                  <option value="nusa-dua">Nusa Dua, Indonesia</option>
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] font-inter font-semibold text-muted-foreground uppercase mb-2">
                  <Calendar size={12} className="inline mr-1" />Check-in
                </label>
                <input name="checkin" type="date" value={formData.checkin} onChange={handleChange} required className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 font-inter text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] font-inter font-semibold text-muted-foreground uppercase mb-2">
                  <Calendar size={12} className="inline mr-1" />Check-out
                </label>
                <input name="checkout" type="date" value={formData.checkout} onChange={handleChange} required className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 font-inter text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
            </div>
            <div>
              <label className="block text-xs tracking-[0.15em] font-inter font-semibold text-muted-foreground uppercase mb-2">
                <Users size={12} className="inline mr-1" />Number of Guests
              </label>
              <input name="guests" type="number" min="1" max="20" value={formData.guests} onChange={handleChange} className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 font-inter text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 max-w-[200px]" />
            </div>
            <div>
              <label className="block text-xs tracking-[0.15em] font-inter font-semibold text-muted-foreground uppercase mb-2">Special Requests</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 font-inter text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="Any special requirements..." />
            </div>
            <button type="submit" className="w-full bg-primary text-primary-foreground font-inter font-medium text-sm tracking-[0.1em] py-4 rounded-full hover:bg-primary/90 transition-colors">
              Submit Reservation Request
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reserve;
