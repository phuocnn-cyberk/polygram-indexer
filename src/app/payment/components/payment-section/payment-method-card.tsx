'use client';

import { usePayment } from '../context/payment-context';

export function PaymentMethodCard() {
  const { changePaymentMethod } = usePayment();
  
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Crypto Icon */}
          <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm rotate-45"></div>
          </div>
          
          <span className="text-white font-medium">Pay by Crypto</span>
        </div>
        
        <button 
          onClick={() => changePaymentMethod('card')}
          className="text-blue-500 hover:text-blue-400 transition-colors text-sm"
        >
          Change &gt;
        </button>
      </div>
    </div>
  );
}
