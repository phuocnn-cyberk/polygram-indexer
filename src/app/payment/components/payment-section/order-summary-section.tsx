'use client';

import { OrderSummaryHeader } from './order-summary-header';
import { PromoCodeSection } from './promo-code-section';
import { PriceBreakdown } from './price-breakdown';
import { PaymentMethodCard } from './payment-method-card';
import { ConfirmPaymentButton } from './confirm-payment-button';
import { TermsDisclaimer } from './terms-disclaimer';

export function OrderSummarySection() {
  return (
    <div className="space-y-6">
      <OrderSummaryHeader />
      <PromoCodeSection />
      <PriceBreakdown />
      <PaymentMethodCard />
      <ConfirmPaymentButton />
      <TermsDisclaimer />
    </div>
  );
}
