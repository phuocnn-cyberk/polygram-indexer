"use client";

import { usePayment } from "../context/payment-context";
import VisaLogo from "../../assets/Visa.svg";
import Image from "next/image";
interface PaymentMethodDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PaymentMethodDialog({
  isOpen,
  onClose,
}: PaymentMethodDialogProps) {
  const { paymentMethod, changePaymentMethod } = usePayment();

  if (!isOpen) return null;

  const paymentMethods = [
    {
      id: "card" as const,
      name: "Visa",
      description: "Pay with your Visa card",
        icon: (
          <div className="w-8 h-8 flex items-center justify-center">
            <Image src={VisaLogo} alt="Visa" width={20} height={8} />
          </div>
        ),
      isAvailable: true,
    },
  ];

  const handleMethodSelect = (methodId: "crypto" | "card" | "bank") => {
    changePaymentMethod(methodId);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-xl max-w-md w-full">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white">
              Select Payment Method
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Payment Methods List */}
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                onClick={() =>
                  method.isAvailable && handleMethodSelect(method.id)
                }
                className={`p-4 rounded-lg border transition-colors ${
                  method.isAvailable
                    ? paymentMethod === method.id
                      ? "border-blue-500 bg-blue-500/10 cursor-pointer"
                      : "border-gray-700 bg-gray-800 hover:border-gray-600 cursor-pointer"
                    : "border-gray-700 bg-gray-800/50 cursor-not-allowed opacity-50"
                }`}
              >
                <div className="flex items-center space-x-4">
                  {method.icon}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium">
                        {method.name}
                      </span>
                      {!method.isAvailable && (
                        <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                          Coming Soon
                        </span>
                      )}
                      {method.isAvailable && paymentMethod === method.id && (
                        <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                          Selected
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mt-1">
                      {method.description}
                    </p>
                  </div>
                  {method.isAvailable && (
                    <div className="text-gray-400">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
