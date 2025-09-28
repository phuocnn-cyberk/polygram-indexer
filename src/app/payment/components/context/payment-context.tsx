'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

// Types
export interface Plan {
  id: string;
  title: string;
  subtitle: string;
  basePrice: number;
  volume: number;
  features: string[];
}

export interface PaymentState {
  // Plan data
  selectedPlan: Plan;
  requestVolume: number;
  startDate: Date;
  
  // Pricing
  basePrice: number;
  taxes: number;
  discount: number;
  total: number;
  
  // Promo code
  promoCode: string;
  isPromoValid: boolean;
  promoError: string;
  
  // Payment
  paymentMethod: 'crypto' | 'card' | 'bank';
  isProcessing: boolean;
  
  // Payment Dialog State
  showPaymentDialog: boolean;
  showPaymentResult: boolean;
  paymentResult: {
    isSuccess: boolean;
    paymentMethodId?: string;
    errorMessage?: string;
  };
}

export interface PaymentContextType extends PaymentState {
  // Actions
  updateRequestVolume: (volume: number) => void;
  applyPromoCode: (code: string) => Promise<void>;
  changePaymentMethod: (method: 'crypto' | 'card' | 'bank') => void;
  processPayment: () => Promise<void>;
  
  // Payment Dialog Actions
  openPaymentDialog: () => void;
  closePaymentDialog: () => void;
  handlePaymentSuccess: (paymentMethodId: string) => void;
  handlePaymentError: (error: string) => void;
  closePaymentResult: () => void;
}

// Initial state
const initialPlan: Plan = {
  id: 'pro',
  title: 'PRO PLAN',
  subtitle: 'Best for teams & startups',
  basePrice: 200,
  volume: 3,
  features: [
    '5 API keys',
    '1,000,000 requests per month',
    'up to 300 requests per second',
    'priority support',
    'Websockets and Webhooks'
  ]
};

const initialState: PaymentState = {
  selectedPlan: initialPlan,
  requestVolume: 3,
  startDate: new Date('2025-09-24'),
  basePrice: 200,
  taxes: 0.02, // 200 * 0.0001 = 0.02
  discount: 0,
  total: 200.02, // basePrice + taxes - discount = 200 + 0.02 - 0
  promoCode: '',
  isPromoValid: false,
  promoError: '',
  paymentMethod: 'crypto',
  isProcessing: false,
  showPaymentDialog: false,
  showPaymentResult: false,
  paymentResult: {
    isSuccess: false
  }
};

// Context
const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

// Pricing calculation functions
const calculatePrice = (volume: number): number => {
  const volumeMultipliers = {
    1: 1.0,
    2: 1.5,
    3: 2.0,
    5: 2.5,
    7: 3.0,
    10: 3.5
  };
  return 200 * (volumeMultipliers[volume as keyof typeof volumeMultipliers] || 1.0);
};

const calculateTaxes = (subtotal: number): number => {
  return subtotal * 0.0001; // 1/10,000 tax rate (0.01%)
};

const calculateTotal = (subtotal: number, taxes: number, discount: number): number => {
  return subtotal + taxes - discount;
};

// Mock promo code validation
const validatePromoCode = async (code: string): Promise<number> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const validCodes: Record<string, number> = {
    'WELCOMEPOLY': 5,
    'PROMOGRAM': 10
  };
  
  if (validCodes[code]) {
    return validCodes[code];
  }
  
  throw new Error('Invalid promo code');
};

// Provider component
export function PaymentProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<PaymentState>(initialState);
  
  const updateRequestVolume = useCallback((volume: number) => {
    const newPrice = calculatePrice(volume);
    const taxes = calculateTaxes(newPrice);
    const total = calculateTotal(newPrice, taxes, state.discount);
    
    setState(prev => ({
      ...prev,
      requestVolume: volume,
      basePrice: newPrice,
      taxes,
      total
    }));
  }, [state.discount]);
  
  const applyPromoCode = useCallback(async (code: string) => {
    try {
      setState(prev => ({ 
        ...prev, 
        isProcessing: true, 
        promoError: '',
        promoCode: code
      }));
      
      const discountAmount = await validatePromoCode(code);
      const discount = state.basePrice * (discountAmount / 100);
      const total = calculateTotal(state.basePrice, state.taxes, discount);
      
      setState(prev => ({
        ...prev,
        discount,
        isPromoValid: true,
        total,
        isProcessing: false
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        promoError: error instanceof Error ? error.message : 'Invalid promo code',
        isPromoValid: false,
        isProcessing: false
      }));
    }
  }, [state.basePrice, state.taxes]);
  
  const changePaymentMethod = useCallback((method: 'crypto' | 'card' | 'bank') => {
    setState(prev => ({
      ...prev,
      paymentMethod: method
    }));
  }, []);
  
  const processPayment = useCallback(async () => {
    // Open payment dialog instead of processing immediately
    setState(prev => ({ ...prev, showPaymentDialog: true }));
  }, []);

  // Payment Dialog Actions
  const openPaymentDialog = useCallback(() => {
    setState(prev => ({ ...prev, showPaymentDialog: true }));
  }, []);

  const closePaymentDialog = useCallback(() => {
    setState(prev => ({ ...prev, showPaymentDialog: false }));
  }, []);

  const handlePaymentSuccess = useCallback((paymentMethodId: string) => {
    setState(prev => ({
      ...prev,
      showPaymentDialog: false,
      showPaymentResult: true,
      paymentResult: {
        isSuccess: true,
        paymentMethodId
      }
    }));
  }, []);

  const handlePaymentError = useCallback((error: string) => {
    setState(prev => ({
      ...prev,
      showPaymentDialog: false,
      showPaymentResult: true,
      paymentResult: {
        isSuccess: false,
        errorMessage: error
      }
    }));
  }, []);

  const closePaymentResult = useCallback(() => {
    setState(prev => ({
      ...prev,
      showPaymentResult: false,
      paymentResult: {
        isSuccess: false
      }
    }));
  }, []);
  
  const value: PaymentContextType = {
    ...state,
    updateRequestVolume,
    applyPromoCode,
    changePaymentMethod,
    processPayment,
    openPaymentDialog,
    closePaymentDialog,
    handlePaymentSuccess,
    handlePaymentError,
    closePaymentResult
  };
  
  return (
    <PaymentContext.Provider value={value}>
      {children}
    </PaymentContext.Provider>
  );
}

// Hook to use the context
export function usePayment() {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
}
