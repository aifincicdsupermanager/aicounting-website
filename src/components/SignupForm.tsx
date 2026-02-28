import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    lead_id: "",
    fullName: "",
    email: "",
    contactNumber: "",
    companyName: "",
    website: "", // honeypot anti-spam field

    // Last-touch
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",

    // First-touch
    first_utm_source: "",
    first_utm_medium: "",
    first_utm_campaign: "",
  });

  const getOrCreateLeadId = () => {
    const existing = localStorage.getItem("lead_id");
    if (existing) return existing;

    const newId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : Date.now().toString(36) +
        "-" +
        Math.random().toString(36).substring(2, 10);

    localStorage.setItem("lead_id", newId);
    return newId;
  };

  const submission_id =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : Date.now().toString(36) +
      "-" +
      Math.random().toString(36).substring(2, 10);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lead_id = getOrCreateLeadId();
    const url_source = params.get("utm_source");
    const url_medium = params.get("utm_medium");
    const url_campaign = params.get("utm_campaign");

    // -----------------------------
    // LAST TOUCH
    // -----------------------------
    let utm_source =
      url_source || localStorage.getItem("utm_source") || "";

    let utm_medium =
      url_medium || localStorage.getItem("utm_medium") || "";

    const utm_campaign =
      url_campaign || localStorage.getItem("utm_campaign") || "";

    // -----------------------------
    // REFERRER FALLBACK
    // -----------------------------
    if (!utm_source) {
      const referrer = document.referrer;

      if (/google\./i.test(referrer)) {
        utm_source = "google";
        if (!utm_medium) utm_medium = "organic";
      } else if (referrer) {
        utm_source = "referral";
        if (!utm_medium) utm_medium = "referral";
      } else {
        utm_source = "direct";
        if (!utm_medium) utm_medium = "none";
      }
    }

    // -----------------------------
    // SAVE FIRST TOUCH (only once)
    // -----------------------------
    if (!localStorage.getItem("first_utm_source")) {
      localStorage.setItem("first_utm_source", utm_source);
    }

    if (!localStorage.getItem("first_utm_medium")) {
      localStorage.setItem("first_utm_medium", utm_medium);
    }

    if (!localStorage.getItem("first_utm_campaign")) {
      localStorage.setItem("first_utm_campaign", utm_campaign);
    }

    // -----------------------------
    // SAVE LAST TOUCH
    // -----------------------------
    if (utm_source) localStorage.setItem("utm_source", utm_source);
    if (utm_medium) localStorage.setItem("utm_medium", utm_medium);
    if (utm_campaign) localStorage.setItem("utm_campaign", utm_campaign);

    // -----------------------------
    // READ FIRST TOUCH
    // -----------------------------
    const first_utm_source = localStorage.getItem("first_utm_source") || "";
    const first_utm_medium = localStorage.getItem("first_utm_medium") || "";
    const first_utm_campaign = localStorage.getItem("first_utm_campaign") || "";

    // -----------------------------
    // UPDATE STATE
    // -----------------------------
    setFormData((prev) => ({
      ...prev,
      lead_id,
      utm_source,
      utm_medium,
      utm_campaign,
      first_utm_source,
      first_utm_medium,
      first_utm_campaign,
    }));
  }, []);

  const handleChange = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website) return; // bots fill this hidden field

    if (!formData.fullName || !formData.email) {
      toast({
        title: "Missing required fields",
        description: "Please fill in your name and email.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const lead_id = getOrCreateLeadId();
      const res = await fetch("https://formspree.io/f/mrbonjww", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          lead_id,
          submission_id,
          submitted_at: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        // Basic lead tracking
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "generate_lead", {
            event_category: "engagement",
            event_label: "signup_form",
            lead_id,
            submission_id,
            utm_source: formData.utm_source,
            utm_medium: formData.utm_medium,
            utm_campaign: formData.utm_campaign,
            first_utm_source: formData.first_utm_source,
            first_utm_medium: formData.first_utm_medium,
            first_utm_campaign: formData.first_utm_campaign,
          });
        }

        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "qualified_lead", {
            event_category: "engagement",
            event_label: "signup_form",
            lead_id,
            utm_source: formData.utm_source,
            utm_medium: formData.utm_medium,
            utm_campaign: formData.utm_campaign,
            first_utm_source: formData.first_utm_source,
            first_utm_medium: formData.first_utm_medium,
            first_utm_campaign: formData.first_utm_campaign,
          });
        }

        toast({
          title: "Thank you for your interest!",
          description: "We've received your submission and will be in touch.",
        });
        setFormData((prev) => ({
          ...prev,
          fullName: "",
          email: "",
          contactNumber: "",
          companyName: "",
          website: "",
        }));
      } else {
        throw new Error("Network response not ok");
      }
    } catch {
      toast({
        title: "Submission error",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-primary mb-6">
              Get started with AiCounting
            </h2>
            <p className="text-xl text-foreground/80">
              Start running payroll with Beam and connect your accounting in one system. <br />
              From $10/month. No per-employee pricing.
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Honeypot hidden field */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={(e) => handleChange("website", e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Quick Signup */}
              <div className="space-y-6">
                <h3 className="font-heading text-2xl font-semibold text-primary">Your details</h3>

                <div className="space-y-3">
                  <Label htmlFor="fullName" className="text-base font-medium">Full name *</Label>
                  <Input
                    id="fullName"
                    className="h-12 text-base"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-base font-medium">Email *</Label>
                  <Input
                    id="email"
                    className="h-12 text-base"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="contactNumber" className="text-base font-medium">Contact number (optional for faster follow-up)</Label>
                  <Input
                    id="contactNumber"
                    className="h-12 text-base"
                    type="tel"
                    value={formData.contactNumber}
                    onChange={(e) => handleChange("contactNumber", e.target.value)}
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="companyName" className="text-base font-medium">Company name (optional)</Label>
                  <Input
                    id="companyName"
                    className="h-12 text-base"
                    value={formData.companyName}
                    onChange={(e) => handleChange("companyName", e.target.value)}
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg"
              >
                {isSubmitting ? "Submitting..." : "Get started"}
              </Button>
              <p className="text-sm text-foreground/60 text-center mt-3">
                No spam. We'll only contact you about AiCounting.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;