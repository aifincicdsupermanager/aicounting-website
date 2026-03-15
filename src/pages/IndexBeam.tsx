import NavbarBeam from "@/components/NavbarBeam";
import HeroBeam from "@/components/HeroBeam";
import UrgencyBeam from "@/components/UrgencyBeam";
import HowItWorksBeam from "@/components/HowItWorksBeam";
import PricingBeam from "@/components/PricingBeam";
import SignupFormBeam from "@/components/SignupFormBeam";

const IndexBeam = () => {
    return (
        <div className="min-h-screen">
            <NavbarBeam />
            <main>
                <HeroBeam />
                <UrgencyBeam />
                <HowItWorksBeam />
                <PricingBeam />
                <SignupFormBeam />
            </main>
        </div>
    );
};

export default IndexBeam;