import { Dots } from "@/components/common/dots";
import Image from "next/image";
import { FC } from "react";

const BENEFITS_DATA = [
  {
    title: "Most Accurate Chart Data",
    description:
      "Everything you need to instantly generate precise and reliable pricing charts",
    icon: "/assets/icons/benefits/benefit-icon-1.svg",
    glowColor: "#CCCCCC",
  },
  {
    title: "Historical USD Pricing Data",
    description:
      "Query the exact value of every real-time or historical on-chain transaction",
    icon: "/assets/icons/benefits/benefit-icon-2.svg",
    glowColor: "#417EC0",
  },
  {
    title: "Real-Time Aggregate Data",
    description:
      "Instantly access volume, liquidity, unique wallets, and other vital on-chain metrics across multiple timeframes",
    icon: "/assets/icons/benefits/benefit-icon-3.svg",
    glowColor: "#BC7DFF",
  },
];

export const Benefits: FC = () => {
  return (
    <div className="mt-20 mb-16 grid grid-cols-3 gap-8">
      {BENEFITS_DATA.map(({ title, description, icon, glowColor }) => {
        return (
          <div
            key={title}
            className="w-[364px] bg-gradient-to-b from-[#3A3A3A] to-[#1E1E1E] p-px"
          >
            <div className="h-full w-full bg-[#0A0A0A] p-[10px]">
              <div className="flex justify-between">
                <Dots variant="left" />
                <Dots variant="right" />
              </div>

              <div className="relative mt-2.5 overflow-hidden bg-[#131313] p-6 pt-0 h-[345px]">
                <div
                  className="absolute -top-25 left-1/2 h-[200px] w-[200px] -translate-x-1/2 rounded-full opacity-50 blur-[100px]"
                  style={{
                    background: glowColor,
                  }}
                />
                <div className="mt-8">
                  <Image
                    src={icon}
                    alt={title}
                    width={64}
                    height={64}
                    className="h-16 w-16"
                  />
                </div>
                <h3 className="mt-12 text-2xl font-medium text-white max-w-[228px]">
                  {title}
                </h3>
                <p className="mt-3 font-300 text-lg text-[#8A8A8A]">
                  {description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
