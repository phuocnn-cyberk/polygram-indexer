'use client';

import { useState } from 'react';
import { usePayment } from '../context/payment-context';

export function PromoCodeSection() {
  const [code, setCode] = useState('');
  const { applyPromoCode, isProcessing, promoError, isPromoValid } = usePayment();
  
  const handleApply = async () => {
    if (code.trim()) {
      await applyPromoCode(code.trim());
    }
  };
  
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add Promocode"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={handleApply}
          disabled={isProcessing || !code.trim()}
          className="px-4 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? 'Applying...' : 'Apply'}
        </button>
      </div>
      
      {promoError && (
        <p className="text-red-500 text-sm">{promoError}</p>
      )}
      
      {isPromoValid && (
        <p className="text-green-500 text-sm">
          Promo code applied successfully!
        </p>
      )}
    </div>
  );
}
