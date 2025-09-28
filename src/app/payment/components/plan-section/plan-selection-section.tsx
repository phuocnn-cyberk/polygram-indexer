'use client';

import { PlanDescription } from './plan-description';
import { PlanHeader } from './plan-header';
import { ProPlanCard } from './pro-plan-card';
import { RequestVolumeSlider } from './request-volume-slider';
import { StartDateSection } from './start-date-section';

export function PlanSelectionSection() {
  return (
    <div className="space-y-0">
      <PlanHeader />
      <ProPlanCard />
    </div>
  );
}
