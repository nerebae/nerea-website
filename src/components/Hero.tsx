import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/dynamic_background.jpeg";

const Hero = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 800; // Adjust this value to control how quickly the shadow changes
      
      // Calculate opacity: starts at 0, gradually increases to 0.4 as user scrolls
      const newOpacity = Math.min((scrollY / maxScroll) * 0.4, 0.4);
      setScrollOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dynamic Overlay */}
      <div 
        className="absolute inset-0 backdrop-blur-sm transition-all duration-300" 
        style={{ backgroundColor: `rgba(0, 0, 0, ${scrollOpacity})` }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Nerea Valdivieso Arevalo
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Junior Developer
        </p>

        {/* Enhanced Scroll Indicator */}
        <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="#about"
            className="inline-block group cursor-pointer"
            aria-label="Scroll to about section"
          >
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 animate-bounce-slow group-hover:animate-pulse">
              <ArrowDown 
                size={40} 
                className="text-primary group-hover:text-primary/80 transition-colors duration-300" 
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
