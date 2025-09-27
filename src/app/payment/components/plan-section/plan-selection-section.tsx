'use client';

import { PlanHeader } from './plan-header';
import { ProPlanCard } from './pro-plan-card';
import { RequestVolumeSlider } from './request-volume-slider';
import { StartDateSection } from './start-date-section';
import { PlanDescription } from './plan-description';

export function PlanSelectionSection() {
  return (
    <div className="space-y-6">
      <PlanHeader />
      <ProPlanCard />
      <RequestVolumeSlider />
      <StartDateSection />
      <PlanDescription />
    </div>
  );
}
