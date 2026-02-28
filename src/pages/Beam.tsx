import Navbar from "@/components/NavbarBeam";
import Hero from "@/components/HeroBeam";
import Urgency from "@/components/UrgencyBeam";
import HowItWorks from "@/components/HowItWorksBeam";
import Pricing from "@/components/PricingBeam";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <Urgency />
                <HowItWorks />
                <Pricing />
                <SignupForm />
            </main>
            <Footer />
        </div>
    );
};

export default Index;