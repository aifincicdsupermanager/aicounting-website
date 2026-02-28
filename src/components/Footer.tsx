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
        <div className="max-w-4xl mx-auto text-center space-y-10">

          {/* Headline */}
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">
            The future of accounting is connected.
          </h2>

          {/* Value Proposition */}
          <div className="space-y-4 text-lg opacity-90 leading-relaxed">
            <p>
              AiCounting brings payroll, accounting and compliance into one system,
              so your data flows automatically across your entire workflow.
            </p>

            <p>
              Built by AiFin, we’re rethinking accounting from the ground up,
              using structured data to automate compliance and unlock real-time insights.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-6 space-y-4">
            <h3 className="font-heading text-2xl font-semibold">
              Get started with AiCounting
            </h3>

            <Button
              size="lg"
              onClick={scrollToSignup}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 h-auto"
            >
              Get started
            </Button>

            <p className="text-sm opacity-70">
              No setup fees. Cancel anytime.
            </p>
          </div>

          {/* Contact */}
          <div className="pt-8 space-y-2 text-sm opacity-80">
            <p>
              📧{" "}
              <a
                href="mailto:support@aicounting.com.au"
                className="underline hover:text-accent transition-colors"
              >
                support@aicounting.com.au
              </a>
            </p>

            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.aifin.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                AiFin
              </a>

              <span>|</span>

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
    </footer>
  );
};

export default Footer;