import { Check, Crown, Star } from "lucide-react";
import SparkleCanvas from "./SparkleCanvas";

const packages = [
  {
    name: "Basic Balloon Setup",
    price: "₹1,500 – ₹2,000",
    icon: Star,
    features: ["Simple balloon arrangement", "Color coordination", "Setup & cleanup included"],
    popular: false,
  },
  {
    name: "Medium Decoration",
    price: "₹2,500 – ₹4,000",
    icon: Crown,
    features: ["Themed balloon decor", "Backdrop setup", "Photo-ready arrangements", "Color coordination"],
    popular: true,
  },
  {
    name: "Premium Setup",
    price: "₹5,000+",
    icon: Crown,
    features: ["Full event decoration", "Custom themes & backdrops", "Flower & balloon combos", "Personal photo integration", "Premium materials"],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="relative py-24 gradient-hero overflow-hidden">
    <SparkleCanvas />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16 space-y-4">
        <span className="text-sm font-semibold text-sparkle uppercase tracking-widest">💎 Packages</span>
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">Choose Your Package</h2>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">
          Every package is crafted with love and attention to detail.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {packages.map((pkg, i) => (
          <div
            key={pkg.name}
            className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-3 hover:scale-105 animate-fade-up ${
              pkg.popular
                ? "bg-primary-foreground/95 backdrop-blur-sm shadow-glow scale-105 border-2 border-sparkle/50"
                : "bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 hover:bg-primary-foreground/15"
            }`}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-shimmer text-primary-foreground px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                ⭐ Most Popular
              </div>
            )}

            <div className="text-center mb-6">
              <pkg.icon className={`w-10 h-10 mx-auto mb-4 ${pkg.popular ? "text-primary" : "text-sparkle"}`} />
              <h3 className={`text-xl font-bold mb-2 ${pkg.popular ? "text-foreground" : "text-primary-foreground"}`}>{pkg.name}</h3>
              <p className={`text-2xl font-bold ${pkg.popular ? "text-gradient-magic" : "text-sparkle"}`}>
                {pkg.price}
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.popular ? "text-primary" : "text-sparkle"}`} />
                  <span className={`text-sm ${pkg.popular ? "text-muted-foreground" : "text-primary-foreground/80"}`}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className={`w-full py-3 rounded-full font-semibold text-sm transition-all hover:scale-105 ${
                pkg.popular
                  ? "gradient-magic text-primary-foreground shadow-magic"
                  : "gradient-gold text-gold-foreground shadow-gold"
              }`}
            >
              ✨ Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
