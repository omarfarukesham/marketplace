import { DataLayerType } from './types';

const GTM_EVENTS = {
  VIEW_CART: 'view_cart',
  VIEW_CATEGORY: 'view_category',
  VIEW_HOME: 'view_home',
  VIEW_PRODUCT: 'view_item',
  ADD_TO_CART: 'add_to_cart',
  BEGIN_CHECKOUT: 'begin_checkout',
  REMOVE_FROM_CART: 'remove_from_cart',
  LOGIN: 'login',
  PURCHASE: 'purchase',
  PAYEMNT_FAILED: 'payment_failed',
  PAYMENT_SUCCESSFUL: 'payment_successful',
  VIEW_CONTACT: 'view_contact',
  SEARCH: 'search',
  SELECT_CONTENT: 'select_content',
} satisfies Record<string, DataLayerType['eventName']>;

export default GTM_EVENTS;
