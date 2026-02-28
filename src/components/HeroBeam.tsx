import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Accounting and payroll workflow"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* ========================= */}
          {/* HEADLINE */}
          {/* ========================= */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-primary mb-6 leading-tight">
            Run payroll with Beam. <br />
            Built into a complete accounting platform.
          </h1>

          {/* ========================= */}
          {/* SUBHEADLINE */}
          {/* ========================= */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed max-w-4xl mx-auto">
            Payroll with Beam Super, combined with a full accounting platform. <br />
            Manage payroll, compliance and reporting in one system.
          </p>

          {/* ========================= */}
          {/* CTA */}
          {/* ========================= */}
          <div className="flex flex-col items-center gap-4">

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                size="lg"
                onClick={scrollToPricing}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 h-auto"
              >
                View pricing
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={scrollToHowItWorks}
                className="font-semibold text-lg px-8 py-6 h-auto"
              >
                See how it works
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;