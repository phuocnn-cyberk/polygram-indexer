'use client';

import { usePayment } from '../context/payment-context';

export function OrderSummaryHeader() {
  const { selectedPlan } = usePayment();
  
  return (
    <div className="flex items-center space-x-3">
      {/* Cube/Globe Icon */}
      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-sm flex items-center justify-center">
        <div className="w-3 h-3 bg-white rounded-sm opacity-80"></div>
      </div>
      
      {/* Plan Title */}
      <h3 className="text-lg font-semibold text-white">{selectedPlan.title}</h3>
    </div>
  );
}
