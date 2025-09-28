"use client";

import Image from "next/image";
import { usePayment } from "../context/payment-context";
import { RequestVolumeSlider } from "./request-volume-slider";
import GradientBg from "../../assets/GradientBg.png";
import ProPlanIcon from "../../assets/ProPlanIcon.svg";
export function ProPlanCard() {
  const { basePrice, requestVolume } = usePayment();

  return (
    <div className="relative border border-gray-700 bg-[#15161899] rounded-2xl overflow-hidden w-full max-w-[449px]">
       {/* Plan Header */}
       <div className="relative flex flex-col space-y-1 mb-8 w-full">
         <Image
           src={GradientBg}
           alt="Gradient background"
           height={100}
           width={450}
           className="object-cover w-full absolute top-0 left-0"
           priority
         />
         <div className="flex items-center space-x-3 px-6 pt-6 ">
           <Image
             src={ProPlanIcon}
             alt="Pro Plan Icon"
             width={48}
             height={48}
             className="flex-shrink-0 mr-6"
           />
           <div className="flex flex-col space-y-1">
             <div className="text-4xl font-bold text-white font-satoshi">
               Pro Plan
             </div>
             <div className="text-sm text-[#AEAEAE] font-raleway">
               Best for teams & startups
             </div>
           </div>
         </div>
       </div>
      <div className="px-6">
        {/* Price Display */}
        <div className="relative mb-8">
          <div className="text-4xl font-bold text-white mb-1 font-satoshi">
            ${basePrice}
          </div>
          <div className="flex items-center space-x-1 text-sm text-[#AEAEAE] font-raleway">
            <span>{requestVolume} million requests</span>
            <span>/</span>
            <span>per month</span>
          </div>
        </div>

        {/* Divider Line */}
        <div
          className="w-full h-px bg-[#3A4A5A] mb-8"
          style={{
            background:
              "repeating-linear-gradient(to right, #3A4A5A 0px, #3A4A5A 5px, transparent 5px, transparent 10px)",
          }}
        ></div>

        {/* Request Volume Section */}
        <RequestVolumeSlider />

        {/* Start Date */}
        <div className="mt-8 pt-6 border-t border-[#3A4A5A]">
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#AEAEAE] font-raleway">
              Start Plan Date
            </span>
            <span className="text-sm font-semibold text-white font-raleway">
              Sep 24, 2025
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 text-sm text-[#AEAEAE] leading-relaxed font-raleway">
          With the Polygram Pro Plan, get 5 API keys, {requestVolume},000,000
          requests per month, up to 300 requests per second, priority support,
          plus Websockets and Webhooks.
        </div>
      </div>
    </div>
  );
}
