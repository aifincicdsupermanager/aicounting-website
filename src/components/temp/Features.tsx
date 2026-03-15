import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Layers,
  Boxes,
  Receipt,
  FileText,
  Wallet,
  ShieldCheck,
  Landmark,
  BarChart3,
  Network,
  Sparkles,
  Rocket,
  BrainCircuit,
  FileBadge2,
} from "lucide-react";

/* ========================= */
/* CORE MODULES */
/* ========================= */

const coreModules = [
  { icon: Layers, name: "Bookkeeping" },
  { icon: Boxes, name: "Asset Management" },
  { icon: Receipt, name: "Invoicing & Payments" },
  { icon: FileText, name: "Bills & Expenses" },
  { icon: Wallet, name: "Payroll & STP2 Lodgement" },
  { icon: ShieldCheck, name: "Super Payments" },
  { icon: Landmark, name: "BAS Preparation & Lodgement" },
  { icon: BarChart3, name: "Financial Reporting" },
  { icon: Network, name: "Multi-Entity Support" },
];

/* ========================= */
/* ARCHITECTURAL DIFFERENTIATION */
/* ========================= */

const advancedModules = [
  {
    icon: Boxes,
    title: "Component-Level Asset Intelligence",
    description:
      "Track assets acquired in stages under a unified structure while maintaining accounting and tax depreciation side-by-side.",
  },
  {
    icon: Network,
    title: "Native Multi-Entity Infrastructure",
    description:
      "Operate multiple entities within one unified data environment — enabling consolidated reporting and cross-entity workflows.",
  },
  {
    icon: Sparkles,
    title: "Structured Data Architecture",
    description:
      "Every module runs on a unified data foundation — so workflows stay connected without reclassification or manual adjustments.",
  },
];

/* ========================= */
/* EXPANDING CAPABILITIES */
/* ========================= */

const expandingCapabilities = [
  {
    icon: FileBadge2,
    title: "Integrated Income Tax Lodgement",
    description:
      "Generate and lodge tax returns directly from live accounting data — without manual rework or export.",
  },
  {
    icon: Landmark,
    title: "Automated Compliance Reconciliation",
    description:
      "Eliminate manual year-end reconciliations by syncing structured data with ATO and bank records.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Driven Tax Scenario Modelling",
    description:
      "Simulate tax outcomes across entities to support faster, more confident planning decisions.",
  },
  {
    icon: Rocket,
    title: "AI-Powered Performance Intelligence",
    description:
      "Identify trends, risks and opportunities across entities — without exporting or manual analysis.",
  },
];

const Features = () => {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="features" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-primary mb-5">
              Everything you need — in one connected system
            </h2>

            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Accounting, compliance and reporting unified on a structured data foundation.
            </p>
          </div>

          {/* CORE MODULES */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary">
                Core Modules
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {coreModules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <Card
                    key={index}
                    className="p-4 bg-card border border-border hover:shadow-sm transition-shadow flex items-center gap-3"
                  >
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="font-heading text-lg font-semibold text-primary leading-tight">
                      {module.name}
                    </span>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* WHERE AICOUNTING GOES FURTHER */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary">
                Where AiCounting goes further
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {advancedModules.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 bg-card border border-border hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>

                      <h4 className="font-heading text-lg font-semibold text-primary leading-tight">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-foreground/80 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* EXPANDING CAPABILITIES — NOW 3 COLUMNS */}
          <div>
            <div className="text-center mb-10">
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary">
                Expanding Capabilities
              </h3>
              <p className="text-foreground/80 mt-3 max-w-5xl mx-auto">
                AiCounting continues to evolve — with more features, advanced automation and AI-driven capabilities under active development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {expandingCapabilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 bg-card border border-border hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>

                      <h4 className="font-heading text-lg font-semibold text-primary leading-tight">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-foreground/80 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button
                size="lg"
                onClick={() => scrollToId("features")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base md:text-lg px-8 py-6 h-auto rounded-2xl shadow-sm"
              >
                See pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;