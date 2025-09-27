'use client';

import { usePayment } from '../context/payment-context';

export function ConfirmPaymentButton() {
  const { processPayment, isProcessing, total } = usePayment();
  
  return (
    <button
      onClick={processPayment}
      disabled={isProcessing}
      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200"
    >
      {isProcessing ? 'Processing...' : `Confirm and Pay $${total.toFixed(2)}`}
    </button>
  );
}
