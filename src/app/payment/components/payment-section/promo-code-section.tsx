'use client';

import { useState } from 'react';
import { usePayment } from '../context/payment-context';

export function PromoCodeSection() {
  const [promoCode, setPromoCode] = useState('');
  const { applyPromoCode, isProcessing, promoError, isPromoValid } = usePayment();
  
  const handleApply = async () => {
    if (promoCode.trim()) {
      await applyPromoCode(promoCode.trim());
    }
  };
  
  return (
    <div className="mb-6">
      <div className="flex space-x-2">
        {/* Promo Code Input */}
        <div className={`flex-1 rounded-md px-3 py-3 ${
          isPromoValid ? 'bg-green-900/20 border border-green-500' : 
          promoError ? 'bg-red-900/20 border border-red-500' : 
          'bg-[#212121]'
        }`}>
          <input
            type="text"
            placeholder="Add Promocode"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="w-full bg-transparent text-[#636363] placeholder-[#636363] text-sm focus:outline-none font-raleway"
            disabled={isProcessing}
          />
        </div>
        
        {/* Apply Button */}
        <button
          onClick={handleApply}
          disabled={isProcessing || !promoCode.trim()}
          className={`w-[70px] py-3 rounded-md text-sm font-sm transition-colors font-raleway ${
            isProcessing || !promoCode.trim()
              ? 'bg-[#333333] text-[#666666] cursor-not-allowed'
              : 'bg-[#444444] hover:bg-[#555555] text-[#A6A6A6]'
          }`}
        >
          {isProcessing ? '...' : 'Apply'}
        </button>
      </div>
      
      {/* Error/Success Messages */}
      {promoError && (
        <p className="text-red-400 text-xs mt-2 font-raleway">{promoError}</p>
      )}
      {isPromoValid && (
        <p className="text-green-400 text-xs mt-2 font-raleway">Promo code applied successfully!</p>
      )}
    </div>
  );
}