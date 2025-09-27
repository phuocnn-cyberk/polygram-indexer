'use client';

import { PaymentProvider } from '../context/payment-context';
import { MainContentArea } from '../main-content-area';

export function PaymentPage() {
  return (
    <PaymentProvider>
      <MainContentArea />
    </PaymentProvider>
  );
}
