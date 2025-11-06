import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import PartnerProgram from "@/components/PartnerProgram";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Features />
        <PartnerProgram />
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
