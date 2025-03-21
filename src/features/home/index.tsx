import useUpdateDocumentTitle from "../../hooks/use-update-document-title";

import Features from "./components/features";
import Hero from "./components/hero";
import LandingImg from "./components/landing-img";
import PricingPage from "./components/pricing";
import FAQSection from "./components/faq";

const HomePage = () => {
  useUpdateDocumentTitle({
    title: "BL Sheet - Simplifying Project Management",
  });

  return (
    <div className="relative">
      <Hero />
      <LandingImg />
      <Features />
      <PricingPage />
      <FAQSection />
    </div>
  );
};

export default HomePage;
