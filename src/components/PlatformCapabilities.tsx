const capabilities = [
    {
        label: "Workflow Connectivity",
        headline: "Foundation for more automated workflows.",
        body: "Manual exports and re-entry exist because data doesn't move cleanly between workflows. AiCounting is built to change that.",
        example: {
            title: "Automated Compliance Reconciliation",
            body: "Automate year-end reconciliations such as GST reconciliation using data from the ATO, banks, and other sources of truth.",
        },
    },
    {
        label: "Multi-Entity Management",
        headline: "Every entity. One account. One standard.",
        body: "Most platforms treat each entity as a separate account with its own setup. AiCounting groups entities under a single account on a shared data standard.",
        example: {
            title: "AI-Powered Real-Time Analysis",
            body: "Leverage AI to benchmark and analyse performance across client businesses, uncovering risks, trends, and opportunities for higher-value advisory.",
        },
    },
    {
        label: "Financial Analytics",
        headline: "Insights that fragmented data can't produce.",
        body: "Structured, standardised data unlocks a different quality of analysis — deeper reporting, smarter modelling, and AI-driven insights across every entity you manage.",
        example: {
            title: "Automated Tax Scenario Modelling",
            body: "Model and compare tax scenarios using structured client data — so every recommendation is grounded in numbers, not estimates.",
        },
    },
];

type Capability = {
    label: string;
    headline: string;
    body: string;
    example: {
        title: string;
        body: string;
    };
};

const PlatformCapabilities = () => {
    const scrollToPartner = () => {
        const el = document.getElementById("partner-program");
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="platform-capabilities" className="py-32 bg-muted/40">
            <div className="container mx-auto px-4">

                {/* Section Heading */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-0.01em] leading-[1.15] text-primary">
                        A new kind of accounting platform.
                    </h2>
                </div>

                {/* Capability Columns */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-stretch">

                    {capabilities.map(({ label, headline, body, example }: Capability, i) => (
                        <div key={i} className="flex flex-col h-full">

                            {/* Accent line */}
                            <div className="w-8 h-0.5 bg-[#00A58C] mb-4" />

                            {/* Eyebrow */}
                            <p className="text-xs font-semibold uppercase tracking-widest text-[#00A58C] mb-3">
                                {label}
                            </p>

                            {/* Headline */}
                            <h3 className="font-heading text-lg font-semibold tracking-[-0.01em] leading-[1.2] text-primary mb-2">
                                {headline}
                            </h3>

                            {/* Body */}
                            <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                                {body}
                            </p>

                            {/* Divider */}
                            <div className="mt-auto border-t border-border/40 pt-5">

                                <p className="text-xs font-semibold uppercase tracking-widest text-foreground/30 mb-2">
                                    In development — one of many
                                </p>

                                <h4 className="text-base font-semibold text-primary mb-1.5">
                                    {example.title}
                                </h4>

                                <p className="text-sm text-foreground/50 leading-relaxed mb-4">
                                    {example.body}
                                </p>

                                <button
                                    onClick={scrollToPartner}
                                    className="text-sm font-semibold text-[#00A58C] hover:text-[#00A58C]/70 transition-colors inline-flex items-center gap-1"
                                >
                                    Help shape what gets built →
                                </button>

                            </div>

                        </div>
                    ))}

                </div>

                {/* Soft CTA */}
                <div className="text-center mt-16">
                    <button
                        onClick={scrollToPartner}
                        className="text-lg md:text-xl font-semibold text-[#00A58C] hover:text-[#00A58C]/70 transition-colors inline-flex items-center gap-1.5"
                    >
                        Join the early partner programme and help shape what gets built next →
                    </button>
                </div>

            </div>
        </section>
    );
};

export default PlatformCapabilities;
