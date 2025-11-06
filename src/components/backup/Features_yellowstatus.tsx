import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const currentFeatures = [
  {
    title: "Payroll",
    description:
      "A fully ATO-compliant module that streamlines pay-run processing, automates payroll calculations, and supports Single Touch Payroll (Phase 2) reporting to the ATO.",
    benefits: [
      "Direct ATO integration for fast, reliable STP2 lodgement.",
      "Automatic calculation of PAYG withholding for common wage types.",
      "Built-in employee and leave management.",
      "Seamless integration with upcoming Bookkeeping module.",
    ],
  },
  {
    title: "Activity Statement Submissions",
    description:
      "Prepare, review and lodge Activity Statements directly with the ATO.",
    benefits: [
      "Direct ATO integration for quick, reliable lodgement.",
      "Auto-prepared BAS from bookkeeping data.",
    ],
  },
  {
    title: "Automated Superannuation Payment",
    description:
      "Retrieve super information directly from the payroll module and process batch super contributions in one click.",
    benefits: [
      "Accurate super payment calculations generated directly from Payroll module.",
      "Batch super payments without manually distributing to each employee's fund.",
    ],
  },
];

const upcomingModules = [
  { name: "Invoice Management", status: "Testing in progress" },
  { name: "Bill Management", status: "Testing in progress" },
  { name: "Bookkeeping", status: "Testing in progress" },
  { name: "Asset Management", status: "Testing in progress" },
  { name: "Income Tax", status: "ATO whitelisting in progress" },
  { name: "Automated Compliance Reconciliation", status: "Coming soon" },
  { name: "Financial Statement", status: "Coming soon" },
  { name: "Automated Tax Planning", status: "Coming soon" },
  { name: "Automated Tax Scenario Modelling", status: "Coming soon" },
  { name: "AI-Powered Real-Time Analysis", status: "Coming soon" },
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-primary mb-6">
            Join the Next Generation of Accounting & Data Intelligence
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Become an early partner and help shape the future of intelligent, AI-powered accounting.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="font-heading text-3xl font-semibold text-primary mb-8 text-center">
            What's available today
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentFeatures.map((feature, index) => (
              <Card key={index} className="p-6 bg-card">
                <h4 className="font-heading text-2xl font-semibold text-primary mb-4">
                  {feature.title}
                </h4>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground mb-3">Key Benefits:</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-foreground/70 text-sm leading-relaxed flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-3xl font-semibold text-primary mb-8 text-center">
            What's coming tomorrow
          </h3>
          <Card className="p-8 bg-muted/30">
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingModules.map((module, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-card rounded-lg">
                  <span className="font-medium text-foreground">{module.name}</span>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                    {module.status}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
          <p className="text-center mt-8 text-lg text-foreground/70">
            We're just getting started. As an early partner, your input helps shape what's coming next.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
