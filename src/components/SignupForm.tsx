import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const upcomingModules = [
  "Bookkeeping",
  "Asset Management",
  "Invoicing",
  "Bills",
  "Income Tax",
  "Automated Compliance Reconciliation",
  "Automated Tax Planning",
  "Automated Tax Scenario Modelling",
  "AI-Powered Real-Time Analysis",
];

const SignupForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    companyName: "",
    interest: "",
    excitedModule: "",
    aiFeatures: "",
    featureRequests: "",
    questions: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email) {
      toast({
        title: "Missing required fields",
        description: "Please fill in your name and email.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch shortly to get you started.",
    });
    
    console.log("Form submitted:", formData);
  };

  return (
    <section id="signup" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-primary mb-6">
              Shape the future of accounting with us
            </h2>
            <p className="text-xl text-foreground/80">
              Enter your details below—we'll be in touch shortly to get you started or schedule a demo.
            </p>
            <p className="text-lg text-foreground/70 mt-4">
              Want to influence what's coming next? Let us know what matters most to you.
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <h3 className="font-heading text-2xl font-semibold text-primary">
                  Quick Signup
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full name *</Label>
                  <Input
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactNumber">Contact Number (Optional)</Label>
                  <Input
                    id="contactNumber"
                    type="tel"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyName">Company name (Optional)</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-heading text-2xl font-semibold text-primary">
                  Understand Your Needs
                </h3>

                <div className="space-y-3">
                  <Label>Which areas are you most interested in?</Label>
                  <RadioGroup
                    value={formData.interest}
                    onValueChange={(value) => setFormData({ ...formData, interest: value })}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bookkeeping" id="bookkeeping" />
                      <Label htmlFor="bookkeeping" className="font-normal cursor-pointer">
                        Bookkeeping/Compliance Reporting (e.g. BAS, Tax Return)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="advisory" id="advisory" />
                      <Label htmlFor="advisory" className="font-normal cursor-pointer">
                        Advisory (e.g. Tax Planning, and other value-added advisory)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="all" id="all" />
                      <Label htmlFor="all" className="font-normal cursor-pointer">
                        All of the above
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="others" id="others" />
                      <Label htmlFor="others" className="font-normal cursor-pointer">
                        Others
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label>Which upcoming module are you most excited about?</Label>
                  <RadioGroup
                    value={formData.excitedModule}
                    onValueChange={(value) => setFormData({ ...formData, excitedModule: value })}
                  >
                    {upcomingModules.map((module) => (
                      <div key={module} className="flex items-center space-x-2">
                        <RadioGroupItem value={module.toLowerCase()} id={module.toLowerCase()} />
                        <Label htmlFor={module.toLowerCase()} className="font-normal cursor-pointer">
                          {module}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="aiFeatures">
                    What AI-related features would you like to see? Or what problems would you like us to explore where AI could help?
                  </Label>
                  <Textarea
                    id="aiFeatures"
                    rows={4}
                    value={formData.aiFeatures}
                    onChange={(e) => setFormData({ ...formData, aiFeatures: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="featureRequests">
                    Any feature requests or challenges you'd love us to solve?
                  </Label>
                  <Textarea
                    id="featureRequests"
                    rows={4}
                    value={formData.featureRequests}
                    onChange={(e) => setFormData({ ...formData, featureRequests: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="questions">Any questions for our team?</Label>
                  <Textarea
                    id="questions"
                    rows={4}
                    value={formData.questions}
                    onChange={(e) => setFormData({ ...formData, questions: e.target.value })}
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg"
              >
                Submit Registration
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
