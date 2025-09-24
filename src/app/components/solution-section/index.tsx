import { FC } from "react";
import { TrustedBySection } from "../trusted-by-section";
import { UseCasesSection } from "../use-cases-section";
import {
  Benefits,
  Chart,
  CtaButton,
  Features,
  Heading,
  InteractiveChart,
} from "./components";

export const SolutionSection: FC = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="relative h-8 w-full mb-12 max-w-[1156px]">
        <div className="absolute inset-0 bg-[#252525]" />
        <div className="absolute inset-0 top-0.25 bg-[#111111] rounded-tl-2xl rounded-tr-2xl" />
      </div>
      <Heading />
      <Features />
      <Chart />
      <InteractiveChart />
      <Benefits />
      <CtaButton />
      <TrustedBySection />
      <UseCasesSection />
    </section>
  );
};
