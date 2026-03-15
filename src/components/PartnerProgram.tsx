import { Button } from "@/components/ui/button";

const benefits = [
  {
    title: "Full Access",
    body: "Everything available today, from day one. No feature gates, no tiered plans.",
  },
  {
    title: "Direct Support",
    body: "A direct line to the team — not a support queue. Your questions get answered by the people building it.",
  },
  {
    title: "Co-create What's Next",
    body: "Your workflows become our roadmap. Early partners have direct influence over what we build.",
  },
];

const PartnerProgram = () => {

  const scrollToSignup = () => {
    const element = document.getElementById("signup");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="partner-program"
      className="py-32 bg-primary text-primary-foreground relative overflow-hidden"
    >

      {/* Subtle dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto px-4 relative">

        {/* Heading block */}
        <div className="text-center max-w-2xl mx-auto mb-16">

          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00A58C] mb-4">
            Limited early access
          </p>

          {/* Headline */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.01em] leading-[1.15] text-white mb-3">
            Build the future of accounting with us.
          </h2>

          {/* Price */}
          <p className="text-xl font-semibold text-white/50 mb-5">
            $30/month to start.
          </p>

          {/* Subheadline */}
          <p className="text-base text-white/60 leading-relaxed max-w-xl mx-auto">
            We're opening AiCounting to a small group of accountants
            and businesses who want to shape what gets built next.
          </p>

        </div>

        {/* Benefits */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {benefits.map(({ title, body }, i) => (
            <div key={i}>

              {/* Accent line */}
              <div className="w-8 h-0.5 bg-[#00A58C] mb-4" />

              <h3 className="text-base font-semibold text-white mb-2">
                {title}
              </h3>

              <p className="text-sm text-white/50 leading-relaxed">
                {body}
              </p>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={scrollToSignup}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8 py-4 h-auto rounded-lg inline-flex items-center gap-2"
          >
            Apply for early access
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M7 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default PartnerProgram;