'use client';

import { usePayment } from '../context/payment-context';

export function StartDateSection() {
  const { startDate } = usePayment();
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  return (
    <div className="space-y-2">
      <div className="text-sm font-medium text-gray-400">
        Start Plan Date
      </div>
      <div className="text-lg font-semibold text-white">
        {formatDate(startDate)}
      </div>
    </div>
  );
}
