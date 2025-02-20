'use client';

import { PaymentsType, _ShippingAddressType } from '@/app/_types/order.type';
import React, { ReactNode, createContext, useCallback, useContext, useReducer } from 'react';

import { checkoutReducer } from './checkout.reducer';

export type CheckoutErrorType = { type: 'SHIPPING' | 'PAYMENT'; message: string } | null;

export type Action =
  | { type: 'SET_ADDRESS'; payload: _ShippingAddressType }
  | { type: 'SET_PAYMENT_METHOD'; payload: PaymentsType }
  | { type: 'SET_ERROR'; payload: CheckoutErrorType };

export type CheckoutState = {
  shippingAddress: _ShippingAddressType | null;
  paymentMethod: PaymentsType | null;
  error: CheckoutErrorType;
};

const initialState: CheckoutState = {
  shippingAddress: null,
  paymentMethod: null,
  error: null,
};

const CheckoutContext = createContext<
  | (CheckoutState & {
      dispatch: React.Dispatch<Action>;
      setPaymentMethod: (paymentMethod: PaymentsType) => void;
      setShippingAddress: (address: _ShippingAddressType) => void;
      setError: (error: CheckoutErrorType) => void;
    })
  | undefined
>(undefined);

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error('useCheckout must be used within a CheckoutProvider');
  }
  return context;
};

export const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(checkoutReducer, initialState);

  const setPaymentMethod = useCallback(
    (paymentMethod: PaymentsType) => dispatch({ type: 'SET_PAYMENT_METHOD', payload: paymentMethod }),
    [],
  );

  const setShippingAddress = useCallback(
    (address: _ShippingAddressType) => dispatch({ type: 'SET_ADDRESS', payload: address }),
    [],
  );

  const setError = useCallback((error: CheckoutErrorType) => dispatch({ type: 'SET_ERROR', payload: error }), []);

  const contextValue = { ...state, dispatch, setPaymentMethod, setShippingAddress, setError };

  return <CheckoutContext.Provider value={contextValue}>{children}</CheckoutContext.Provider>;
};
