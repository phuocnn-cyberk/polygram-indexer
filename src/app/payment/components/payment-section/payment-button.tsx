'use client';

import { usePayment } from '../context/payment-context';
import { PaymentMethodCard } from './payment-method-card';

export function PaymentButton() {
  const { processPayment, isProcessing } = usePayment();
  
  const handlePayment = async () => {
    try {
      await processPayment();
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };
  
  return (
    <div className="space-y-4">
      {/* Payment Method Selection */}
      <PaymentMethodCard />
      
      {/* Payment Button */}
      <div className="space-y-2">
        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className={`w-full py-3 px-4 rounded-3xl font-medium transition-colors font-raleway ${
            isProcessing 
              ? 'bg-[#666666] text-gray-400 cursor-not-allowed' 
              : 'bg-[#2196F3] hover:bg-[#1976D2] text-white hover:shadow-lg'
          }`}
        >
          {isProcessing ? 'Processing...' : 'Confirm and Pay'}
        </button>
        
        {/* Terms Text */}
        <p className="text-xs text-[#AEAEAE] text-center leading-relaxed font-satoshi">
          By clicking &quot;Confirm and pay&quot; you agree to the{' '}
          <span className="text-[#AEAEAE] underline">Terms and Conditions</span>.
        </p>
      </div>
    </div>
  );
}
