const aiTools = [
    {
        label: "Your Own AI Tools",
        headline: "Bring your own AI. The data is ready.",
        body: "Connect structured financial data directly to AI tools you already use — Excel Copilot, custom models, or any AI application that benefits from accurate, real-time numbers.",
    },
    {
        label: "Advisory Platforms",
        headline: "Feed clean data into every advisory tool.",
        body: "Structured, standardised financial data flows into advisory and planning platforms without reformatting or reconciliation. Every recommendation grounded in the same source of truth.",
    },
    {
        label: "Custom Automation",
        headline: "Automate on data you can trust.",
        body: "Build or connect automation that acts on accurate, real-time financial data across every entity you manage — without the cleanup that fragmented systems require.",
    },
];

const AiReadiness = () => {
    const scrollToPartner = () => {
        const el = document.getElementById("partner-program");
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="ai-readiness" className="py-32 bg-background">
            <div className="container mx-auto px-4">

                {/* Section Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">

                    {/* Eyebrow */}
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00A58C] mb-4">
                        Coming soon
                    </p>

                    {/* Headline */}
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-0.01em] leading-[1.15] text-primary mb-6">
                        Structured data. Ready for AI.
                    </h2>

                    {/* Body */}
                    <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                        AiCounting structures financial data to a consistent standard from
                        the ground up — so it's ready to feed directly into AI tools,
                        advisory platforms and automation, yours or ours.
                    </p>

                </div>

                {/* Closing statement */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="font-heading text-2xl md:text-3xl font-semibold tracking-[-0.01em] leading-[1.15] text-primary">
                        AiCounting is the data foundation that makes all of it possible.
                    </p>
                </div>

                {/* Tool columns */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-stretch mb-16">

                    {aiTools.map(({ label, headline, body }, i) => (
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
                            <p className="text-sm text-foreground/60 leading-relaxed">
                                {body}
                            </p>

                        </div>
                    ))}

                </div>

                {/* Soft CTA */}
                <div className="text-center">
                    <button
                        onClick={scrollToPartner}
                        className="text-lg md:text-xl font-semibold text-[#00A58C] hover:text-[#00A58C]/70 transition-colors inline-flex items-center gap-1.5"
                    >
                        Help shape what gets built next →
                    </button>
                </div>

            </div>
        </section>
    );
};

export default AiReadiness;
