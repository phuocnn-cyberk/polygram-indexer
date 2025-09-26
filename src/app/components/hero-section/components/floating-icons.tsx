"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FC } from "react";

const ICONS = [
  {
    src: "/assets/icons/eth.svg",
    alt: "Ethereum",
    className: "absolute top-[20%] left-[25%] md:h-16 md:w-16 h-7 w-7",
  },
  {
    src: "/assets/icons/polygon.svg",
    alt: "Base",
    className: "absolute top-[15%] right-[27%] md:h-16 md:w-16 h-7 w-7",
  },
  {
    src: "/assets/icons/binance-logo-dark.svg",
    alt: "Aptos",
    className:
      "absolute top-[34%] left-[3%] md:h-16 md:w-16 h-7 w-7 blur-[8px]",
  },
  {
    src: "/assets/icons/sol.svg",
    alt: "Solana",
    className: "absolute top-[55%] left-[23%] md:h-16 md:w-16 h-7 w-7",
  },
  {
    src: "/assets/icons/binance-logo-dark.svg",
    alt: "Binance",
    className: "absolute top-[47%] right-[32%] md:h-16 md:w-16 h-7 w-7",
  },
  {
    src: "/assets/icons/base.svg",
    alt: "Polygon",
    className:
      "absolute bottom-[63%] right-[5%] md:h-16 md:w-16 h-7 w-7 blur-[8px]",
  },
];

export const FloatingIcons: FC = () => {
  return (
    <div className="absolute inset-0 z-20">
      {ICONS.map((icon, index) => (
        <motion.div
          key={icon.alt}
          className={icon.className}
          animate={{
            y: ["0rem", "0.5rem", "0rem"],
          }}
          transition={{
            duration: 2.5 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative h-full w-full">
            <div className="absolute inset-0 rounded-full border border-[#454545] bg-white/5 backdrop-blur-xl" />
            <Image
              src={icon.src}
              alt={icon.alt}
              width={64}
              height={64}
              className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 object-contain"
            />
          </div>
        </motion.div>
      ))}
      {ICONS.map((blur, index) => (
        <motion.div
          key={`blur-${index}`}
          className={blur.className}
          animate={{
            y: ["0rem", "-1rem", "0rem"],
            x: ["0rem", "0.5rem", "0rem"],
          }}
          transition={{
            duration: 3 + index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
