"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { PaymentProvider } from "./context/payment-context";
import { MainContentArea } from "./main-content-area";

export function PaymentPage() {
  const router = useRouter();
  
  return (
    <PaymentProvider>
      {/* Back Button */}

       <button 
         onClick={() => router.push('/pricing')}
         className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors mt-[27px] ml-6"
       >
         <ArrowLeft size={24} />
         <span className="text-base font-medium">Back</span>
       </button>
      <MainContentArea />
    </PaymentProvider>
  );
}
