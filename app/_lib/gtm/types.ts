import { CartItem } from '@/app/_types/cart.type';
import { CategoryType } from '@/app/_types/category.type';
import { ProductType } from '@/app/_types/product.type';
import { CustomerType } from '@/app/_types/user.type';

export type DataLayerType =
  | { eventName: 'view_home'; data?: undefined }
  | { eventName: 'view_cart'; data: Record<string, unknown> }
  | { eventName: 'view_item'; data: ProductType }
  | { eventName: 'view_category'; data: CategoryType }
  | { eventName: 'add_to_cart'; data: GTM_addToCart }
  | { eventName: 'begin_checkout'; data: GTM_beginCheckout }
  | { eventName: 'remove_from_cart'; data: CartItem }
  | { eventName: 'login'; data: CustomerType }
  | { eventName: 'purchase'; data: GTM_purchase }
  | { eventName: 'payment_failed'; data?: undefined }
  | { eventName: 'payment_successful'; data: Record<string, unknown> }
  | { eventName: 'view_contact'; data?: undefined }
  | { eventName: 'search'; data: Record<string, unknown> }
  | { eventName: 'select_content'; data: Record<string, unknown> };

export type GTM_addToCart = {
  currency: string;
  value: number;
  items: ProductType[];
};

export type GTM_beginCheckout = {
  items: CartItem[];
  currency: string;
  value: number;
  coupon: string | null;
};

export type GTM_purchase = {
  currency: string;
  value: number;
  transaction_id: string;
  coupon: string | null;
  shipping: number;
  items: CartItem[];
};

export type GTM_login = { customerId: string };

export type GTM_paymentSuccessful = { transaction_id: string; paymentMethod: string };

export type GTM_search = { search_term: string };
