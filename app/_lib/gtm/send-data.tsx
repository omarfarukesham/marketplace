'use client';

import { CartItem } from '@/app/_types/cart.type';
import { CategoryType } from '@/app/_types/category.type';
import { ProductType } from '@/app/_types/product.type';
import { useEffect } from 'react';
import GTM_EVENTS from './events';
import {
  DataLayerType,
  GTM_addToCart,
  GTM_beginCheckout,
  GTM_login,
  GTM_paymentSuccessful,
  GTM_purchase,
  GTM_search,
} from './types';

type WindowWithDataLayer = Window & {
  dataLayer: Record<string, unknown>[];
};

declare const window: WindowWithDataLayer;

class DataLayer {
  isPushable = () => typeof window !== 'undefined' && typeof window.dataLayer !== 'undefined';

  pushToDataLayer = (event: string, data?: Record<string, unknown>) => {
    if (this.isPushable()) {
      // if needed, check wether this 'event' is in the GTM_EVENTS object
      const objectToPush: Record<string, unknown> = { event, _clear: true };
      if (data) {
        objectToPush.data = data;
      }

      window.dataLayer.push(objectToPush);
    }
  };

  viewCart = (cartInfo: Record<string, unknown>) => this.pushToDataLayer(GTM_EVENTS.VIEW_CART, cartInfo);
  viewProduct = (productInfo: ProductType) => this.pushToDataLayer(GTM_EVENTS.VIEW_PRODUCT, productInfo);
  viewCategory = (categoryInfo: CategoryType) => this.pushToDataLayer(GTM_EVENTS.VIEW_CATEGORY, categoryInfo);
  addToCart = (itemInfo: GTM_addToCart) => this.pushToDataLayer(GTM_EVENTS.ADD_TO_CART, itemInfo);
  beginCheckout = (checkoutInfo: GTM_beginCheckout) => this.pushToDataLayer(GTM_EVENTS.BEGIN_CHECKOUT, checkoutInfo);
  removeFromCart = (itemInfo: CartItem) => this.pushToDataLayer(GTM_EVENTS.REMOVE_FROM_CART, itemInfo);
  login = (userInfo: GTM_login) => this.pushToDataLayer(GTM_EVENTS.LOGIN, userInfo);
  purchase = (purchaseInfo: GTM_purchase) => this.pushToDataLayer(GTM_EVENTS.PURCHASE, purchaseInfo);
  paymentFailed = () => this.pushToDataLayer(GTM_EVENTS.PURCHASE);
  paymentSuccessful = (paymentInfo: GTM_paymentSuccessful) => this.pushToDataLayer(GTM_EVENTS.PURCHASE, paymentInfo);
  viewContact = () => this.pushToDataLayer(GTM_EVENTS.VIEW_CONTACT);
  search = (searchInfo: GTM_search) => this.pushToDataLayer(GTM_EVENTS.SEARCH, searchInfo);
  // selectContent = (contentInfo: Record<string, unknown>) =>
  //   this.pushToDataLayer(GTM_EVENTS.SELECT_CONTENT, contentInfo);
}

export const DataLayerOnLoad = ({ eventName, data }: DataLayerType) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dataLayer.pushToDataLayer(eventName, data), [eventName]);
  return null;
};

const dataLayer = new DataLayer();
export default dataLayer;
