import {
    BookOpen,
    Landmark,
    Briefcase,
    Users,
    FileCheck,
    BarChart3,
    FileText,
    ShieldCheck,
    Lightbulb
} from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
    {
        title: "Financial Management",
        modules: [
            {
                name: "Bookkeeping",
                icon: BookOpen,
                description: "Capture and categorise your daily transactions.",
            },
            {
                name: "Asset Management",
                icon: Landmark,
                description: "Track assets with component-level visibility in accounting and tax.",
            },
            {
                name: "Financial Reporting",
                icon: BarChart3,
                description: "Real-time financial reports and insights across entities.",
            },
        ],
    },
    {
        title: "Business Operations",
        modules: [
            {
                name: "Payroll",
                icon: Briefcase,
                description: "STP2-compliant payroll with Beam Super Payments built-in.",
            },
            {
                name: "Invoicing & Bills",
                icon: FileText,
                description: "Manage customer invoices and supplier bills in one place.",
            },
            {
                name: "Multi-Entity Management",
                icon: Users,
                description: "Manage multiple businesses and consolidate financial visibility.",
            },
        ],
    },
    {
        title: "Compliance & Reporting",
        modules: [
            {
                name: "Activity Statement",
                icon: FileCheck,
                description: "Prepare and lodge BAS directly from your bookkeeping data.",
            },
            {
                name: "Tax Compliance",
                icon: ShieldCheck,
                description: "Prepare and lodge tax returns from the same data.",
                comingSoon: true,
            },
            {
                name: "Tax Planning",
                icon: Lightbulb,
                description: "Model tax scenarios and planning strategies across entities.",
            },
        ],
    },
];

const CoreWorkflows = () => {
    return (
        <section id="core-workflows" className="py-24 bg-muted/40">
            <div className="container mx-auto px-4">

                {/* Section Heading */}
                <div className="text-center max-w-xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary">
                        Run every core accounting workflow with AiCounting
                    </h2>
                </div>

                {/* Feature Grid — flat, no outer cards */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                    {categories.map((category, idx) => (
                        <div key={idx}>

                            {/* Teal accent line */}
                            <div className="w-8 h-0.5 bg-[#00A58C] mb-5" />

                            {/* Category Title */}
                            <h3 className="text-xs font-semibold uppercase tracking-widest
                                           text-[#00A58C] mb-5"
                                style={{ fontFamily: "'Inter', sans-serif" }}>
                                {category.title}
                            </h3>

                            {/* Feature Cards */}
                            <div className="flex flex-col gap-3">
                                {category.modules.map((module, i) => {
                                    const Icon = module.icon;

                                    return (
                                        <Card
                                            key={i}
                                            className="p-5 bg-background border border-border
                                                       hover:shadow-md transition-shadow"
                                        >
                                            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">

                                                {/* Icon — neutralised to Trust Blue */}
                                                <div className="h-9 w-9 flex items-center justify-center
                                                                bg-primary/5 rounded-lg shrink-0">
                                                    <Icon className="w-4 h-4 text-primary/40" />
                                                </div>

                                                {/* Content */}
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <h4 className="font-semibold text-primary text-sm">
                                                            {module.name}
                                                        </h4>
                                                        {module.comingSoon && (
                                                            <span className="text-[10px] px-2 py-0.5 rounded-full
                                                                             bg-[#00A58C]/10 text-[#00A58C] font-medium">
                                                                Coming soon
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-foreground/60 mt-1 leading-relaxed">
                                                        {module.description}
                                                    </p>
                                                </div>

                                            </div>
                                        </Card>
                                    );
                                })}
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default CoreWorkflows;