'use client';

import { usePayment } from '../context/payment-context';
import { RequestVolumeSlider } from './request-volume-slider';

export function ProPlanCard() {
  const { basePrice } = usePayment();
  
  return (
    <div className="relative bg-[#151515]/60 border border-[#1E1E1E] rounded-2xl overflow-hidden w-full max-w-[449px]">
      {/* Gradient Background Element */}
      <div className="absolute top-[-93px] left-1/2 transform -translate-x-1/2 w-[189px] h-[189px] bg-gradient-radial from-[#2196F3] to-transparent rounded-full blur-[100px] opacity-60"></div>
      
      <div className="p-6">
        {/* Plan Header */}
        <div className="relative flex flex-col space-y-1 mb-8">
          <div className="text-4xl font-bold text-white font-satoshi">
            Pro Plan
          </div>
          <div className="text-sm text-[#AEAEAE] font-raleway">
            Best for teams & startups
          </div>
        </div>
        
        {/* Price Display */}
        <div className="relative mb-8">
          <div className="text-4xl font-bold text-white mb-1 font-satoshi">
            ${basePrice}
          </div>
          <div className="flex items-center space-x-1 text-sm text-[#AEAEAE] font-raleway">
            <span>3 million requests</span>
            <span>/</span>
            <span>per month</span>
          </div>
        </div>
        
        {/* Divider Line */}
        <div className="w-full h-px bg-[#3A4A5A] mb-8" style={{ background: 'repeating-linear-gradient(to right, #3A4A5A 0px, #3A4A5A 5px, transparent 5px, transparent 10px)' }}></div>
        
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
          With the Polygram Pro Plan, get 5 API keys, 3,000,000 requests per month, up to 300 requests per second, priority support, plus Websockets and Webhooks.
        </div>
      </div>
    </div>
  );
}
