import { Card } from "@/components/ui/card";

const categories = [
    {
        title: "Financial Management",
        modules: [
            {
                name: "Bookkeeping",
                description: "Capture, categorise, and reconcile transactions — the foundation every other workflow builds on.",
            },
            {
                name: "Asset Management",
                description:
                    "Track assets and components with full accounting and tax visibility — in one place.",
            },
            {
                name: "Financial Reporting",
                description:
                    "Balance sheet, profit and loss, and cash flow — generated directly from your bookkeeping data.",
            },
        ],
    },
    {
        title: "Business Operations",
        modules: [
            {
                name: "Payroll",
                description:
                    "STP2-compliant payroll with Beam Super and automated PAYG — direct flow into your books.",
            },
            {
                name: "Invoicing & Bills",
                description:
                    "Send invoices, record bills, and manage payments — both sides of your cash flow, in one place.",
            },
            {
                name: "Multi-Entity Management",
                description:
                    "Group and manage multiple entities from one account, with consolidated reporting.",
            },
        ],
    },
    {
        title: "Compliance & Advisory",
        modules: [
            {
                name: "Activity Statement",
                description:
                    "Prepare and lodge Activity Statements with the ATO — auto-prepared from your bookkeeping data.",
            },
            {
                name: "Tax Compliance",
                description:
                    "Prepare and lodge individual and non-individual tax returns directly with the ATO.",
                comingSoon: true,
            },
            {
                name: "Tax Planning",
                description:
                    "Tax planning across all entities, with a complete view of the group.",
            },
        ],
    },
];

const CoreWorkflows = () => {
    const scrollToSignup = () => {
        const el = document.getElementById("partner-program");
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="core-workflows" className="py-32 bg-muted/40">
            <div className="container mx-auto px-4">

                {/* Section Heading */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-0.01em] leading-[1.15] text-primary">
                        One system. Every workflow.
                    </h2>
                </div>

                {/* Feature Grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                    {categories.map((category, idx) => (
                        <div key={idx} className="flex flex-col">

                            {/* Accent line */}
                            <div className="w-8 h-0.5 bg-[#00A58C] mb-4" />

                            {/* Category Title */}
                            <p className="text-xs font-semibold uppercase tracking-widest text-[#00A58C] mb-4">
                                {category.title}
                            </p>

                            {/* Feature Cards */}
                            <div className="grid grid-rows-3 gap-4 flex-1">

                                {category.modules.map((module, i) => (
                                    <Card
                                        key={i}
                                        className="p-5 bg-background border border-border/40 hover:shadow-md transition-shadow flex flex-col"
                                    >

                                        <div className="flex items-center gap-2 mb-2">

                                            <h4 className="text-lg font-semibold tracking-[-0.01em] text-primary">
                                                {module.name}
                                            </h4>

                                            {module.comingSoon && (
                                                <span className="text-xs px-2 py-0.5 rounded-full bg-[#6F7A83]/10 text-[#6F7A83] font-medium">
                                                    Coming soon
                                                </span>
                                            )}

                                        </div>

                                        <p className="text-sm text-foreground/60 leading-relaxed">
                                            {module.description}
                                        </p>

                                    </Card>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

                {/* Soft CTA */}
                <div className="text-center mt-16">
                    <button
                        onClick={scrollToSignup}
                        className="text-lg md:text-xl font-semibold text-[#00A58C] hover:text-[#00A58C]/70 transition-colors inline-flex items-center gap-1.5"
                    >
                        Ready to run your accounting in one place? Apply for early access →
                    </button>
                </div>

            </div>
        </section>
    );
};

export default CoreWorkflows;