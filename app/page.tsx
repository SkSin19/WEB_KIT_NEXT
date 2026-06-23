import DestinationsStrip from "@/sections/DestinationsStrip";
import Hero from "@/sections/Hero";
import HotelsSection from "@/sections/HotelsSection";
import IntroSection from "@/sections/IntroSection";
import LatestArticles from "@/sections/LatestArticles";
import SplitTextSection from "@/sections/SplitTextSection";


export default function Home() {
  return (
    <div className="homepage">
      <Hero />
      <IntroSection />
      <SplitTextSection />
      <DestinationsStrip />
      <LatestArticles />      
      <HotelsSection />
    </div>
  );
}
