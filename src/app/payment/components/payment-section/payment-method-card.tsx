'use client';

import { usePayment } from '../context/payment-context';
import { useState } from 'react';
import { PaymentMethodDialog } from './payment-method-dialog';
import VisaLogo from '../../assets/Visa.svg';
import Image from 'next/image';

export function PaymentMethodCard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  return (
    <>
      <div 
        className="cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="flex items-center justify-between">
          {/* Left side - Payment method text */}
          <span className="text-white font-medium">Pay by Credit Card</span>
          
          {/* Right side - VISA logo and Change button */}
          <div className="flex items-center space-x-3">
            <Image src={VisaLogo} alt="Visa" width={33} height={12} />
            <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center space-x-1">
              <span>Change</span>
              <span>&gt;</span>
            </button>
          </div>
        </div>
      </div>
      
      <PaymentMethodDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </>
  );
}
