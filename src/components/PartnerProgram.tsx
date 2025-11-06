import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const PartnerProgram = () => {
  const scrollToSignup = () => {
    const element = document.getElementById("signup");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="partner-program" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-8">
            Early Partner Offer - $10/month
          </h2>
          <p className="text-2xl mb-12 opacity-90">
            Full access. Exclusive support. Early influence. First access to what's next.
          </p>

          <Card className="p-8 bg-card text-card-foreground">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-2">Full Access</h3>
                <p className="text-foreground/70">
                  Get complete access to all current features and modules
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-2">Exclusive Support</h3>
                <p className="text-foreground/70">
                  Direct line to our team with priority assistance
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="w-12 h-12 text-secondary mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-2">Shape the Future</h3>
                <p className="text-foreground/70">
                  Your feedback directly influences upcoming features
                </p>
              </div>
            </div>

            <Button
              size="lg"
              onClick={scrollToSignup}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 h-auto"
            >
              Become an Early Partner
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PartnerProgram;
