'use client';

import { usePayment } from '../context/payment-context';

export function PriceBreakdown() {
  const { basePrice, taxes, discount, total } = usePayment();
  
  return (
    <div className="space-y-4">
      {/* Subtotal */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400">Subtotal</span>
        <span className="text-sm text-gray-400">${basePrice.toFixed(2)}</span>
      </div>
      
      {/* Taxes */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400">Taxes</span>
        <span className="text-sm text-gray-400">${taxes.toFixed(2)}</span>
      </div>
      
      {/* Discounts */}
      {discount > 0 && (
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Discounts</span>
          <span className="text-sm text-green-500">-${discount.toFixed(2)}</span>
        </div>
      )}
      
      {/* Total Separator */}
      <div className="border-t border-gray-700 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-white">TOTAL</span>
          <span className="text-xl font-bold text-white">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
