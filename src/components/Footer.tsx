import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white/80 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-white mb-4">Havanza</h3>
            <p className="font-inter text-sm leading-relaxed text-white/50">
              Luxury villa retreats in the world's most breathtaking destinations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter text-xs tracking-[0.2em] font-semibold text-white mb-4 uppercase">Explore</h4>
            <div className="flex flex-col gap-3">
              {["Villas", "Experiences", "Dining", "Gallery"].map((l) => (
                <Link
                  key={l}
                  to={`/${l.toLowerCase()}`}
                  className="font-inter text-sm text-white/50 hover:text-white transition-colors"
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-inter text-xs tracking-[0.2em] font-semibold text-white mb-4 uppercase">Company</h4>
            <div className="flex flex-col gap-3">
              {["About", "Careers", "Press", "Contact"].map((l) => (
                <span key={l} className="font-inter text-sm text-white/50 hover:text-white transition-colors cursor-pointer">
                  {l}
                </span>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-inter text-xs tracking-[0.2em] font-semibold text-white mb-4 uppercase">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-white/40">
            © {new Date().getFullYear()} Havanza. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="font-inter text-xs text-white/40 hover:text-white/60 cursor-pointer">Privacy Policy</span>
            <span className="font-inter text-xs text-white/40 hover:text-white/60 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
