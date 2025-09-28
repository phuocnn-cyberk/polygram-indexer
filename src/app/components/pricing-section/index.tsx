"use client";

import { FC } from "react";
import { motion } from "motion/react";

import { PricingCard } from "./components";
import { PRICING_PLANS } from "./constant";
import { FadeIn } from "@/components/common/fade-in";
import { cardVariants, containerVariants } from "@/lib/animations";

export const PricingSection: FC = () => {
  return (
    <section className="w-full bg-[#111111] py-[76px] md:py-20">
      <div className="container mx-auto flex flex-col items-center gap-8 md:gap-[93px] px-4 md:px-0">
        <FadeIn className="bg-gradient-to-r from-[#A6A6A6] via-[#FFFFFF] to-[#999999] bg-clip-text text-center text-2xl md:text-[64px] font-medium text-transparent lg:text-[64px] lg:leading-[75px]">
          Simple and Affordable <br /> Pricing Plan
        </FadeIn>
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {PRICING_PLANS.map((plan) => (
            <PricingCard
              key={plan.name}
              {...plan}
              icon={plan.icon}
              variants={cardVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
