import { FC } from "react";
import Image from "next/image";
import { motion, Variants } from "motion/react";

import { Button } from "@/components/ui/button";

import { CheckIcon } from "./check-icon";

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  priceDescription: string;
  features: string[];
  icon: string;
  glowColor: string;
  borderColor: string;
  isFeatured?: boolean;
  isCustom?: boolean;
  variants?: Variants;
}

export const PricingCard: FC<PricingCardProps> = ({
  name,
  description,
  price,
  priceDescription,
  features,
  icon,
  glowColor,
  borderColor,
  isFeatured,
  isCustom,
  variants,
}) => {
  const borderStyle = {
    background: `linear-gradient(90deg, transparent 0%, ${borderColor} 50%, transparent 100%)`,
  };

  return (
    <motion.div
      className="rounded-2xl bg-gradient-to-b from-[#3A3A3A] to-[#1E1E1E] p-px"
      variants={variants}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#141414] p-5">
        <div
          className="absolute top-0 left-1/2 h-[2px] w-1/2 -translate-x-1/2"
          style={borderStyle}
        />
        <div
          className="absolute -top-20 left-1/2 h-[150px] w-[150px] -translate-x-1/2 rounded-full blur-[60px]"
          style={{
            background: glowColor,
          }}
        />
        <div className="relative flex flex-col gap-4 md:gap-5">
          <div className="flex flex-col gap-4">
            <Image
              src={icon}
              alt={name}
              width={64}
              height={64}
              className=" md:h-16 h-12 md:w-16 w-12"
            />
            <div>
              <h3 className="text-base font-semibold text-white leading-tight md:text-2xl">
                {name}
              </h3>
              <p className="text-sm md:text-lg text-[#878787] leading-tight">
                {description}
              </p>
            </div>
          </div>
          <div className="flex flex-row md:flex-col max-md:items-end gap-2">
            <p
              className="text-2xl md:text-[48px] font-bold text-white leading-tight"
              style={{
                fontFamily: "var(--font-satoshi)",
              }}
            >
              {price}
            </p>
            <p className="text-sm md:text-base text-[#AEAEAE] leading-tight">
              {priceDescription}
            </p>
          </div>
          {isFeatured ? (
            <Button
              variant="default"
              className="h-11 w-full cursor-pointer bg-white text-black hover:bg-gray-200"
            >
              Get Started
            </Button>
          ) : (
            <button
              type="button"
              className="h-11 w-full cursor-pointer rounded-lg bg-gradient-to-b from-[#303030] to-[#1B1B1B] p-px"
            >
              <div className="flex h-full w-full items-center justify-center rounded-md bg-[#141414] text-white hover:bg-white/10">
                {isCustom ? "Contact Us" : "Get Started"}
              </div>
            </button>
          )}
          <div className="flex flex-col gap-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <CheckIcon />
                <p className="text-sm text-white leading-tight">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
