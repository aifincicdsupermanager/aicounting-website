import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="AiCounting" className="h-10" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("partner-program")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Early Partner Program
            </button>
            <Button
              onClick={() => scrollToSection("signup")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
            >
              Register Interest
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
