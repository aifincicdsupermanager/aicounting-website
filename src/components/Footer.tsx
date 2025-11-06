import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSignup = () => {
    const element = document.getElementById("signup");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">
            The future is with AiCounting.
          </h2>
          
          <div className="space-y-4 text-lg opacity-90">
            <p>
              AiCounting is proudly built by AiFin, an Australian Fintech Innovator on a mission to transform accounting and finance through intelligent automation and data innovation.
            </p>
            <p>
              We give accountants superpowers—automating compliance, eliminating manual crunching, and turning data into actionable insights, so you can focus on driving growth for your clients and your practice.
            </p>
          </div>

          <div className="pt-8 space-y-6">
            <h3 className="font-heading text-2xl font-semibold">
              Let's shape the future of accounting together
            </h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={scrollToSignup}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                🔗 Become an Early Partner
              </Button>
            </div>

            <div className="pt-6 space-y-2">
              <p>
                📧 Contact us:{" "}
                <a
                  href="mailto:support@aicounting.com.au"
                  className="underline hover:text-accent transition-colors"
                >
                  support@aicounting.com.au
                </a>
              </p>
              <div className="flex items-center justify-center gap-4 text-sm">
                <a
                  href="https://www.aifin.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  www.aifin.com.au
                </a>
                <span>•</span>
                <a
                  href="https://www.linkedin.com/company/aifin-pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
