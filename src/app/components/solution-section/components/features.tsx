import { Dots } from "@/components/common/dots";
import { FC } from "react";

const FEATURES_DATA = [
  "Token - NFT Pricing",
  "Real-Time Charts",
  "Aggregate Data",
  "Holders & Balances",
];

export const Features: FC = () => {
  return (
    <div className="mt-4 md:mt-12 grid max-md:w-full grid-cols-2 gap-3 md:gap-4">
      {FEATURES_DATA.map((feature) => (
        <div
          key={feature}
          className="flex py-3 items-center justify-between border border-[#2A2A2A] bg-transparent w-full md:w-[350px] px-1 md:px-3"
        >
          <Dots variant="left" className="mb-2" />
          <span className="font-medium text-white uppercase text-xs md:text-lg">
            {feature}
          </span>
          <Dots variant="right" className="mb-2" />
        </div>
      ))}
    </div>
  );
};
