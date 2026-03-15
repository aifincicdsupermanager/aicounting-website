import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";
import logoWordmark from "@/assets/logo-wordmark.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/95 backdrop-blur-sm border-b border-border/60"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* Icon — orange circle, stays as-is on both states */}
            <img
              src={logoIcon}
              alt=""
              className="h-9 w-9 object-contain"
            />
            {/* Wordmark — Trust Blue on light, white on dark hero */}
            <img
              src={logoWordmark}
              alt="AiCounting"
              className={`h-9 object-contain transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"
                }`}
            />
          </div>

          {/* Nav links + CTA */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("core-workflows")}
              className={`text-base font-medium transition-colors ${scrolled
                ? "text-primary hover:text-[#00A58C]"
                : "text-white/90 hover:text-white"
                }`}
            >
              What's included
            </button>
            <button
              onClick={() => scrollToSection("platform-capabilities")}
              className={`text-base font-medium transition-colors ${scrolled
                ? "text-primary hover:text-[#00A58C]"
                : "text-white/90 hover:text-white"
                }`}
            >
              Why AiCounting
            </button>
            <button
              onClick={() => scrollToSection("partner-program")}
              className={`text-base font-medium transition-colors ${scrolled
                ? "text-primary hover:text-[#00A58C]"
                : "text-white/90 hover:text-white"
                }`}
            >
              Early access offer
            </button>
            <Button
              onClick={() => scrollToSection("signup")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-6 py-2.5 h-auto rounded-lg"
            >
              Apply for early access
            </Button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
