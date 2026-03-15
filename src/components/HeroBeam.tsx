import { Button } from "@/components/ui/button";

const HeroBeam = () => {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-40 pb-36">

      {/* ── Premium gradient: Trust Blue → Teal ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0E2A47 0%, #0a3d54 40%, #00756A 75%, #00A58C 100%)",
        }}
      />

      {/* ── Subtle noise texture for premium depth ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── Subtle top-left radial highlight ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 15% 20%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.01em] leading-[1.08] text-white">
            Run payroll with Beam. <br /> Built into a complete accounting platform.
          </h1>

          {/* Subheadline */}
          <p
            className="mt-6 max-w-xl mx-auto text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Payroll with Beam Super, combined with a full accounting platform.
            Manage payroll, compliance and reporting in one system.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollToId("pricing-beam")}
              className="bg-[#FF9900] hover:bg-[#FF9900]/90 text-white font-semibold text-base px-8 py-4 h-auto rounded-lg shadow-sm"
            >
              View pricing
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToId("how-it-works-beam")}
              className="font-semibold text-base px-8 py-4 h-auto rounded-lg bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white/50"
            >
              See how it works →
            </Button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroBeam;
