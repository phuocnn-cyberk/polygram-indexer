import { Header } from "@/components/common/header";
import { Footer } from "@/app/components/footer";
import { BuildFasterSection } from "@/app/components/build-faster-section";
import { HeroSection } from "@/app/components/hero-section";
import { SolutionSection } from "@/app/components/solution-section";
import { WhyChooseUs } from "@/app/components/why-choose-us";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="flex flex-col lg:items-center">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <SolutionSection />
      <BuildFasterSection />
      <Footer />
    </div>
  );
};

export default Home;
