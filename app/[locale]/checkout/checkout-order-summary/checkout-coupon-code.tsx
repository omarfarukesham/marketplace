import { getViewportClient } from '@/app/_lib/get-viewport-client';
import CheckoutCouponDesktop from './checkout-coupon-desktop';
import CheckoutCouponMobile from './checkout-coupon-mobile';

const CheckoutCouponCode = () => {
  const { isDesktop } = getViewportClient();

  return isDesktop ? <CheckoutCouponDesktop /> : <CheckoutCouponMobile />;
};

export default CheckoutCouponCode;
