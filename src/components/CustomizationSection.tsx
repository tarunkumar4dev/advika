import { Camera, Palette, Sparkles } from "lucide-react";

const CustomizationSection = () => (
  <section className="py-24 gradient-hero-soft relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="group bg-card/80 backdrop-blur-sm rounded-3xl p-10 border border-border hover:shadow-magic hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 animate-fade-up">
          <div className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center mb-6 group-hover:animate-glow-pulse">
            <Palette className="w-7 h-7 text-gold-foreground" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">We Can Customize Any Event ✨</h3>
          <p className="text-muted-foreground leading-relaxed">
            No matter the occasion, our team crafts bespoke decorations tailored to your vision, theme, and budget. Your imagination is our blueprint.
          </p>
        </div>

        <div className="group bg-card/80 backdrop-blur-sm rounded-3xl p-10 border border-border hover:shadow-magic hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="w-14 h-14 rounded-2xl gradient-magic flex items-center justify-center mb-6 group-hover:animate-glow-pulse">
            <Camera className="w-7 h-7 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Personal Photo Decorations 📸</h3>
          <p className="text-muted-foreground leading-relaxed">
            Make your celebrations truly personal — we integrate your favourite photos beautifully into the decor, adding a heartfelt touch to every event.
          </p>
        </div>
      </div>

      <div className="mt-20 text-center max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <Sparkles className="w-12 h-12 text-primary mx-auto mb-6 animate-sparkle" />
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Uniquely Yours.{" "}
          <span className="text-gradient-magic">Uniquely Advika.</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          From intimate birthdays to grand celebrations, we design events that are elegant, creative, and truly unforgettable.
        </p>
      </div>
    </div>
  </section>
);

export default CustomizationSection;
