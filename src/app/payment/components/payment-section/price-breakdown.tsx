'use client';

interface PriceBreakdownProps {
  subtotal: number;
  taxes: number;
  total: number;
  discount: number;
}

export function PriceBreakdown({ subtotal, taxes, total, discount }: PriceBreakdownProps) {
  return (
    <div className="space-y-4 mb-6">
      {/* Subtotal */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-[#999999] font-raleway">
          Subtotal
        </span>
        <span className="text-base text-white font-raleway">
          ${subtotal.toFixed(2)}
        </span>
      </div>
      
      {/* Taxes */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-[#999999] font-raleway">
          Taxes
        </span>
        <span className="text-base text-white font-raleway">
          ${taxes.toFixed(2)}
        </span>
      </div>
      
      {/* Discount */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-[#AEAEAE] font-raleway">
          Discount
        </span>
        <span className="text-base text-white font-raleway">
          -${discount.toFixed(2)}
        </span>
      </div>
      
      {/* Divider */}
      <div
        className="w-full h-px bg-[#3A4A5A]"
        style={{
          background:
            "repeating-linear-gradient(to right, #3A4A5A 0px, #3A4A5A 5px, transparent 5px, transparent 10px)",
        }}
      ></div>
      
      {/* Total */}
      <div className="flex justify-between items-center">
        <span className="text-base text-white font-raleway">
          TOTAL
        </span>
        <span className="text-2xl font-semibold text-white font-raleway">
          ${total.toFixed(2)}
        </span>
      </div>
    </div>
  );
}