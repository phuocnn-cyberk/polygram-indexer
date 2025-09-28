'use client';

export function PlanHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-lg font-semibold text-white font-raleway">
        Selected Plan
      </h2>
      <button className="text-[#2196F3] hover:text-[#1976D2] transition-colors text-sm font-medium font-raleway">
        Change Plan &gt;
      </button>
    </div>
  );
}
