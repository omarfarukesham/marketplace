import { ENDPOINTS } from '@/app/_config/endpoints';
import { cartApi } from '@/app/_lib/api-service';
import catchAsync from '@/app/_lib/catch-async';
import cartModel from '@/app/_models/cart.model';
import { APIFiltersType } from '@/app/_types/api.type';
import { CartState } from '@/app/_types/cart.type';

export type AddToCartReqBody = { productId: string; quantity: number };
export type UpdateCartReqBody = { productId: string; quantity: number };
export type SelectItemReqBody = { productId: string; isSelected: boolean };

export class CartService {
  fetch = async ({ filters }: { filters?: APIFiltersType }) => {
    const data = await cartApi.get(ENDPOINTS.cart, { filters });
    return cartModel(data?.data?.content[0]);
  };

  get = catchAsync<Omit<CartState, 'isLoading' | 'isFetching'>, { filters?: APIFiltersType }>(this.fetch);

  add = catchAsync(async (itemInfo: AddToCartReqBody) => {
    const data = await cartApi.post(ENDPOINTS.addToCart, itemInfo);
    return data;
  });

  update = catchAsync(async (itemInfo: UpdateCartReqBody) => {
    const data = await cartApi.post(ENDPOINTS.updateCart, itemInfo);
    return data;
  });

  select = catchAsync(async (itemInfo: SelectItemReqBody) => {
    const data = await cartApi.post(ENDPOINTS.updateCart, itemInfo);
    return data;
  });

  applyCoupon = catchAsync(async ({ code, productId }: { code: string; productId?: string }) => {
    const data = await cartApi.post(ENDPOINTS.applyCoupon, { couponCode: code, buyNowProductId: productId });
    return data;
  });

  removeCoupon = catchAsync(async () => {
    const data = await cartApi.post(ENDPOINTS.removeCoupon, {});
    return data;
  });
}

const cartService = new CartService();
export default cartService;
