import {
  CURRENCIES,
  CurrencyType,
  DEFAULT_CURRENCY,
  DEFAULT_MARKET_CODE,
  MARKET_CODES,
  MarketCodeType,
} from '../_config/constants';
import { DEFAULT_LOCALE, LOCALES, LocaleType } from '../_config/locales';

import Cookies from 'js-cookie';

export const getClientViewport = () => {
  const viewport = Cookies.get('viewport');

  return {
    viewport,
    isMobile: viewport === 'mobile',
    isDesktop: viewport === 'desktop',
  };
};

export const getClientLocale = (): LocaleType => {
  const locale = Cookies.get('locale') as LocaleType | undefined;

  if (locale && LOCALES.includes(locale)) {
    return locale;
  }
  return DEFAULT_LOCALE;
};

export const getClientMarketCode = () => {
  const marketCode = Cookies.get('marketCode') as MarketCodeType | undefined;
  if (marketCode && MARKET_CODES.includes(marketCode)) {
    return marketCode;
  }
  return DEFAULT_MARKET_CODE;
};

export const getClientCurrency = () => {
  const currency = Cookies.get('currency') as CurrencyType | undefined;
  if (currency && CURRENCIES.includes(currency)) {
    return currency;
  }
  return DEFAULT_CURRENCY;
};

export type ClientContextType = {
  locale: LocaleType;
  viewport: {
    viewport: string | undefined;
    isMobile: boolean;
    isDesktop: boolean;
  };
  currency: CurrencyType;
  marketCode: MarketCodeType;
};

const getClientContext = (): ClientContextType => {
  return {
    locale: getClientLocale(),
    viewport: getClientViewport(),
    currency: getClientCurrency(),
    marketCode: getClientMarketCode(),
  };
};

export default getClientContext;
