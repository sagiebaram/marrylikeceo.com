import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StrategyGap } from "@/components/sections/StrategyGap";
import { TheSystem } from "@/components/sections/TheSystem";
import { Story } from "@/components/sections/Story";
import { Retreat } from "@/components/sections/Retreat";
import { Book } from "@/components/sections/Book";
import { Community } from "@/components/sections/Community";
import { FinalCTA } from "@/components/sections/FinalCTA";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StrategyGap />
      <TheSystem />
      <Story />
      <Retreat />
      <Book />
      <Community />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default HomePage;
