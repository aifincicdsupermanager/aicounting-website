import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
    {
        group: "Payroll",
        items: [
            { label: "STP2 compliant payroll", payroll: true, full: true },
            { label: "Beam super payments", payroll: true, full: true },
            { label: "PAYG & super calculations", payroll: true, full: true },
            { label: "Employee management & payslips", payroll: true, full: true },
        ],
    },
    {
        group: "Accounting & compliance",
        items: [
            { label: "Bookkeeping", payroll: false, full: true },
            { label: "Financial reporting", payroll: false, full: true },
            { label: "BAS preparation", payroll: false, full: true },
            { label: "Invoicing & expenses", payroll: false, full: true },
            { label: "Asset management", payroll: false, full: true },
        ],
    },
    {
        group: "Work across entities",
        items: [
            { label: "Multi-entity support", payroll: false, full: true },
            { label: "Consolidated views", payroll: false, full: true },
        ],
    },
];

type FeatureItem = { label: string; payroll: boolean; full: boolean };

const PricingBeam = () => {
    const scrollToSignup = () => {
        document.getElementById("signup-beam")?.scrollIntoView({ behavior: "smooth" });
    };

    const renderFeature = (feature: FeatureItem, type: string) => {
        const available = type === "payroll" ? feature.payroll : feature.full;
        return (
            <li className="flex items-start gap-3">
                <div className="w-4 h-4 flex items-center justify-center shrink-0 mt-0.5">
                    {available && <Check className="w-4 h-4 text-[#00A58C]" />}
                </div>
                <span className={available ? "text-sm text-foreground/70 leading-relaxed" : "text-sm text-foreground/20 leading-relaxed"}>
                    {feature.label}
                </span>
            </li>
        );
    };

    return (
        <section id="pricing-beam" className="py-32 bg-muted/40">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">

                    {/* Section Heading */}
                    <div className="text-center max-w-2xl mx-auto mb-4">
                        <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-0.01em] leading-[1.15] text-primary mb-6">
                            Simple, predictable pricing
                        </h2>
                        <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                            Start with payroll. Expand into a complete system when you're ready. <br />
                            One subscription per business. No per-employee pricing. No add-ons.
                        </p>
                    </div>

                    {/* Free trial callout */}
                    <div className="text-center mb-10">
                        <p className="text-base font-semibold text-[#00A58C]">
                            Your first month is free.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">

                        {/* Payroll Only */}
                        <Card className="p-8 bg-background border border-border/40 flex flex-col">

                            {/* Teal accent line */}
                            <div className="w-8 h-0.5 bg-[#00A58C] mb-5" />

                            <h3 className="font-heading text-2xl font-semibold tracking-[-0.01em] text-primary mb-2">
                                Payroll Only
                            </h3>
                            <p className="text-sm text-foreground/60 mb-2">
                                Simple payroll with Beam super payments
                            </p>
                            <p className="text-sm text-[#00A58C] font-semibold mb-6">
                                Upgrade to full platform for $20 more
                            </p>
                            <p className="text-4xl font-bold text-primary mb-2">
                                $10<span className="text-lg font-medium text-foreground/60">/month</span>
                            </p>
                            <p className="text-sm text-foreground/40 mb-8">Billed annually.</p>

                            <div className="text-left space-y-6 mb-8">
                                {features
                                    .filter((group) => group.group === "Payroll")
                                    .map((group, idx) => (
                                        <div key={idx}>
                                            <p className="text-xs font-semibold uppercase tracking-widest text-[#00A58C] mb-3">
                                                {group.group}
                                            </p>
                                            <ul className="space-y-2">
                                                {group.items.map((feature, i) => (
                                                    <li key={i}>{renderFeature(feature, "payroll")}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                            </div>

                            <div className="mt-auto">
                                <Button
                                    size="lg"
                                    onClick={scrollToSignup}
                                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 py-4 h-auto rounded-lg"
                                >
                                    Start free
                                </Button>
                            </div>

                        </Card>

                        {/* Full Platform */}
                        <Card className="p-8 bg-background border-2 border-[#00A58C] relative flex flex-col">

                            {/* Badge */}
                            <div className="absolute top-4 right-4 text-xs font-semibold bg-[#00A58C] text-white px-3 py-1 rounded-full">
                                Most Popular
                            </div>

                            {/* Teal accent line */}
                            <div className="w-8 h-0.5 bg-[#00A58C] mb-5" />

                            <h3 className="font-heading text-2xl font-semibold tracking-[-0.01em] text-primary mb-2">
                                Full Platform
                            </h3>
                            <p className="text-sm text-foreground/60 mb-2">
                                Payroll, accounting and compliance in one system
                            </p>
                            <p className="text-sm text-[#00A58C] font-semibold mb-6">
                                Everything connected in one workflow
                            </p>
                            <p className="text-4xl font-bold text-primary mb-2">
                                $30<span className="text-lg font-medium text-foreground/60">/month</span>
                            </p>
                            <p className="text-sm text-foreground/40 mb-8">Billed annually.</p>

                            <div className="text-left space-y-6 mb-8">
                                {features.map((group, idx) => (
                                    <div key={idx}>
                                        <p className="text-xs font-semibold uppercase tracking-widest text-[#00A58C] mb-3">
                                            {group.group}
                                        </p>
                                        <ul className="space-y-2">
                                            {group.items.map((feature, i) => (
                                                <li key={i}>{renderFeature(feature, "full")}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <Button
                                    size="lg"
                                    onClick={scrollToSignup}
                                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8 py-4 h-auto rounded-lg"
                                >
                                    Get started free
                                </Button>
                            </div>

                        </Card>
                    </div>

                    {/* Reinforcement */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                            Most businesses pay for payroll and accounting separately.
                            AiCounting brings everything together into one system, with one simple monthly price.
                        </p>
                    </div>

                    {/* Highlight statement */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="font-heading text-2xl md:text-3xl font-semibold tracking-[-0.01em] text-primary">
                            Grow your team without growing your software costs.
                        </p>
                    </div>

                    {/* Final CTA */}
                    <div className="text-center">
                        <Button
                            size="lg"
                            onClick={scrollToSignup}
                            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8 py-4 h-auto rounded-lg"
                        >
                            Get started free
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PricingBeam;
