"use client";

import { PlanHeader } from "./plan-header";
import { ProPlanCard } from "./pro-plan-card";


export function PlanSelectionSection() {
  return (
    <div className="space-y-0  p-6">
      <PlanHeader />
      <ProPlanCard />
    </div>
  );
}
