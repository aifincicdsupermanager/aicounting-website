import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const steps = [
    {
        title: "Process payroll and super in one place",
        description:
            "Run payroll with STP2 compliance and pay super via Beam, all within the same system.",
    },
    {
        title: "Automatically flow into accounting",
        description:
            "Payroll data flows directly into accounting, without manual journals, reconciliation or rework.",
    },
    {
        title: "Prepare reporting and compliance",
        description:
            "Generate financial reports and prepare BAS from the same data, without re-entry or adjustments.",
    },
];

const HowItWorks = () => {
    const scrollToPricing = () => {
        document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="how-it-works" className="py-20">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <h2 className="font-heading text-4xl md:text-5xl font-semibold text-primary mb-6">
                        Run payroll. Everything stays in sync.
                    </h2>

                    {/* Intro */}
                    <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
                        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                            Payroll is just one part of your workflow.
                        </p>

                        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                            AiCounting connects payroll with accounting, reporting and compliance, <br />
                            so everything works from the same data, in one connected platform.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {steps.map((item, index) => (
                            <Card
                                key={index}
                                className="p-6 bg-card hover:shadow-lg transition-shadow h-full"
                            >
                                <div className="flex items-start space-x-3 h-full">
                                    <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                    <div className="text-left">
                                        <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-foreground/80 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Highlight */}
                    <Card className="p-8 bg-card hover:shadow-lg transition-shadow mb-10">
                        <p className="font-heading text-2xl md:text-3xl font-semibold text-primary">
                            Capture data once. Use it across your entire workflow.
                        </p>
                    </Card>

                    {/* CTA */}
                    <div className="flex justify-center">
                        <Button
                            size="lg"
                            onClick={scrollToPricing}
                            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 h-auto"
                        >
                            View pricing plans
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;