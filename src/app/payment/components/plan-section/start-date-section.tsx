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
    <div className="flex justify-between items-center py-2">
      <span className="text-sm text-[#AEAEAE] font-raleway">
        Start Plan Date
      </span>
      <span className="text-base font-semibold text-white font-raleway">
        {formatDate(startDate)}
      </span>
    </div>
  );
}
