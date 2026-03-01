import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import SparkleCanvas from "./SparkleCanvas";

const ContactSection = () => {
  const [booked, setBooked] = useState(false);

  return (
    <section id="contact" className="relative py-24 gradient-hero overflow-hidden">
      <SparkleCanvas />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-sparkle uppercase tracking-widest">📞 Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Book Your Celebration Today
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Ready to create magical memories? Reach out to us and let's plan your perfect event.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              { icon: Phone, title: "Phone", value: "+91 XXXXX XXXXX" },
              { icon: Mail, title: "Email", value: "hello@advikacelebrations.com" },
              { icon: MapPin, title: "Location", value: "Your City, India" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-foreground/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-primary-foreground/20">
                  <item.icon className="w-5 h-5 text-sparkle" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground mb-1">{item.title}</h4>
                  <p className="text-primary-foreground/70">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary-foreground/95 backdrop-blur-sm rounded-3xl p-8 border-2 border-sparkle/30 shadow-glow text-center flex flex-col items-center justify-center gap-6">
            {booked ? (
              <div className="animate-fade-up space-y-4">
                <div className="text-5xl">🎉</div>
                <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
                <p className="text-muted-foreground">We'll get back to you soon to plan your magical celebration. ✨</p>
              </div>
            ) : (
              <>
                <div className="text-5xl animate-float">🎈</div>
                <h3 className="text-2xl font-bold text-foreground">Ready to Celebrate?</h3>
                <p className="text-muted-foreground text-sm">Click below to start planning your dream event with us.</p>
                <button
                  onClick={() => setBooked(true)}
                  className="gradient-magic text-primary-foreground px-10 py-4 rounded-full text-lg font-semibold shadow-magic hover:opacity-90 transition-all hover:scale-105 animate-glow-pulse flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  ✨ Book Your Celebration
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
