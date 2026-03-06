import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Sparkles } from "lucide-react";
import advikaLogo from "@/assets/advika-logo.jpeg";

// WhatsApp configuration
const WHATSAPP_NUMBER = "919876543210"; // Replace with your actual WhatsApp number
const WHATSAPP_MESSAGE = "Hello Advika Celebrations! I'm interested in your event decoration services. Can you please share more details?";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-amber-200 shadow-lg py-2"
            : "bg-white/80 backdrop-blur-md border-b border-transparent py-3"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-3 sm:px-4">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 sm:gap-3 group"
          >
            <div className="relative">
              <img
                src={advikaLogo}
                alt="Advika Celebrations"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl object-cover ring-2 ring-amber-400/30 group-hover:ring-amber-400/60 transition-all duration-300"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
            </div>
            <span className="font-serif text-sm sm:text-base md:text-lg font-bold tracking-wider text-gray-800 group-hover:text-amber-600 transition-colors">
              ADVIKA
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <ul className="flex gap-4 lg:gap-6 items-center">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="relative text-xs lg:text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors group"
                  >
                    {l.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-full transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 lg:gap-3">
              {/* Desktop WhatsApp Button */}
              <button
                onClick={openWhatsApp}
                className="flex items-center gap-1 lg:gap-2 bg-green-500 hover:bg-green-600 text-white px-3 lg:px-5 py-1.5 lg:py-2.5 rounded-full text-xs lg:text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25 group"
              >
                <MessageCircle size={16} className="lg:w-[18px] lg:h-[18px] group-hover:rotate-12 transition-transform" />
                <span className="hidden lg:inline">WhatsApp</span>
                <span className="lg:hidden">Chat</span>
              </button>

              {/* Desktop Book Now Button */}
              <button
                onClick={() => scrollTo("#contact")}
                className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 lg:px-6 py-1.5 lg:py-2.5 rounded-full text-xs lg:text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-400/25 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-1 lg:gap-2">
                  <Sparkles size={14} className="lg:w-4 lg:h-4" />
                  <span className="hidden sm:inline">Book Now</span>
                  <span className="sm:hidden">Book</span>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button and WhatsApp */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile WhatsApp FAB Style */}
            <button
              onClick={openWhatsApp}
              className="relative flex items-center justify-center w-9 h-9 bg-green-500 rounded-full shadow-lg hover:shadow-green-500/50 active:scale-95 transition-all duration-300 group"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={20} className="text-white group-hover:rotate-12 transition-transform" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="relative w-9 h-9 flex items-center justify-center bg-amber-100 rounded-full"
              onClick={() => setOpen(!open)}
            >
              <div className={`absolute inset-0 bg-amber-200 rounded-full transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} />
              {open ? 
                <X size={20} className="text-amber-600" /> : 
                <Menu size={20} className="text-amber-600" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-amber-200 shadow-xl transition-all duration-300 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="container mx-auto px-4 py-3">
            <ul className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="block w-full text-left py-3 px-4 text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-all duration-300 font-medium"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-amber-200">
              {/* Mobile WhatsApp Button */}
              <button
                onClick={openWhatsApp}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl text-base font-semibold transition-all duration-300 active:scale-95 shadow-lg"
              >
                <MessageCircle size={22} />
                <span>Chat on WhatsApp</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">⚡ 24/7</span>
              </button>

              {/* Mobile Book Now Button */}
              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-orange-400 text-white py-4 rounded-xl text-base font-semibold transition-all duration-300 active:scale-95 shadow-lg"
              >
                <Sparkles size={20} />
                <span>Book Your Celebration</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating WhatsApp Button for Mobile */}
      {scrolled && (
        <button
          onClick={openWhatsApp}
          className="md:hidden fixed bottom-6 right-4 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl hover:shadow-green-500/50 active:scale-95 transition-all duration-300 animate-bounce group"
          style={{ animationDuration: '2s' }}
        >
          <MessageCircle size={28} className="text-white" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
          <span className="absolute -top-8 right-0 bg-gray-800 text-white text-xs py-1 px-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Chat with us
          </span>
        </button>
      )}
    </>
  );
};

export default Navbar;