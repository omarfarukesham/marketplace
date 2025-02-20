'use client';

import LoadingFullScreen from '@/app/_components/ui/loading-full-screen';
import { ReactNode, createContext, useContext, useMemo } from 'react';
import { CartContextType, CartState } from '../../_types/cart.type';
import { useCartReducer } from './use-cart-reducer';

export const cartInitialState: CartState = {
  customerId: '',
  marketCode: '',
  currencyCode: '',
  currencySymbol: '',
  languageCode: '',
  promocode: '',
  couponId: null,

  items: [],

  summary: {
    totalAmount: '0',
    totalDiscount: undefined,
    netAmount: '0',
    _netAmount: 0,
    netAmountWithoutShipping: '0',
    totalItem: 0,
    totalUniqueItem: 0,
    totalSelectedItem: 0,
    totalSelectedInStockItem: 0,
    totalSelectedStockOutItem: 0,
    shippingFee: '0',
    shippingFeeDiscount: undefined,
    netShippingFee: '0',
    _netShippingFee: 0,
    couponCode: null,
    couponDiscount: 0,
  },

  isLoading: false,
  isFetching: true,
};

export const CartContext = createContext<CartContextType>({
  ...cartInitialState,
  addToCart: async () => {
    return { success: false, message: '' };
  },
  updateCartItemQuantity: async () => {
    return { success: false, message: '' };
  },
  updateCartItemSelection: async () => {
    return { success: false, message: '' };
  },
  removeItemFromCart: async () => {
    return { success: false, message: '' };
  },
  clearCart: () => {},
  isItemInCart: () => false,
  isItemSelected: () => false,
  getQuantity: () => 0,
  setLoading: () => {},
  refreshCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const cartValue = useCartReducer(cartInitialState);

  return (
    <CartContext.Provider value={cartValue}>
      {children}

      {cartValue.isLoading && <LoadingFullScreen />}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return useMemo(() => context, [context]);
};
