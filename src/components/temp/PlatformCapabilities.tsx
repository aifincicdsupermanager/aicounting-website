import { Card } from "@/components/ui/card";

const capabilities = [
    {
        label: "Workflow Connectivity",
        headline: "The foundation for a more automated accounting workflow.",
        body: "Manual exports and re-entry exist because data doesn't move cleanly between workflows. AiCounting is built to change that.",
    },
    {
        label: "Multi-Entity Management",
        headline: "Every entity. One account. One standard.",
        body: "Most platforms treat each entity as a separate account with its own setup. AiCounting groups entities under a single account on a shared data standard.",
    },
    {
        label: "Financial Analytics",
        headline: "Insights that fragmented data can't produce.",
        body: "Structured, standardised data unlocks a different quality of analysis — deeper reporting, smarter modelling, and AI-driven insights across every entity you manage.",
    },
];

const PlatformCapabilities = () => {
    return (
        <section id="platform-capabilities" className="py-24 bg-background">
            <div className="container mx-auto px-4">

                {/* Section Heading */}
                <div className="text-center max-w-xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary">
                        A new kind of accounting platform.
                    </h2>
                </div>

                {/* Capability columns — no cards, no visuals */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {capabilities.map(({ label, headline, body }, i) => (
                        <div key={i}>

                            {/* Top accent line */}
                            <div className="w-8 h-0.5 bg-[#00A58C] mb-6" />

                            {/* Label */}
                            <p className="text-xs font-semibold uppercase tracking-widest
                                          text-[#00A58C] mb-3"
                                style={{ fontFamily: "'Inter', sans-serif" }}>
                                {label}
                            </p>

                            {/* Headline */}
                            <h3 className="font-heading text-lg font-semibold text-primary
                                           leading-snug mb-3">
                                {headline}
                            </h3>

                            {/* Body */}
                            <p className="text-sm text-foreground/60 leading-relaxed">
                                {body}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PlatformCapabilities;