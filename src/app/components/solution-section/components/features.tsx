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
    <div className="mt-12 grid grid-cols-2 gap-4">
      {FEATURES_DATA.map((feature) => (
        <div
          key={feature}
          className="flex h-[60px] w-[384px] items-center justify-between border border-[#2A2A2A] bg-transparent px-6"
        >
          <Dots variant="left" />
          <span className="font-medium text-white uppercase text-lg">
            {feature}
          </span>
          <Dots variant="right" />
        </div>
      ))}
    </div>
  );
};
