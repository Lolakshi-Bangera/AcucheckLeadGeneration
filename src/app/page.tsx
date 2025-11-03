import DemoBanner from "@/Components/DemoBanner";
import FAQSection from "@/Components/FAQSection";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import HowAcuViewWorks from "@/Components/HowAcuViewWorks";
import LeadDemoSection from "@/Components/LeadDemoSection";
import RealTimeTechnology from "@/Components/RealTimeTechnology";
import SneakPeekSection from "@/Components/SneakPeekSection";
import SpeakToExperts from "@/Components/SpeakToExperts";
import StatsSection from "@/Components/StatsSection";
import WhyAcuCheck from "@/Components/WhyAcuCheck";
import WhyChooseAcuView from "@/Components/WhyChooseAcuView";

export default function Home() {
  return (
    <main className="bg-white flex justify-center">
      <div className="w-full ">
        <Header />
        <LeadDemoSection />
        <StatsSection />
        <RealTimeTechnology />
        <HowAcuViewWorks />
        <WhyAcuCheck />
        <SneakPeekSection />
        <WhyChooseAcuView />
        <DemoBanner />
        <FAQSection />
        <SpeakToExperts />
        <Footer />
      </div>
    </main>
  );
}
