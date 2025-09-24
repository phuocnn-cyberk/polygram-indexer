import Image from "next/image";
import { FC } from "react";

export const TestimonialCard: FC = () => {
  return (
    <div className="w-[540px] rounded-2xl border border-[#484848] bg-[#2E2E2E]/60 p-12 backdrop-blur-[32px]">
      <div className="flex items-center gap-2.5">
        <Image
          src="/assets/images/tradingview-logo.png"
          alt="TradingView"
          width={40}
          height={40}
          className="object-cover"
          priority
        />
        <span className="text-xl font-bold text-white">TradingView</span>
      </div>
      <p className="mt-6 text-2xl font-medium uppercase text-white">
        TradingView, and their 50 millions users, rely on Polygram as the sole
        source of truth for all on-chain data
      </p>
      <div className="mt-6">
        <p className="text-base text-white">
          Polygram has been instrumentals in our effort to support high quality
          DEX data via the TradingView interface. We were using 3-4 data
          providers previously, including the Graph, and have now consolidated
          everything to Polygram.
        </p>
        <p className="mt-3 text-sm text-[#8C8C8C]">
          Alex T., Head of Product, Crypto
        </p>
      </div>
    </div>
  );
};
