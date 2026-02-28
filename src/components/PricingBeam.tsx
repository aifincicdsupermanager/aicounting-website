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

const Pricing = () => {
    const scrollToSignup = () => {
        document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
    };

    const renderFeature = (feature, type) => {
        const available = type === "payroll" ? feature.payroll : feature.full;

        return (
            <li className="flex items-start gap-3">
                <div className="w-4 h-4 flex items-center justify-center shrink-0 mt-1">
                    {available && (
                        <Check className="w-4 h-4 text-accent" />
                    )}
                </div>

                <span
                    className={
                        available
                            ? "text-foreground/80 leading-relaxed"
                            : "text-foreground/10 leading-relaxed"
                    }
                >
                    {feature.label}
                </span>
            </li>
        );
    };

    return (
        <section id="pricing" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-5xl mx-auto">

                    {/* Heading */}
                    <h2 className="font-heading text-4xl md:text-5xl font-semibold text-primary mb-6">
                        Simple, predictable pricing
                    </h2>

                    <div className="max-w-3xl mx-auto space-y-4 mb-12">
                        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                            Start with payroll. Expand into a complete system when you're ready.
                        </p>

                        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                            One subscription per business. No per-employee pricing. No add-ons.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        {/* Payroll Only */}
                        <Card className="p-8 bg-card border border-primary/20 shadow-sm flex flex-col">

                            <h3 className="font-heading text-2xl font-semibold text-primary mb-2">
                                Payroll Only
                            </h3>

                            <p className="text-foreground/70 mb-2">
                                Simple payroll with Beam super payments
                            </p>

                            <p className="text-sm text-accent font-medium mb-4">
                                Upgrade to full platform for $20 more
                            </p>

                            <p className="text-4xl font-bold text-primary mb-6">
                                $10<span className="text-lg font-medium">/month</span>
                            </p>

                            {/* Features */}
                            <div className="text-left space-y-6 mb-8">

                                {features
                                    .filter((group) => group.group === "Payroll")
                                    .map((group, idx) => (
                                        <div key={idx}>
                                            <p className="text-sm uppercase tracking-wide text-muted-foreground mb-2">
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

                            {/* CTA */}
                            <div className="mt-auto">
                                <Button
                                    onClick={scrollToSignup}
                                    className="w-full mb-3 bg-primary/90 hover:bg-primary"
                                >
                                    Start with payroll
                                </Button>

                                <p className="text-sm text-foreground/60 mt-3">
                                    No per-employee pricing. No hidden fees.
                                </p>
                            </div>
                        </Card>

                        {/* Full Platform */}
                        <Card className="p-8 bg-card border-2 border-accent relative flex flex-col">

                            {/* Badge */}
                            <div className="absolute top-4 right-4 text-sm bg-accent text-accent-foreground px-3 py-1 rounded-full">
                                Most Popular
                            </div>

                            <h3 className="font-heading text-2xl font-semibold text-primary mb-2">
                                Full Platform
                            </h3>

                            <p className="text-foreground/70 mb-2">
                                Payroll, accounting and compliance in one system
                            </p>

                            <p className="text-sm text-accent font-medium mb-4">
                                Everything connected in one workflow
                            </p>

                            <p className="text-4xl font-bold text-primary mb-6">
                                $30<span className="text-lg font-medium">/month</span>
                            </p>

                            {/* Features */}
                            <div className="text-left space-y-6 mb-8">

                                {features.map((group, idx) => (
                                    <div key={idx}>

                                        <p className="text-sm uppercase tracking-wide text-muted-foreground mb-2">
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

                            {/* CTA */}
                            <div className="mt-auto">
                                <Button
                                    onClick={scrollToSignup}
                                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mb-3"
                                >
                                    Get full platform
                                </Button>

                                <p className="text-sm text-foreground/60 mt-3">
                                    One system. One price. No add-ons.
                                </p>
                            </div>
                        </Card>
                    </div>

                    {/* Reinforcement */}
                    <div className="max-w-4xl mx-auto mt-12 space-y-4 mb-12">
                        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                            Most businesses pay for payroll and accounting separately.
                        </p>

                        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                            AiCounting brings everything together into one system, with one simple monthly price.
                        </p>
                    </div>

                    {/* Highlight */}
                    <Card className="p-8 bg-card hover:shadow-lg transition-shadow mb-10">
                        <p className="font-heading text-2xl md:text-3xl font-semibold text-primary">
                            Grow your team without growing your software costs.
                        </p>
                    </Card>

                    {/* Final CTA */}
                    <div className="mt-12">
                        <Button
                            size="lg"
                            onClick={scrollToSignup}
                            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 h-auto"
                        >
                            Get started
                        </Button>

                        <p className="text-sm text-foreground/60 mt-6">
                            No setup fees. Cancel anytime.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;