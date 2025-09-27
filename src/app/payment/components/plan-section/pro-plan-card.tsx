'use client';

import { usePayment } from '../context/payment-context';

export function ProPlanCard() {
  const { selectedPlan, basePrice } = usePayment();
  
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
      {/* Plan Icon and Title */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center border-2 border-blue-500">
          <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">{selectedPlan.title}</h3>
          <p className="text-sm text-gray-400">{selectedPlan.subtitle}</p>
        </div>
      </div>
      
      {/* Price Display */}
      <div className="mb-6">
        <div className="text-4xl font-extrabold text-blue-500 mb-2">
          ${basePrice}
        </div>
        <div className="text-base font-medium text-gray-200">
          3 million requests / per month
        </div>
      </div>
    </div>
  );
}
