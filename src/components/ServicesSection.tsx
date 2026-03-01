import { useState } from "react";
import { PartyPopper, Home, Gift, Store, Stars, Heart } from "lucide-react";
import SparkleCanvas from "./SparkleCanvas";

const services = [
  { icon: PartyPopper, label: "Birthday Parties", emoji: "🎈", category: "birthday" },
  { icon: Home, label: "Home Functions", emoji: "🎂", category: "home" },
  { icon: Gift, label: "Surprise Setups", emoji: "🎉", category: "surprise" },
  { icon: Store, label: "Shop Opening", emoji: "🎊", category: "shop" },
  { icon: Stars, label: "Kitty Party", emoji: "🌟", category: "kitty" },
  { icon: Heart, label: "Anniversary Party", emoji: "❤️", category: "anniversary" },
];

const filters = ["All", "Birthday", "Home", "Surprise", "Shop", "Kitty", "Anniversary"];

const ServicesSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? services
    : services.filter((s) => s.category === activeFilter.toLowerCase());

  return (
    <section id="services" className="relative py-24 gradient-hero-soft overflow-hidden">
      <SparkleCanvas />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">✨ What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We bring creativity and elegance to every celebration, big or small.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === f
                  ? "gradient-magic text-primary-foreground shadow-magic"
                  : "bg-blush text-foreground hover:shadow-magic hover:scale-105"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {filtered.map((service, i) => (
            <div
              key={service.label}
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-border hover:shadow-magic hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-magic flex items-center justify-center group-hover:animate-glow-pulse transition-all">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-3xl mb-3 block">{service.emoji}</span>
              <h3 className="text-lg font-semibold text-foreground">{service.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
