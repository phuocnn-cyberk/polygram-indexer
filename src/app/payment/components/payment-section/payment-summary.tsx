'use client';

import Image from 'next/image';
import { usePayment } from '../context/payment-context';
import { PromoCodeSection } from './promo-code-section';
import { PriceBreakdown } from './price-breakdown';
import { PaymentButton } from './payment-button';
import { StripePaymentDialog } from './stripe-payment-dialog';
import { PaymentResultDialog } from './payment-result-dialog';
import CubeIcon from '../../assets/CubeIcon.svg';

export function PaymentSummary() {
  const { 
    basePrice, 
    taxes, 
    total, 
    discount, 
    showPaymentDialog, 
    closePaymentDialog, 
    handlePaymentSuccess, 
    handlePaymentError,
    showPaymentResult,
    paymentResult,
    closePaymentResult
  } = usePayment();
  
  return (
    <>
      <div className="border border-gray-700 bg-[#151618]/60 rounded-2xl p-6">
        {/* Plan Header */}
        <div className="flex items-center space-x-3 mb-6">
          <Image
            src={CubeIcon}
            alt="Cube Icon"
            width={44}
            height={44}
            className="flex-shrink-0 w-11 h-11"
          />
          <div className="text-xl text-white font-raleway">
            PRO PLAN
          </div>
        </div>
        
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
