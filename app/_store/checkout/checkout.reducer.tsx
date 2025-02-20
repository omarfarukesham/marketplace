import { Action, CheckoutState } from './checkout.context';

export const checkoutReducer = (state: CheckoutState, action: Action): CheckoutState => {
  switch (action.type) {
    case 'SET_ADDRESS':
      return { ...state, shippingAddress: action.payload };
    case 'SET_PAYMENT_METHOD':
      return { ...state, paymentMethod: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
