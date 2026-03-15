import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSignup = () => {
    const element = document.getElementById("signup");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Upper footer */}
          <div className="text-center mb-16">

            {/* Closing headline */}
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-0.01em] leading-[1.15] text-white mb-4">
              The future of accounting is connected.
            </h2>

            {/* Closing line */}
            <p className="text-base text-white/60 leading-relaxed max-w-xl mx-auto mb-8">
              AiCounting is being built in the open, with the accountants
              and businesses who want to shape it.
            </p>

            {/* Outlined CTA */}
            <button
              onClick={scrollToSignup}
              className="px-6 py-2.5 rounded-lg border border-white/20
                         text-sm font-semibold text-white
                         hover:border-white/40 hover:bg-white/5
                         transition-all"
            >
              Apply for early access →
            </button>

          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">

              {/* Brand */}
              <p>AiCounting by AiFin</p>

              {/* Links */}
              <div className="flex items-center gap-6">
                <a
                  href="mailto:support@aicounting.com.au"
                  className="hover:text-white/70 transition-colors"
                >
                  support@aicounting.com.au
                </a>

                <a
                  href="https://www.aifin.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/70 transition-colors"
                >
                  AiFin
                </a>

                <a
                  href="https://www.linkedin.com/company/aifin-pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/70 transition-colors"
                >
                  LinkedIn
                </a>
              </div>

              {/* Copyright */}
              <p>© 2025 AiFin. All rights reserved.</p>

            </div>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;