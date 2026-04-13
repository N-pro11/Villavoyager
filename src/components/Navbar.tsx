import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled || !isHome
    ? "bg-white/95 backdrop-blur-md shadow-sm"
    : "bg-transparent";
  const textColor = scrolled || !isHome ? "text-foreground" : "text-white";
  const borderColor = scrolled || !isHome ? "border-foreground" : "border-white";

  const leftLinks = [
    { label: "VILLAS", to: "/villas" },
    { label: "EXPERIENCES", to: "/experiences" },
    { label: "DINING", to: "/dining" },
  ];
  const rightLinks = [
    { label: "GALLERY", to: "/gallery" },
    { label: "DINING", to: "/dining" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Links */}
          <div className="hidden md:flex items-center gap-8">
            {leftLinks.map((l) => (
              <Link
                key={l.to + l.label}
                to={l.to}
                className={`text-xs tracking-[0.2em] font-inter font-medium ${textColor} hover:opacity-70 transition-opacity`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link to="/" className={`font-playfair text-2xl font-bold italic tracking-wide ${textColor}`}>
            Havanza
          </Link>

          {/* Right Links */}
          <div className="hidden md:flex items-center gap-8">
            {rightLinks.map((l, i) => (
              <Link
                key={l.to + l.label + i}
                to={l.to}
                className={`text-xs tracking-[0.2em] font-inter font-medium ${textColor} hover:opacity-70 transition-opacity`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/reserve"
              className={`text-xs tracking-[0.15em] font-inter font-medium px-6 py-2 rounded-full border ${borderColor} ${textColor} hover:bg-white/10 transition-colors`}
            >
              RESERVE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {[...leftLinks, ...rightLinks].map((l, i) => (
              <Link
                key={l.to + l.label + i}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className="text-sm tracking-[0.15em] font-inter text-foreground py-2"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/reserve"
              onClick={() => setMobileOpen(false)}
              className="border border-foreground text-foreground text-sm tracking-[0.15em] font-inter font-medium px-6 py-3 rounded-full text-center mt-2"
            >
              RESERVE
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
