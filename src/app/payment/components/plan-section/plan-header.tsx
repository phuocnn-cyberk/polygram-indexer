'use client';

export function PlanHeader() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-semibold text-white">Selected Plan</h2>
      <button className="text-blue-500 hover:text-blue-400 transition-colors text-sm font-medium">
        Change Plan &gt;
      </button>
    </div>
  );
}
