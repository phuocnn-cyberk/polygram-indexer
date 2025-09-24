import { FC } from "react";
import Image from "next/image";

import { ButtonGroup, PartnerLogos, Title } from "./components";

export const HeroSection: FC = () => {
  return (
    <div className="relative flex flex-col items-center text-center h-[800px] overflow-hidden">
      <Image
        src="/assets/images/hero-background.png"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <div className="z-20 flex flex-col items-center justify-center flex-grow gap-y-18">
        <Title />
        <ButtonGroup />
      </div>
      <div className="w-full z-20 flex items-center justify-center gap-x-3">
        <span className={`text-xl text-white text-left lg:max-w-[269px]`}>
          Blockchain Indexing Without the Headaches
        </span>
        <div className="w-px h-24 bg-gradient-to-b from-[#111111] via-[#999999] to-[#111111]" />
        <div className="relative w-[900px] h-25 flex items-center justify-center">
          <PartnerLogos />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-[#111111]" />
        </div>
        <div className="w-px h-24 bg-gradient-to-b from-[#111111] via-[#999999] to-[#111111]" />
      </div>
    </div>
  );
};
