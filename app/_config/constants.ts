import { PaymentMethodType } from '../_types/checkout.type';
import { BKASH_BORDERED, COD, MASTERCARD_BORDERED, NAGAD_BORDERED, ROCKET_BORDERED, VISA_BORDERED } from './resources';

export const FEATURED_CAMPAIGN_SLUG = 'let-the-music-speak-raholn';

export const REQ_HEADER_MARKET_CODE = 'Accept-MarketCode';
export const DEFAULT_MARKET_CODE = 'BD';

export const CART_KEY = 'cartId';

export const REQ_HEADER_LAN_CODE = 'Accept-LanguageCode';
export const DEFAULT_LAN_CODE = 'EN';

export const REQ_HEADER_DEVICE_ID = 'DeviceId';

export type MarketCodeType = 'BD' | 'SE';
export const MARKET_CODES = ['BD', 'SE'];

export type CurrencyType = 'BDT' | 'USD';
export const CURRENCIES = ['BDT', 'USD'];

export const DEFAULT_CURRENCY = 'BDT';

export const API_SUCCESS = 'SUCCESS';

export const DEFAULT_COUNTRY_OPTION = { id: '658543d7fb2613063680f5de', name: 'Bangladesh' };

// ENVS
export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// 'https://api.alipo.com/services';
export const ENV = process.env.NEXT_PUBLIC_ENV;
export const IS_PRODUCTION = ENV === 'production';
export const CUSTOMER_PANEL_BASE_URL = process.env.NEXT_PUBLIC_CUSTOMER_PANEL_BASE_URL;
export const ADMIN_PANEL_URL = process.env.NEXT_PUBLIC_ADMIN_PANEL_BASE_URL;

export const TOKEN_KEY = 'token';
export const DEVICE_ID_KEY = 'deviceId';

export const AUTH_VIEW_MODES = {
  login: 'login',
  registration: 'registration',
  verifyAccount: 'verifyAccount',
  forgot: 'forgot',
  verify: 'verify',
  reset: 'reset',
};

export const OTP_ACTION_TYPE = {
  registration: 'REGISTRATION',
  forgotPassword: 'FORGOT_PASSWORD',
  guest: 'GUEST_USER_ORDER',
};

export const PAYMENT_METHODS: PaymentMethodType[] = [
  {
    id: 'SSL_COMMERZ',
    title: 'Online Payment',
    items: [VISA_BORDERED, MASTERCARD_BORDERED, BKASH_BORDERED, ROCKET_BORDERED],
  },
  {
    id: 'COD',
    title: 'Cash on Delivery',
    items: [COD],
  },
  {
    id: 'NAGAD',
    title: 'Nagad',
    items: [NAGAD_BORDERED],
  },
];

export const DEFAULT_CACHE_TYPE = 'no-store';

export const ALIPO_INSTA = 'https://www.instagram.com/alipo.com.bd/';
export const ALIPO_FACEBOOK = 'https://www.facebook.com/alipo.com.bd/';
export const ALIPO_LINKEDIN = 'https://www.linkedin.com/company/alipo/';
export const ALIPO_YOUTUBE = 'https://www.youtube.com/@alipolimited';

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const SELECTED_SHIPPING_ID_KEY = 'ssadd';
export const SELECTED_SHIPPING_COUNTRY_KEY = 'sc';
export const SELECTED_SHIPPING_STATE_KEY = 'ss';
