import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const benefits = [
    {
        title: "Reduce manual work",
        description:
            "Capture transactions once and use them across workflows without rework.",
    },
    {
        title: "Improve data consistency",
        description:
            "Keep bookkeeping, compliance and reporting aligned automatically.",
    },
    {
        title: "Enable automation",
        description:
            "Structured data makes automation reliable and not dependent on manual checks.",
    },
    {
        title: "Unlock analysis and advisory",
        description:
            "Use the same trusted data for reporting, planning and advisory.",
    },
];

const Benefits = () => {
    const scrollToFeatures = () => {
        document
            .getElementById("features")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="benefits" className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-primary">
                            What this means in practice
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {benefits.map((benefit, index) => (
                            <Card
                                key={index}
                                className="p-6 bg-card border border-border hover:shadow-lg transition-shadow h-full"
                            >
                                <div className="grid grid-cols-[48px_1fr] gap-4 items-start text-left">

                                    {/* Icon */}
                                    <div className="flex justify-center">
                                        <div className="h-10 w-10 flex items-center justify-center bg-accent/10 rounded-lg">
                                            <Check className="w-5 h-5 text-accent" />
                                        </div>
                                    </div>

                                    {/* Text Column */}
                                    <div>
                                        <div className="h-10 flex items-center">
                                            <h3 className="font-heading text-xl font-semibold text-primary">
                                                {benefit.title}
                                            </h3>
                                        </div>

                                        <p className="text-foreground/80 leading-relaxed mt-3">
                                            {benefit.description}
                                        </p>
                                    </div>

                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex justify-center">
                        <Button
                            size="lg"
                            onClick={scrollToFeatures}
                            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 h-auto"
                        >
                            Explore our capabilities
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Benefits;