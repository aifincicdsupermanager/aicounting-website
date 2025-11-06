import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSignup = () => {
    const element = document.getElementById("signup");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional accounting team collaborating"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-primary mb-6 leading-tight">
            AiCounting: Accounting Intelligence For Smarter Decisions.
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 leading-relaxed max-w-3xl mx-auto">
            More than accounting software, AiCounting automates compliance and transforms your accounting data into actionable insights that power smarter, faster decisions.
          </p>
          
          <Button
            size="lg"
            onClick={scrollToSignup}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 h-auto"
          >
            Become an Early Partner
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
