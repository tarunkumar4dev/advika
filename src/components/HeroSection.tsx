import { useState, useEffect } from "react";
import advikaLogo from "@/assets/advika-logo.jpeg";
import heroImg from "@/assets/hero-celebration.png";
import { Sparkles, MessageCircle, Calendar, ChevronDown } from "lucide-react";
import SparkleCanvas from "./SparkleCanvas";

// WhatsApp configuration
const WHATSAPP_NUMBER = "919876543210"; // Replace with your actual WhatsApp number
const WHATSAPP_MESSAGE = "Hello Advika Celebrations! I'm interested in your event decoration services. Can you please share more details?";

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
      className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50"
    >
      <SparkleCanvas />

      {/* Decorative elements */}
      <div className="absolute top-20 left-[5%] w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-amber-200/40 blur-2xl sm:blur-3xl animate-float-slow" />
      <div className="absolute top-40 right-[5%] w-24 h-24 sm:w-48 sm:h-48 rounded-full bg-orange-200/40 blur-2xl sm:blur-3xl animate-float-slower hidden sm:block" />
      <div className="absolute bottom-20 left-[10%] w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-amber-100/60 blur-3xl animate-float-slower" />
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
        {/* Text Content */}
        <div
          className={`space-y-4 sm:space-y-6 lg:space-y-8 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } order-2 lg:order-1`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-amber-200 shadow-lg">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 animate-sparkle" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">
              ✨ Event Decor Specialists
            </span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse ml-1 sm:ml-2" />
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="text-gray-800 drop-shadow-sm">Turning Moments</span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent animate-gradient-x">
              into Magic
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-lg leading-relaxed bg-white/80 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-amber-100 shadow-md">
            ✨ From intimate birthdays to grand celebrations, we design events that are elegant and unforgettable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={openWhatsApp}
              className="group relative flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold shadow-xl hover:shadow-green-600/30 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>WhatsApp</span>
              <span className="text-[10px] sm:text-xs bg-white/30 px-2 py-0.5 rounded-full">24/7</span>
            </button>

            <button
              onClick={() => scrollTo("#contact")}
              className="group relative bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 text-white px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold shadow-xl hover:shadow-amber-600/30 hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Book Now</span>
              </span>
            </button>
          </div>

          {/* Services Button */}
          <div className="flex justify-center sm:justify-start">
            <button
              onClick={() => scrollTo("#services")}
              className="border-2 border-amber-300 text-gray-700 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-amber-50 backdrop-blur-sm transition-all duration-300 flex items-center gap-2 hover:border-amber-400 group"
            >
              Our Services
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 animate-bounce group-hover:text-amber-600" />
            </button>
          </div>
        </div>

        {/* Logo + Image Section */}
        <div
          className={`relative transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } order-1 lg:order-2`}
        >
          <div className="relative">
            {/* Logo */}
            <div className="relative mb-4 sm:mb-6 lg:mb-8 group flex justify-center">
              <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl sm:rounded-3xl blur-xl opacity-60" />
              <img
                src={advikaLogo}
                alt="Advika Celebrations Logo"
                className="relative w-32 xs:w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 mx-auto rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl ring-4 ring-white/60"
              />
            </div>

            {/* Hero Image */}
            <div className="relative group flex justify-center">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl sm:rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
              <img
                src={heroImg}
                alt="Event decorations"
                className="relative w-48 xs:w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 mx-auto rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl border-4 border-white/60 group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full text-[10px] sm:text-xs lg:text-sm font-semibold shadow-xl animate-float hover:scale-110 transition-transform">
                ✨ Premium
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 lg:-bottom-4 lg:-left-4 bg-gradient-to-r from-green-600 to-green-700 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full text-[10px] sm:text-xs lg:text-sm font-semibold shadow-xl animate-float hover:scale-110 transition-transform" style={{ animationDelay: "1s" }}>
                ⚡ Instant
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -bottom-6 sm:-bottom-8 lg:-bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-8 sm:h-12 lg:h-16 bg-gradient-to-r from-amber-400/30 via-orange-400/30 to-amber-400/30 rounded-full blur-2xl sm:blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;