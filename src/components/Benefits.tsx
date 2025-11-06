import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    title: "One integrated platform of accounting",
    description:
      "Bring bookkeeping, compliance, and firm-wide workflows into a single, intelligent platform. No more context switching, tool fragmentation, or manual data syncs.",
  },
  {
    title: "Manage multiple entities per client",
    description:
      "Easily create and manage multiple entities for each client. Keep individual entity's books and reports separate, while making group-level consolidation and analysis effortless.",
  },
  {
    title: "Direct ATO reporting",
    description:
      "Seamlessly report directly to the ATO with built-in compliance and automated lodgement capabilities.",
  },
  {
    title: "Automated GST reconciliation with ATO Source Data",
    description:
      "Transform ATO transactions and activity statement into clean, ready-to-use data – and automate GST reconciliation to eliminate manual matching.",
  },
  {
    title: "Automated tax planning across entities",
    description:
      "Dynamically group entities and unlock powerful tax planning capabilities across your entire client portfolio.",
  },
  {
    title: "AI-Powered Real-Time Analysis",
    description:
      "Unlock benchmarking and performance insights for businesses with multiple branches or entities. AI surfaces key risks, trends, and opportunities, helping you deliver sharper, faster, and more confident advice.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-primary mb-6">
            Built for bookkeepers, accountants and businesses
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Saving hours. Empowering better and faster advice. Driving real benefits for businesses with multiple branches or entities.
          </p>
          <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto">
            Start using AiCounting today – see how it helps you transfer from process- and admin-heavy work to smarter, insight-led advisory.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
