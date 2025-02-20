import { API_SUCCESS, CART_KEY } from '@/app/_config/constants';
import { ENDPOINTS } from '@/app/_config/endpoints';
import cartService, { AddToCartReqBody } from '@/app/_services/cart/cart.service';
import { CartState } from '@/app/_types/cart.type';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { cartReducer } from './cart.reducer';

export const useCartReducer = (initialState: CartState) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const queryClient = useQueryClient();

  const isItemInCart = (productId: string) => {
    return cartState.items.some((item) => item.product.id === productId);
  };

  const isItemSelected = (productId: string) => {
    return cartState.items.some((item) => item.product.id === productId && item.isSelected);
  };

  const getQuantity = (productId: string) => {
    const existingItem = cartState.items.find((item) => item.product.id === productId);

    return existingItem ? existingItem.quantity : 0;
  };

  const fetchCart = useCallback(async () => {
    setFetching(true);
    const cart = await cartService.get({});
    setFetching(false);

    if (!cart.data) {
      return;
    }

    cartDispatch({
      type: 'UPDATE_CART',
      payload: cart.data,
    });
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart, shouldRefresh]);

  const addToCart = async (productId: string, quantity?: number) => {
    setLoading(true);

    const cartInfo: AddToCartReqBody = { productId, quantity: quantity || 1 };

    const res = await cartService.add(cartInfo);

    setLoading(false);

    if (res.data?.status !== API_SUCCESS) {
      return { success: false, message: res.error?.message || 'Failed to add item in cart' };
    }

    queryClient.invalidateQueries({ queryKey: [ENDPOINTS.cart] }); // for checkout page's query
    fetchCart();
    return { success: true, message: res.data?.message || 'Success' };
  };

  const updateCartItemQuantity = async (productId: string, quantity: number) => {
    setLoading(true);
    const res = await cartService.update({ productId, quantity: quantity });
    setLoading(false);

    if (res.data?.status !== API_SUCCESS) {
      return { success: false, message: res.error?.message || "Failed to update item's quantity in cart" };
    }

    queryClient.invalidateQueries({ queryKey: [ENDPOINTS.cart] }); // for checkout page's query
    fetchCart();
    return { success: true, message: res.data?.message || 'Success' };
  };

  const updateCartItemSelection = async (productId: string, isSelected: boolean) => {
    setLoading(true);
    const res = await cartService.select({ productId, isSelected });
    setLoading(false);

    if (res.data?.status !== API_SUCCESS) {
      return { success: false, message: res.error?.message || 'Failed to update item selection' };
    }

    queryClient.invalidateQueries({ queryKey: [ENDPOINTS.cart] }); // for checkout page's query
    fetchCart();
    return { success: true, message: res.data?.message || 'Success' };
  };

  const removeItemFromCart = async (productId: string) => {
    setLoading(true);
    const res = await cartService.update({ productId, quantity: 0 });
    setLoading(false);

    if (res.data?.status !== API_SUCCESS) {
      return { success: false, message: res.error?.message || "Failed to update item's quantity in cart" };
    }

    queryClient.invalidateQueries({ queryKey: [ENDPOINTS.cart] }); // for checkout page's query
    fetchCart();
    return { success: true, message: res.data?.message || 'Success' };
  };

  const clearCart = () => {
    localStorage.removeItem(CART_KEY);
    cartDispatch({
      type: 'CLEAR_CART',
    });
  };

  const refreshCart = () => {
    setShouldRefresh((prev) => !prev);
    queryClient.invalidateQueries({ queryKey: [ENDPOINTS.cart] }); // for checkout page's query
  };

  const setLoading = (isLoading: boolean) => cartDispatch({ type: 'SET_LOADING', payload: isLoading });
  const setFetching = (isFetching: boolean) => cartDispatch({ type: 'SET_FETCHING', payload: isFetching });

  return {
    ...cartState,
    addToCart,
    updateCartItemQuantity,
    updateCartItemSelection,
    removeItemFromCart,
    clearCart,
    isItemInCart,
    isItemSelected,
    getQuantity,
    setLoading,
    setFetching,
    refreshCart,
  };
};
