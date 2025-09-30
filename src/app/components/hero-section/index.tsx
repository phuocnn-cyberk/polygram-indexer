import { FC } from "react";
import Image from "next/image";

import { ButtonGroup, FloatingIcons, PartnerLogos, Title } from "./components";
import { FadeInBlock } from "@/components/common/fade-in-block";

export const HeroSection: FC = () => {
  return (
    <div className="relative flex flex-col items-center text-center md:h-[600px] lg:h-[800px] h-[330px]">
      <Image
        src="/images/hero-background.png"
        alt="Hero background"
        fill
        priority
        className="absolute top-0 left-0 w-full z-0 object-cover"
      />
      <FloatingIcons />
      <div className="flex flex-col items-center md:pt-[160px] lg:pt-[210px] pt-[100px] md:pb-16 pb-6">
        <Title />
        <ButtonGroup />
      </div>
      <div className="w-full z-20 flex items-center justify-center gap-x-3">
        <FadeInBlock
          className={`md:text-xl text-white text-left md:max-w-[269px] max-w-[135px] text-[10px]`}
        >
          Blockchain Indexing Without the Headaches
        </FadeInBlock>
        <div className="w-px lg:h-24 h-12 bg-gradient-to-b from-[#111111] via-[#999999] to-[#111111]" />
        <div className="relative md:w-[400px] lg:w-[900px] w-[180px] flex items-center justify-center">
          <PartnerLogos />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-[#111111]" />
        </div>
        <div className="w-px lg:h-24 h-12 bg-gradient-to-b from-[#111111] via-[#999999] to-[#111111]" />
      </div>
    </div>
  );
};
