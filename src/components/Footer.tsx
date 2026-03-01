import { Heart } from "lucide-react";
import advikaLogo from "@/assets/advika-logo.jpeg";

const Footer = () => (
  <footer className="bg-purple-deep py-10">
    <div className="container mx-auto px-4 text-center space-y-4">
      <img src={advikaLogo} alt="Advika Celebrations" className="w-16 h-16 rounded-xl mx-auto mb-2 object-cover" />
      <h3 className="font-serif text-xl font-bold text-purple-deep-foreground tracking-wider">
        ADVIKA CELEBRATIONS
      </h3>
      <p className="text-purple-deep-foreground/60 text-sm">
        Turning Moments into Magical Memories ✨
      </p>
      <div className="flex items-center justify-center gap-1 text-purple-deep-foreground/40 text-sm">
        <span>© {new Date().getFullYear()} Advika Celebrations. Made with</span>
        <Heart className="w-3 h-3 text-magenta fill-magenta" />
      </div>
    </div>
  </footer>
);

export default Footer;
