'use client';

import { PlanSelectionSection } from './plan-section/plan-selection-section';
import { OrderSummarySection } from './payment-section/order-summary-section';

export function MainContentArea() {
  return (
    <div className="flex-1 p-6">
      <div className="max-w-6xl mx-auto pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Plan Selection */}
          <div>
            <PlanSelectionSection />
          </div>
          
          {/* Right Column - Order Summary */}
          <div>
            <OrderSummarySection />
          </div>
        </div>
      </div>
    </div>
  );
}
