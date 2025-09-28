'use client';

import { PlanSelectionSection } from './plan-section/plan-selection-section';
import { PaymentSummary } from './payment-section/payment-summary';

export function MainContentArea() {
  return (
    <div className="flex-1 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Plan Selection */}
          <div>
            <PlanSelectionSection />
          </div>
          
          {/* Right Column - Payment Summary */}
          <div>
            <PaymentSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
