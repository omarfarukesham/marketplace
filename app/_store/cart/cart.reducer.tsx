import { CartAction, CartState } from '../../_types/cart.type';
import { cartInitialState } from './cart.context';

const clearCart = (): CartState => {
  return cartInitialState;
};

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'UPDATE_CART':
      return {
        ...action.payload,
        isLoading: state.isLoading,
        isFetching: state.isFetching,
      };
    case 'CLEAR_CART':
      return clearCart();
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'SET_FETCHING':
      return {
        ...state,
        isFetching: action.payload,
      };
    default:
      return state;
  }
};
