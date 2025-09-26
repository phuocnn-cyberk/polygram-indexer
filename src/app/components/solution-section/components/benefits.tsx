"use client";
import { Dots } from "@/components/common/dots";
import Image from "next/image";
import { FC } from "react";
import { motion } from "motion/react";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="mt-4 md:mt-20 mb-8 md:mb-16 grid w-full lg:grid-cols-3 grid-cols-1 gap-4 md:gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {BENEFITS_DATA.map(({ title, description, icon, glowColor }) => {
        return (
          <motion.div
            key={title}
            className="lg:w-[364px] bg-gradient-to-b from-[#3A3A3A] to-[#1E1E1E] p-px"
            variants={cardVariants}
          >
            <div className="h-full w-full bg-[#0A0A0A] p-[10px]">
              <div className="flex justify-between">
                <Dots variant="left" />
                <Dots variant="right" />
              </div>

              <div className="relative mt-2.5 overflow-hidden bg-[#131313] p-6 md:h-[345px]">
                <div
                  className="absolute -top-25 left-1/2 h-[200px] w-[200px] -translate-x-1/2 rounded-full opacity-50 blur-[100px]"
                  style={{
                    background: glowColor,
                  }}
                />
                <div>
                  <Image
                    src={icon}
                    alt={title}
                    width={64}
                    height={64}
                    className="h-16 w-16"
                  />
                </div>
                <h3 className="mt-6 md:mt-12 text-lg md:text-2xl font-medium text-white md:max-w-[228px]">
                  {title}
                </h3>
                <p className="mt-3 font-300 text-sm md:text-lg text-[#8A8A8A]">
                  {description}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
