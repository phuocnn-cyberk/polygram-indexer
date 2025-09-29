"use client";

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// Initialize Stripe with your publishable key (test key for demo)
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ||
    "pk_test_TYooMQauvdEDq54NiTphI7jx"
);

// Debug Stripe key
console.log(
  "Stripe key:",
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "Using fallback test key"
);

interface PaymentFormProps {
  onSuccess: (paymentMethodId: string) => void;
  onError: (error: string) => void;
  onClose: () => void;
  amount: number;
}

function PaymentForm({
  onSuccess,
  onError,
  onClose,
  amount,
}: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isPaymentElementLoading, setIsPaymentElementLoading] = useState(true);

  // Handle payment element ready
  const handlePaymentElementReady = () => {
    console.log("Payment element is ready");
    setIsPaymentElementLoading(false);
  };

  // Fallback timeout to show payment element even if onReady doesn't fire
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsPaymentElementLoading(false);
    }, 3000); // 3 second timeout

    return () => clearTimeout(timeout);
  }, []);

  // Skeleton component for loading state
  const PaymentElementSkeleton = () => (
    <div className="space-y-4">
      {/* Card number skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
        <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
      </div>

      {/* Expiry and CVC skeleton */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
          <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-12 animate-pulse"></div>
          <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Additional fields skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
        <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setMessage(null);

    try {
      // First, submit the elements to validate the form
      const { error: submitError } = await elements.submit();

      if (submitError) {
        //handle by stripe
        return;
      }

      // Then create payment method using Stripe Elements
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        elements,
      });

      console.log("=== Payment Method Creation Result ===");
      console.log("Error:", error);
      console.log("Payment Method:", paymentMethod);

      if (error) {
        console.log("❌ Payment error:", error);
        setMessage(error.message || "An error occurred");

        // Don't call onError for any errors - just show the message in the dialog
        // This keeps the dialog open so user can fix their input
        return;
      } else if (paymentMethod) {
        console.log("✅ Payment Method created successfully:", paymentMethod.id);
        console.log("Payment Method details:", {
          id: paymentMethod.id,
          type: paymentMethod.type,
          card: paymentMethod.card,
          billing_details: paymentMethod.billing_details
        });

        // Check for test card numbers that should simulate failures
        const cardLast4 = paymentMethod.card?.last4;
        console.log("🔍 Card last4 digits:", cardLast4);
        
        // Simulate failures for specific test card numbers
        const declinedCardNumbers = ['0002', '9995', '0069', '0127', '0119', '0107', '0085'];
        const isDeclinedCard = declinedCardNumbers.includes(cardLast4 || '');
        
        if (isDeclinedCard) {
          console.log("❌ Simulating failure for declined test card:", cardLast4);
          setMessage("This card has been declined. Please try a different payment method.");
          return; // Don't call onSuccess, just show error message
        }

        // Simulate processing delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Success - pass the payment method ID to parent
        console.log("🚀 Calling onSuccess with payment method ID:", paymentMethod.id);
        onSuccess(paymentMethod.id);
      } else {
        console.log("⚠️ No error and no payment method - unexpected state");
      }
    } catch (error) {
      console.log("Catch error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      setMessage(errorMessage);
      onError(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Complete Payment
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              disabled={isProcessing}
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

          {/* Amount */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Amount</span>
              <span className="text-xl font-semibold text-gray-900">
                ${amount.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Stripe Payment Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {isPaymentElementLoading ? (
                <PaymentElementSkeleton />
              ) : (
                <PaymentElement onReady={handlePaymentElementReady} />
              )}
            </div>

            {/* Error Message */}
            {message && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm">{message}</p>
              </div>
            )}
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isProcessing || !stripe || isPaymentElementLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
            >
              {isProcessing ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Processing...
                </div>
              ) : isPaymentElementLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Loading...
                </div>
              ) : (
                `Pay $${amount.toFixed(2)}`
              )}
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              🔒 Secured by Stripe • Your payment information is encrypted and
              secure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StripePaymentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (paymentMethodId: string) => void;
  onError: (error: string) => void;
  amount: number;
}

export function StripePaymentDialog({
  isOpen,
  onClose,
  onSuccess,
  onError,
  amount,
}: StripePaymentDialogProps) {
  if (!isOpen) return null;

  const appearance = {
    theme: "stripe" as const,
    variables: {
      colorPrimary: "#2563eb",
      colorBackground: "#ffffff",
      colorText: "#374151",
      colorDanger: "#dc2626",
      fontFamily: "system-ui, sans-serif",
      spacingUnit: "4px",
      borderRadius: "8px",
    },
  };

  // Use mode: 'setup' for creating payment methods without processing payment
  const options = {
    mode: "setup" as const,
    currency: "usd",
    paymentMethodCreation: "manual" as const,
    appearance,
    loader: "auto" as const,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm
        onSuccess={onSuccess}
        onError={onError}
        onClose={onClose}
        amount={amount}
      />
    </Elements>
  );
}
