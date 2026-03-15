import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const SignupFormBeam = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    lead_id: "",
    fullName: "",
    email: "",
    contactNumber: "",
    companyName: "",
    website: "",

    utm_source: "",
    utm_medium: "",
    utm_campaign: "",

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

    let utm_source = url_source || localStorage.getItem("utm_source") || "";
    let utm_medium = url_medium || localStorage.getItem("utm_medium") || "";
    const utm_campaign =
      url_campaign || localStorage.getItem("utm_campaign") || "";

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

    if (!localStorage.getItem("first_utm_source"))
      localStorage.setItem("first_utm_source", utm_source);

    if (!localStorage.getItem("first_utm_medium"))
      localStorage.setItem("first_utm_medium", utm_medium);

    if (!localStorage.getItem("first_utm_campaign"))
      localStorage.setItem("first_utm_campaign", utm_campaign);

    if (utm_source) localStorage.setItem("utm_source", utm_source);
    if (utm_medium) localStorage.setItem("utm_medium", utm_medium);
    if (utm_campaign) localStorage.setItem("utm_campaign", utm_campaign);

    const first_utm_source = localStorage.getItem("first_utm_source") || "";
    const first_utm_medium = localStorage.getItem("first_utm_medium") || "";
    const first_utm_campaign =
      localStorage.getItem("first_utm_campaign") || "";

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

    if (formData.website) return;

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
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "generate_lead", {
            event_category: "engagement",
            event_label: "signup_form",
            lead_id,
            submission_id,
          });
        }

        toast({
          title: "Thank you for your interest!",
          description: "We'll be in touch shortly.",
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
        throw new Error();
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
    <section id="signup-beam" className="py-32 bg-background">
      <div className="container mx-auto px-4">

        <div className="max-w-xl mx-auto">

          <div className="text-center mb-12">

            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-0.01em] leading-[1.15] text-primary mb-4">
              Get started with AiCounting
            </h2>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Start running payroll with Beam and connect your accounting in one system.
              From $10/month. No per-employee pricing.
            </p>

          </div>

          <Card className="p-8 border border-border/40">

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={(e) => handleChange("website", e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="space-y-2">
                <Label htmlFor="fullName">Full name *</Label>
                <Input
                  id="fullName"
                  className="h-11 text-sm"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  className="h-11 text-sm"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactNumber">
                  Contact number <span className="text-foreground/40">(optional)</span>
                </Label>
                <Input
                  id="contactNumber"
                  className="h-11 text-sm"
                  type="tel"
                  value={formData.contactNumber}
                  onChange={(e) => handleChange("contactNumber", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">
                  Company name <span className="text-foreground/40">(optional)</span>
                </Label>
                <Input
                  id="companyName"
                  className="h-11 text-sm"
                  value={formData.companyName}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8 py-4 h-auto rounded-lg shadow-sm"
              >
                {isSubmitting ? "Submitting..." : "Get started free"}
              </Button>

              <p className="text-xs text-foreground/40 text-center">
                No spam. We'll only contact you about AiCounting.
              </p>

            </form>

          </Card>

        </div>

      </div>
    </section>
  );
};

export default SignupFormBeam;