import Image from "next/image";
import { FC } from "react";
import { Stripes } from "@/components/common/stripes";

export const Footer: FC = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      <Image
        src="/assets/images/footer-bg.png"
        alt="Footer Background"
        fill
        className="object-cover animate-slow-spin md:h-[930px] h-[413px]"
      />
      <div className="relative z-10 flex flex-col items-center gap-y-12">
        <div className="pt-38 md:pt-[192px] text-center">
          <div className="text-2xl md:text-[64px] leading-tight text-white">
            Get started
            <br />
            <span>with Polygram in 5 minutes, </span>
            <br />
            for free
          </div>
        </div>

        <div className="w-full">
          <div className="w-full border-y border-[#1E1E1E] xl:max-w-[1440px] mx-auto container">
            <div className="grid w-full grid-cols-[1fr_auto_1fr]">
              <div className="grid h-full grid-rows-2">
                <div className="border-b border-[#1E1E1E] border-l bg-[#111111]/50 backdrop-blur-xl" />
                <div className="bg-[#111111]/50 backdrop-blur-xl border-l border-[#1E1E1E]" />
              </div>
              <div className="grid grid-cols-[408px_204px_204px_204px] border-x border-[#1E1E1E] bg-[#111111]/50 backdrop-blur-xl">
                <div className="row-span-2 border-r border-[#1E1E1E] p-8">
                  <p className="text-base text-[#929292]">
                    Access real-time, enriched on-chain data without the hassle
                    of running your own infrastructure. Our blockchain indexer
                    API delivers low-latency, accurate, and developer-ready data
                    — from pricing and historical transactions to token holders,
                    liquidity, and wallet activity.
                  </p>
                </div>
                <div className="flex items-center justify-center border-b border-r border-[#1E1E1E]">
                  <span className="text-lg text-white">Pricing</span>
                </div>
                <div className="flex items-center justify-center border-b border-r border-[#1E1E1E]">
                  <span className="text-lg text-white">About</span>
                </div>
                <div className="flex items-center justify-center border-b border-[#1E1E1E]">
                  <span className="text-lg text-white">Documentation</span>
                </div>
                <div className="col-span-2 border-r border-[#1E1E1E] p-1.5">
                  <Stripes count={55} lineClassName="bg-[#1E1E1E]" />
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-lg text-white">Social</span>
                </div>
              </div>
              <div className="grid h-full grid-rows-2">
                <div className="border-b border-[#1E1E1E] border-r bg-[#111111]/50 backdrop-blur-xl" />
                <div className="bg-[#111111]/50 backdrop-blur-xl border-r border-[#1E1E1E]" />
              </div>
            </div>
          </div>
          <div className="w-full pt-20 pb-11 text-center">
            <span className="text-[#929292]">
              Polygram ©2025 All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
