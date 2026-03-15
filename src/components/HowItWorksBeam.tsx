import { Check } from "lucide-react";

const steps = [
    {
        title: "Process payroll and super in one place",
        description:
            "Run payroll with STP2 compliance and pay super via Beam, all within the same system.",
    },
    {
        title: "Automatically flow into accounting",
        description:
            "Payroll data flows directly into accounting, without manual journals, reconciliation or rework.",
    },
    {
        title: "Prepare reporting and compliance",
        description:
            "Generate financial reports and prepare BAS from the same data, without re-entry or adjustments.",
    },
];

const HowItWorksBeam = () => {
    const scrollToPricing = () => {
        document.getElementById("pricing-beam")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="how-it-works-beam" className="py-32 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">

                    {/* Section Heading */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-0.01em] leading-[1.15] text-primary mb-6">
                            Run payroll. Everything stays in sync.
                        </h2>
                        <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                            Payroll is just one part of your workflow. AiCounting connects
                            payroll with accounting, reporting and compliance — so everything
                            works from the same data, in one connected platform.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                        {steps.map((item, index) => (
                            <div key={index} className="flex flex-col">

                                {/* Check + title */}
                                <div className="flex items-start gap-2 mb-2">
                                    <Check className="w-4 h-4 text-[#00A58C] flex-shrink-0 mt-1" />
                                    <h3 className="font-heading text-lg font-semibold tracking-[-0.01em] text-primary leading-snug">
                                        {item.title}
                                    </h3>
                                </div>

                                <p className="text-sm text-foreground/60 leading-relaxed pl-6">
                                    {item.description}
                                </p>

                            </div>
                        ))}
                    </div>

                    {/* Highlight statement */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="font-heading text-2xl md:text-3xl font-semibold tracking-[-0.01em] text-primary">
                            Capture data once. Use it across your entire workflow.
                        </p>
                    </div>

                    {/* Soft CTA */}
                    <div className="text-center">
                        <button
                            onClick={scrollToPricing}
                            className="text-lg md:text-xl font-semibold text-[#00A58C] hover:text-[#00A58C]/70 transition-colors inline-flex items-center gap-1.5"
                        >
                            See pricing plans →
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorksBeam;
