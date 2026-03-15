import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Credibility from "@/components/Credibility";
import CoreWorkflows from "@/components/CoreWorkflows";
import CategoryDefinition from "@/components/CategoryDefinition";
import PlatformCapabilities from "@/components/PlatformCapabilities";
import PartnerProgram from "@/components/PartnerProgram";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Credibility />
        <CoreWorkflows />
        <CategoryDefinition />
        <PlatformCapabilities />
        <PartnerProgram />
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
