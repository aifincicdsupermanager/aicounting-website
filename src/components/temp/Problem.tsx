import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Repeat, GitCompare, FileSpreadsheet, Layers, ArrowRight } from "lucide-react";

const points = [
    {
        icon: Repeat,
        title: "Repeated work across workflows",
        description:
            "The same data is handled multiple times across different processes.",
    },
    {
        icon: GitCompare,
        title: "Inconsistencies in data",
        description:
            "Different workflows can produce conflicting results, requiring reconciliation.",
    },
    {
        icon: FileSpreadsheet,
        title: "Reliance on spreadsheets and manual checks",
        description:
            "Additional work is required to validate and align data across workflows.",
    },
    {
        icon: Layers,
        title: "Difficulty scaling across entities",
        description:
            "As complexity grows, managing data across multiple entities becomes harder.",
    },
];

const Problem = () => {
    const scrollToId = (id: string) => {
        const el = document.getElementById(id) ?? document.getElementById("pricing");
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="problem" className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Heading */}
                    <div className="text-center mb-6">
                        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-primary">
                            Why accounting systems feel disconnected
                        </h2>
                    </div>

                    {/* Intro */}
                    <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
                        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                            Most accounting systems are built as separate modules — bookkeeping,
                            payroll, tax and reporting, each with its own structure and
                            interpretation of data.
                        </p>

                        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                            Because of this, the same data is handled multiple times across
                            workflows, often exported into spreadsheets for analysis and
                            planning.
                        </p>
                    </div>

                    {/* Process Visual */}
                    <Card className="p-8 mb-12 bg-card border border-border text-center">
                        <div className="flex flex-wrap justify-center items-center gap-4 font-heading text-base md:text-lg font-medium text-primary">
                            <span className="px-6 py-3 bg-muted rounded-lg font-medium">Entered</span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground" />
                            <span className="px-6 py-3 bg-muted rounded-lg font-medium">Reclassified</span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground" />
                            <span className="px-6 py-3 bg-muted rounded-lg font-medium">Adjusted</span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground" />
                            <span className="px-6 py-3 bg-muted rounded-lg font-medium">Reconciled</span>
                        </div>

                        <p className="mt-4 text-muted-foreground">
                            And then repeated across workflows.
                        </p>
                    </Card>

                    {/* Insight */}
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
                            The issue isn’t the workflow — it’s the data
                        </h3>

                        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                            When data is structured differently across workflows, processes
                            remain disconnected, requiring manual adjustments and
                            reconciliation.
                        </p>
                    </div>

                    {/* Problem Points */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {points.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <Card
                                    key={index}
                                    className="p-6 bg-card border border-border hover:shadow-lg transition-shadow h-full"
                                >
                                    {/* Keep icon in original "top" position (NOT centered to card) */}
                                    <div className="grid grid-cols-[48px_1fr] gap-4 items-start">
                                        {/* Icon */}
                                        <div className="flex justify-center">
                                            {/* fixed-size icon box */}
                                            <div className="h-10 w-10 flex items-center justify-center bg-muted rounded-lg">
                                                <Icon className="w-5 h-5 text-primary" />
                                            </div>
                                        </div>

                                        {/* Text Column */}
                                        <div>
                                            {/* Title row: match the icon box height and center the title inside it */}
                                            <div className="h-10 flex items-center">
                                                <h3 className="font-heading text-xl font-semibold text-primary">
                                                    {item.title}
                                                </h3>
                                            </div>

                                            {/* Description starts aligned with the title (same left edge) */}
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
                                onClick={() => scrollToId("solution")}
                                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base md:text-lg px-8 py-6 h-auto rounded-2xl shadow-sm"
                            >
                                See how AiCounting solves this
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => scrollToId("features")}
                                className="font-semibold text-base md:text-lg px-8 py-6 h-auto rounded-2xl bg-background/40 backdrop-blur border-border"
                            >
                                View full access
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;