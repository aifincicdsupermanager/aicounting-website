import {
    Database,
    Calculator,
    FileText,
    BarChart3,
    Table,
} from "lucide-react";

const tools = [
    { icon: Database, label: "Bookkeeping software" },
    { icon: Calculator, label: "Payroll systems" },
    { icon: FileText, label: "BAS & tax preparation" },
    { icon: BarChart3, label: "Reporting tools" },
    { icon: Table, label: "Spreadsheets & reconciliation" },
];

const PlatformReplacement = () => {
    return (
        <section id="platform-replacement" className="py-36 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* Heading */}

                <div className="text-center max-w-xl mx-auto">
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary leading-[1.2]">
                        Replace your fragmented accounting workflows
                    </h2>

                    <p className="mt-6 text-lg text-foreground/70">
                        Accounting workflows typically run across multiple systems, modules and spreadsheets.
                    </p>
                </div>

                {/* Divider */}

                <div className="mx-auto w-44 h-[2px] bg-gradient-to-r from-transparent via-border to-transparent my-16"></div>

                {/* Fragmented workflows container */}

                <div className="bg-background border border-border rounded-2xl p-8 mt-20">

                    <p className="text-center text-sm uppercase tracking-wide text-muted-foreground font-medium mb-8">
                        Fragmented accounting workflows today
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">

                        {tools.map((tool, index) => {
                            const Icon = tool.icon;

                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center p-5 bg-muted border border-border rounded-xl"
                                >
                                    <Icon className="w-6 h-6 text-primary mb-3" />

                                    <p className="text-sm text-foreground/80 leading-snug">
                                        {tool.label}
                                    </p>
                                </div>
                            );
                        })}

                    </div>

                </div>

                {/* AiCounting platform */}

                <div className="bg-background border border-border shadow-md rounded-2xl p-8 mt-16 text-center">

                    <p className="text-lg text-foreground/80 leading-loose max-w-3xl mx-auto">

                        <span className="font-heading text-primary">
                            AiCounting
                        </span>{" "}
                        replaces your fragmented workflows with one connected platform where every
                        workflow runs on the same{" "}

                        <span className="font-semibold text-foreground">
                            structured accounting data
                        </span>.

                    </p>

                </div>

            </div>
        </section>
    );
};

export default PlatformReplacement;