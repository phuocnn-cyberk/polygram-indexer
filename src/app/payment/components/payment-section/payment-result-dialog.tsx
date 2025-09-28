'use client';

import React from 'react';

interface PaymentResultDialogProps {
  isOpen: boolean;
  onClose: () => void;
  isSuccess: boolean;
  paymentMethodId?: string;
  errorMessage?: string;
  amount: number;
}

export function PaymentResultDialog({ 
  isOpen, 
  onClose, 
  isSuccess, 
  paymentMethodId, 
  errorMessage, 
  amount 
}: PaymentResultDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="p-6 text-center">
          {/* Icon */}
          <div className="mx-auto mb-4">
            {isSuccess ? (
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            ) : (
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            )}
          </div>

          {/* Title */}
          <h2 className={`text-xl font-semibold mb-2 ${isSuccess ? 'text-green-900' : 'text-red-900'}`}>
            {isSuccess ? 'Payment Successful!' : 'Payment Failed'}
          </h2>

          {/* Message */}
          <div className="mb-6">
            {isSuccess ? (
              <div className="space-y-2">
                <p className="text-gray-600">
                  Your payment of <span className="font-semibold">${amount.toFixed(2)}</span> has been processed successfully.
                </p>
                <p className="text-sm text-gray-500">
                  Payment Method ID: <code className="bg-gray-100 px-2 py-1 rounded text-xs">{paymentMethodId}</code>
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  You will receive a confirmation email shortly.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="text-red-600 font-medium">{errorMessage}</p>
                <p className="text-sm text-gray-500">
                  Please check your card details and try again, or use a different payment method.
                </p>
              </div>
            )}
          </div>

          {/* Action Button */}
          <div className="space-y-3">
            <button
              onClick={onClose}
              className={`w-full font-semibold py-3 px-4 rounded-lg transition-colors duration-200 ${
                isSuccess 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
            >
              {isSuccess ? 'Continue' : 'Try Again'}
            </button>
            
            {isSuccess && (
              <button
                onClick={() => {
                  // Log the payment method ID for the backend team
                  console.log('Payment Method ID for backend:', paymentMethodId);
                  console.log('Amount:', amount);
                  console.log('Status: Success');
                  onClose();
                }}
                className="w-full text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                View Payment Details
              </button>
            )}
          </div>

          {/* Additional Info for Success */}
          {isSuccess && (
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600">
                <strong>Note:</strong> This is a test payment. In production, this Payment Method ID would be sent to your backend to confirm the charge.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
