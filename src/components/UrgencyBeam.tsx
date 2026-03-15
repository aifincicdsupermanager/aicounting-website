import { AlertCircle, Check } from "lucide-react";

const UrgencyBeam = () => {
    const scrollToHowItWorks = () => {
        document.getElementById("how-it-works-beam")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="urgency" className="py-32 bg-muted/40">
            <div className="container mx-auto px-4">

                {/* Section Heading */}
                <div className="text-center max-w-xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-0.01em] leading-[1.15] text-primary mb-6">
                        Payroll is changing. Be ready.
                    </h2>
                    <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                        Super payments are becoming more frequent, and the ATO's clearing
                        house is being phased out. The way payroll is processed is changing.
                    </p>
                </div>

                {/* Columns */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

                    {/* What's changing */}
                    <div className="flex flex-col">
                        <div className="w-8 h-0.5 bg-[#00A58C] mb-4" />
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#00A58C] mb-4">
                            What's changing
                        </p>
                        <h3 className="font-heading text-lg font-semibold tracking-[-0.01em] text-primary mb-3">
                            Payday Super arrives July 2026
                        </h3>
                        <p className="text-sm text-foreground/60 leading-relaxed mb-3">
                            From 1 July 2026, super must be paid at the same time as wages.
                        </p>
                        <p className="text-sm text-foreground/60 leading-relaxed">
                            ATO's Small Business Superannuation Clearing House is being phased out.
                        </p>
                    </div>

                    {/* What this means */}
                    <div className="flex flex-col">
                        <div className="w-8 h-0.5 bg-[#00A58C] mb-4" />
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#00A58C] mb-4">
                            What this means
                        </p>
                        <h3 className="font-heading text-lg font-semibold tracking-[-0.01em] text-primary mb-3">
                            More complexity, less time
                        </h3>
                        <ul className="space-y-3 mb-3">
                            <li className="flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-foreground/60 leading-relaxed">Super payments every pay run</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-foreground/60 leading-relaxed">Less time to process payroll</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-foreground/60 leading-relaxed">Higher risk of errors and penalties</span>
                            </li>
                        </ul>
                        <p className="text-sm text-foreground/60 leading-relaxed">
                            Manual processes and disconnected systems won't keep up.
                        </p>
                    </div>

                    {/* How AiCounting helps */}
                    <div className="flex flex-col">
                        <div className="w-8 h-0.5 bg-[#00A58C] mb-4" />
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#00A58C] mb-4">
                            How AiCounting helps
                        </p>
                        <h3 className="font-heading text-lg font-semibold tracking-[-0.01em] text-primary mb-3">
                            Built for what's coming
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#00A58C] mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-foreground/60 leading-relaxed">Process super via Beam</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#00A58C] mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-foreground/60 leading-relaxed">Keep payroll and accounting in sync</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#00A58C] mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-foreground/60 leading-relaxed">Stay compliant as requirements change</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Transition + soft CTA */}
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-lg text-foreground/70 leading-relaxed mb-16">
                        Connected systems will become essential. <br />
                        AiCounting is built for exactly this.
                    </p>
                    <button
                        onClick={scrollToHowItWorks}
                        className="text-lg md:text-xl font-semibold text-[#00A58C] hover:text-[#00A58C]/70 transition-colors inline-flex items-center gap-1.5"
                    >
                        See how it all connects →
                    </button>
                </div>

            </div>
        </section>
    );
};

export default UrgencyBeam;
