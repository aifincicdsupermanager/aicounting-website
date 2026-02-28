import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Check } from "lucide-react";

const Urgency = () => {
    const scrollToHowItWorks = () => {
        document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="urgency" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="font-heading text-4xl md:text-5xl font-semibold text-primary mb-6">
                        Payroll is changing. Be ready.
                    </h2>

                    <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                        Super payments are becoming more frequent, and the ATO's clearing house is being phased out.
                        The way payroll is processed is changing.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    {/* Change */}
                    <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
                        <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                            What's changing
                        </h3>

                        <p className="text-foreground/80 leading-relaxed mb-4">
                            From 1 July 2026, super must be paid at the same time as wages (Payday Super).
                        </p>

                        <p className="text-foreground/80 leading-relaxed">
                            ATO's Small Business Superannuation Clearing House is being phased out.
                        </p>
                    </Card>

                    {/* Impact */}
                    <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
                        <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                            What this means
                        </h3>

                        <ul className="space-y-3 text-foreground/80">
                            <li className="flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 text-amber-500 mt-1" />
                                <span>Super payments every pay run</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 text-amber-500 mt-1" />
                                <span>Less time to process payroll</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 text-amber-500 mt-1" />
                                <span>Higher risk of errors and penalties</span>
                            </li>
                        </ul>

                        <p className="mt-4 text-foreground/80">
                            Manual processes and disconnected systems won't keep up.
                        </p>
                    </Card>

                    {/* Solution */}
                    <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
                        <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                            How AiCounting helps
                        </h3>

                        <ul className="space-y-3 text-foreground/80">
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-accent mt-1" />
                                <span>Process super via Beam</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-accent mt-1" />
                                <span>Keep payroll and accounting in sync</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-accent mt-1" />
                                <span>Stay compliant as requirements change</span>
                            </li>
                        </ul>

                        <p className="mt-4 text-foreground/80">
                            Everything in one place.
                        </p>
                    </Card>

                </div>

                {/* Transition */}
                <div className="max-w-4xl mx-auto mt-16 space-y-4 text-center">
                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                        Most businesses will need to rethink how payroll is managed.
                    </p>

                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                        Connected systems will become essential.
                    </p>

                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                        See how AiCounting connects payroll, accounting and compliance, in one workflow.
                    </p>
                </div>

                {/* CTA */}
                <div className="flex justify-center mt-8">
                    <Button
                        size="lg"
                        onClick={scrollToHowItWorks}
                        className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 h-auto"
                    >
                        See how it works
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default Urgency;