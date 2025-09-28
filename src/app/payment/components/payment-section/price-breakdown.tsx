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
      {discount > 0 && (
        <div className="flex justify-between items-center">
          <span className="text-sm text-[#AEAEAE] font-raleway">
            Discount
          </span>
          <span className="text-base text-white font-raleway">
            -${discount.toFixed(2)}
          </span>
        </div>
      )}
      
      {/* Divider */}
      <div className="w-full h-px bg-[#1E1E1E]"></div>
      
      {/* Total */}
      <div className="flex justify-between items-center">
        <span className="text-base font-medium text-white font-raleway">
          Total
        </span>
        <span className="text-lg font-semibold text-white font-raleway">
          ${total.toFixed(2)}
        </span>
      </div>
      
      {/* Security Badge */}
      <div className="flex items-center justify-center space-x-2 pt-2">
        <div className="w-4 h-4 bg-[#2196F3] rounded-sm flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-sm"></div>
        </div>
        <span className="text-xs text-[#AEAEAE] font-raleway">
          Secure payment
        </span>
      </div>
    </div>
  );
}