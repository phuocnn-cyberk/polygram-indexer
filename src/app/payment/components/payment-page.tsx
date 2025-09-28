"use client";

import { ArrowLeft } from "lucide-react";
import { PaymentProvider } from "./context/payment-context";
import { MainContentArea } from "./main-content-area";

export function PaymentPage() {
  return (
    <PaymentProvider>
      {/* Back Button */}

       <button className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors mt-[27px] ml-6">
         <ArrowLeft size={24} />
         <span className="text-base font-medium">Back</span>
       </button>
      <MainContentArea />
    </PaymentProvider>
  );
}
