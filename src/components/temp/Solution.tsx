import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Layers, Workflow } from "lucide-react";

const points = [
    {
        icon: Database,
        title: "Structured with context",
        description:
            "Transactions are captured with built-in context, so each data point carries consistent meaning from the start.",
    },
    {
        icon: Layers,
        title: "Standardised by design",
        description:
            "A unified data framework ensures consistency across accounts, entities and workflows.",
    },
    {
        icon: Workflow,
        title: "Understood across workflows",
        description:
            "Data is automatically applied across bookkeeping, compliance, reporting and analysis without rework.",
    },
];

const Solution = () => {
    const scrollToId = (id: string) => {
        const el = document.getElementById(id) ?? document.getElementById("pricing");
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="solution" className="py-20 bg-muted/40">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <h2 className="font-heading text-4xl md:text-5xl font-semibold text-primary mb-6">
                        Structure your data once. Use it across every workflow.
                    </h2>

                    {/* Intro */}
                    <div className="max-w-4xl mx-auto space-y-4 mb-16">
                        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                            AiCounting is built on a unified data foundation where each transaction
                            is captured with consistent meaning from the start.
                        </p>

                        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                            This allows data to flow across workflows without reclassification
                            or manual adjustments — enabling automation and making data ready
                            for reporting, insights and advisory.
                        </p>
                    </div>

                    {/* Pillars (Standardized Layout) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {points.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <Card
                                    key={index}
                                    className="p-6 bg-card border border-border hover:shadow-lg transition-shadow h-full"
                                >
                                    <div className="grid grid-cols-[48px_1fr] gap-4 items-start text-left">

                                        {/* Icon */}
                                        <div className="flex justify-center">
                                            <div className="h-10 w-10 flex items-center justify-center bg-accent/10 rounded-lg">
                                                <Icon className="w-5 h-5 text-accent" />
                                            </div>
                                        </div>

                                        {/* Text Column */}
                                        <div>
                                            <div className="h-10 flex items-center">
                                                <h3 className="font-heading text-xl font-semibold text-primary">
                                                    {item.title}
                                                </h3>
                                            </div>

                                            <p className="text-foreground/80 leading-relaxed mt-3">
                                                {item.description}
                                            </p>
                                        </div>

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
                                Explore everything included
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => scrollToId("benefits")}
                                className="font-semibold text-base md:text-lg px-8 py-6 h-auto rounded-2xl bg-background/40 backdrop-blur border-border"
                            >
                                See what this means in practice
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Solution;