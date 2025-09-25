import { FC } from "react";
import Image from "next/image";
import { Stripes } from "@/components/common/stripes";

const ICONS = [
  "binance",
  "solana",
  "polygon",
  "polygon",
  "aptos",
  "eth",
  "cardano",
  "eth",
  "binance",
  "polygon",
  "solana",
  "aptos",
];

const gridLayout = [
  ["stripes", "stripes", "stripes", "stripes", "stripes", "stripes", "stripes"],
  ["stripes", "icon", "stripes", "icon", "stripes", "icon", "stripes"],
  ["stripes", "stripes", "stripes", "stripes", "stripes", "stripes", "stripes"],
  ["icon", "stripes", "icon", "stripes", "icon", "stripes", "icon"],
  ["stripes", "stripes", "stripes", "stripes", "stripes", "stripes", "stripes"],
  ["stripes", "icon", "stripes", "icon", "stripes", "icon", "stripes"],
  ["stripes", "stripes", "stripes", "stripes", "stripes", "stripes", "stripes"],
  ["stripes", "stripes", "icon", "stripes", "icon", "stripes", "stripes"],
];

export const BlockchainGrid: FC = () => {
  let iconIndex = 0;

  return (
    <div className="relative w-fit">
      <div className="relative grid grid-cols-7 gap-[-1px] z-10">
        {gridLayout.flat().map((item, index) => (
          <div
            key={index}
            className="w-14 h-14 lg:w-[82px] lg:h-[82px] p-1.5 border border-[#3F3F3F] flex items-center justify-center bg-[#111111]/50 backdrop-blur-sm"
          >
            {item === "stripes" ? (
              <Stripes />
            ) : (
              <Image
                src={`/assets/icons/${ICONS[iconIndex++ % ICONS.length]}.svg`}
                alt={item}
                width={28}
                height={28}
                className="object-contain w-5 h-5 lg:w-[28px] lg:h-[28px]"
              />
            )}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[112px] lg:h-[164px] bg-gradient-to-b from-[#111111] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[112px] lg:h-[164px] bg-gradient-to-t from-[#111111] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[112px] lg:w-[164px] bg-gradient-to-r from-[#111111] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[112px] lg:w-[164px] bg-gradient-to-l from-[#111111] to-transparent" />
    </div>
  );
};
