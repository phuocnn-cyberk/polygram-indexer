'use client';

import { usePayment } from '../context/payment-context';

export function PlanDescription() {
  const { selectedPlan } = usePayment();
  
  return (
    <div className="text-sm text-gray-400 leading-relaxed">
      With the Polygram Pro Plan, get {selectedPlan.features[0]}. {selectedPlan.features[1]}, up to 300 requests per second, priority support, plus Websockets and Webhooks.
    </div>
  );
}
