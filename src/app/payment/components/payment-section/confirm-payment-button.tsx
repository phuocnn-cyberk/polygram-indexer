'use client';

import { usePayment } from '../context/payment-context';
import { StripePaymentDialog } from './stripe-payment-dialog';
import { PaymentResultDialog } from './payment-result-dialog';

export function ConfirmPaymentButton() {
  const { 
    processPayment, 
    isProcessing, 
    total,
    showPaymentDialog,
    showPaymentResult,
    paymentResult,
    closePaymentDialog,
    handlePaymentSuccess,
    handlePaymentError,
    closePaymentResult
  } = usePayment();
  
  return (
    <>
      <button
        onClick={processPayment}
        disabled={isProcessing}
        className="text-base w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200"
      >
        {isProcessing ? 'Processing...' : `Confirm and Pay $${total.toFixed(2)}`}
      </button>

      {/* Stripe Payment Dialog */}
      <StripePaymentDialog
        isOpen={showPaymentDialog}
        onClose={closePaymentDialog}
        onSuccess={handlePaymentSuccess}
        onError={handlePaymentError}
        amount={total}
      />

      {/* Payment Result Dialog */}
      <PaymentResultDialog
        isOpen={showPaymentResult}
        onClose={closePaymentResult}
        isSuccess={paymentResult.isSuccess}
        paymentMethodId={paymentResult.paymentMethodId}
        errorMessage={paymentResult.errorMessage}
        amount={total}
      />
    </>
  );
}
