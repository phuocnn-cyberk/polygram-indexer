'use client';

import { usePayment } from '../context/payment-context';
import { OrderSummaryHeader } from './order-summary-header';
import { PromoCodeSection } from './promo-code-section';
import { PriceBreakdown } from './price-breakdown';
import { PaymentMethodCard } from './payment-method-card';
import { ConfirmPaymentButton } from './confirm-payment-button';
import { TermsDisclaimer } from './terms-disclaimer';

export function OrderSummarySection() {
  const { basePrice, taxes, total, discount } = usePayment();
  
  return (
    <div className="space-y-6">
      <OrderSummaryHeader />
      <PromoCodeSection />
      <PriceBreakdown 
        subtotal={basePrice}
        taxes={taxes}
        total={total}
        discount={discount}
      />
      <PaymentMethodCard />
      <ConfirmPaymentButton />
      <TermsDisclaimer />
    </div>
  );
}
