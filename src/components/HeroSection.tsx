import { useState, useEffect } from "react";
import advikaLogo from "@/assets/advika-logo.jpeg";
import heroImg from "@/assets/hero-celebration.png";
import { Sparkles, MessageCircle, Calendar, ChevronDown } from "lucide-react";
import SparkleCanvas from "./SparkleCanvas";

// WhatsApp configuration (same as navbar)
const WHATSAPP_NUMBER = "919876543210"; // Replace with your actual WhatsApp number
const WHATSAPP_MESSAGE = "Hello! I'm interested in your event decoration services for an upcoming celebration.";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="home"
      className="relative gradient-hero min-h-screen flex items-center overflow-hidden pt-24"
    >
      <SparkleCanvas />

      {/* Enhanced bokeh circles with animation */}
      <div className="absolute top-20 left-[5%] w-40 h-40 rounded-full bg-amber-300/10 blur-3xl animate-float-slow" />
      <div className="absolute top-60 right-[10%] w-60 h-60 rounded-full bg-purple-300/10 blur-3xl animate-float-slower" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-[20%] w-32 h-32 rounded-full bg-pink-300/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[30%] right-[25%] w-24 h-24 rounded-full bg-blue-300/10 blur-2xl animate-pulse-glow" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping" />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-amber-400/30 rounded-full animate-ping" style={{ animationDelay: "0.5s" }} />

      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div
          className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-105 group">
            <Sparkles className="w-4 h-4 text-amber-400 animate-sparkle" />
            <span className="text-sm font-medium text-white">
              ✨ Event Decoration Specialists
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-2" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="text-white drop-shadow-lg">Turning Moments into</span>
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-300 bg-clip-text text-transparent animate-gradient-x">
              Magical Memories
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-white/80 max-w-lg leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
            ✨ From intimate birthdays to grand celebrations, we design events that are elegant, creative, and truly unforgettable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            {/* WhatsApp Button */}
            <button
              onClick={openWhatsApp}
              className="group relative flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-green-500/30 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Chat on WhatsApp</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            {/* Book Now Button */}
            <button
              onClick={() => scrollTo("#contact")}
              className="group relative bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300 overflow-hidden animate-glow-pulse"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Your Celebration
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            {/* Services Button */}
            <button
              onClick={() => scrollTo("#services")}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:scale-105 flex items-center gap-2"
            >
              Our Services
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>

          {/* Stats/Trust Indicators */}
          <div className="flex gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-white/60">Events Decorated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-white/60">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/60">Support</div>
            </div>
          </div>
        </div>

        {/* Logo + Image Section */}
        <div
          className={`relative transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Floating animation container */}
          <div className="relative animate-float-slow">
            {/* Logo with enhanced styling */}
            <div className="relative mb-8 group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={advikaLogo}
                alt="Advika Celebrations Logo"
                className="relative w-64 md:w-72 lg:w-80 mx-auto rounded-3xl shadow-2xl ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-500"
              />
            </div>

            {/* Hero Image with floating badges */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-magic rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <img
                src={heroImg}
                alt="Beautiful event decorations with balloons, gifts, and confetti"
                className="relative w-full max-w-sm mx-auto rounded-3xl shadow-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-500 group-hover:scale-[1.02]"
              />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-magic text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl animate-float">
                ✨ Premium Quality
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl animate-float" style={{ animationDelay: "1s" }}>
                ⚡ Instant Quote
              </div>
            </div>

            {/* Enhanced glow effects */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 rounded-full blur-3xl animate-pulse-glow" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollTo("#services")}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
        >
          <ChevronDown className="w-5 h-5 text-white/60 group-hover:text-white" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;