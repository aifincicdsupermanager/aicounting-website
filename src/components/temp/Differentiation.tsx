import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers, RefreshCcw, ShieldCheck, Banknote } from "lucide-react";

type DiffItem = {
    icon: React.ElementType;
    title: string;
    description: string;
    hint: string;
};

const difference: DiffItem[] = [
    {
        icon: Layers,
        title: "All workflows, one system",
        description:
            "Bookkeeping, compliance, reporting and analysis, all connected in a single platform.",
        hint: "One platform → connected workflows",
    },
    {
        icon: RefreshCcw,
        title: "No rework between tasks",
        description:
            "Capture data once and use it across workflows, without remapping or manual adjustments.",
        hint: "Capture once → use everywhere",
    },
    {
        icon: ShieldCheck,
        title: "Built-in compliance",
        description: "Lodge STP2, BAS and more directly with the ATO.",
        hint: "Built-in lodgement → fewer tools",
    },
    {
        icon: Banknote,
        title: "More included, lower cost",
        description:
            "Access a full suite of features without paying for multiple systems.",
        hint: "Bundled modules → lower total cost",
    },
];

const Differentiation = () => {
    const scrollToId = (id: string) => {
        const el = document.getElementById(id) ?? document.getElementById("pricing");
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="differentiation" className="py-20 bg-muted/40">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-6xl mx-auto">
                    {/* Heading */}
                    <h2 className="font-heading text-4xl md:text-5xl font-semibold text-primary mb-6">
                        Why AiCounting is different
                    </h2>

                    {/* Subtext */}
                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-4xl mx-auto mb-12">
                        Designed to remove manual work and keep your data consistent across
                        workflows.
                    </p>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {difference.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <Card
                                    key={index}
                                    className="p-7 bg-card hover:shadow-lg transition-shadow h-full flex flex-col"
                                >
                                    {/* Title row: icon vertically centered with headline */}
                                    <div className="text-left flex flex-col gap-3">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent flex-shrink-0">
                                                <Icon className="w-6 h-6" />
                                            </div>

                                            <h3 className="font-heading text-xl font-semibold text-primary leading-tight">
                                                {item.title}
                                            </h3>
                                        </div>

                                        {/* Description aligned with text column */}
                                        <p className="text-foreground/80 leading-relaxed pl-16">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Micro-hint pinned to bottom and aligned with text column */}
                                    <div className="mt-auto pt-6 text-left pl-16">
                                        <span className="font-heading text-base md:text-base font-medium text-primary">
                                            {item.hint}
                                        </span>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                            <Button
                                size="lg"
                                onClick={() => scrollToId("features")}
                                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base md:text-lg px-8 py-6 h-auto rounded-2xl shadow-sm"
                            >
                                See everything included
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => scrollToId("problem")}
                                className="font-semibold text-base md:text-lg px-8 py-6 h-auto rounded-2xl bg-background/40 backdrop-blur border-border"
                            >
                                Learn how it works
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Differentiation;