'use client';

import { usePayment } from '../context/payment-context';
import { PromoCodeSection } from './promo-code-section';
import { PriceBreakdown } from './price-breakdown';
import { PaymentButton } from './payment-button';
import { StripePaymentDialog } from './stripe-payment-dialog';

export function PaymentSummary() {
  const { 
    basePrice, 
    taxes, 
    total, 
    discount, 
    showPaymentDialog, 
    closePaymentDialog, 
    handlePaymentSuccess, 
    handlePaymentError 
  } = usePayment();
  
  return (
    <>
      <div className="bg-[#151515]/60 border border-[#1E1E1E] rounded-2xl p-6">
        {/* Promo Code Section */}
        <PromoCodeSection />
        
        {/* Price Breakdown */}
        <PriceBreakdown 
          subtotal={basePrice}
          taxes={taxes}
          total={total}
          discount={discount}
        />
        
        {/* Payment Button */}
        <PaymentButton />
      </div>
      
      {/* Stripe Payment Dialog */}
      <StripePaymentDialog
        isOpen={showPaymentDialog}
        onClose={closePaymentDialog}
        onSuccess={handlePaymentSuccess}
        onError={handlePaymentError}
        amount={total}
      />
    </>
  );
}
