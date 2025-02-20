import 'server-only';

import { cookies } from 'next/headers';
import {
  CURRENCIES,
  CurrencyType,
  DEFAULT_CURRENCY,
  DEFAULT_MARKET_CODE,
  MARKET_CODES,
  MarketCodeType,
} from '../_config/constants';
import { DEFAULT_LOCALE, LOCALES, LocaleType } from '../_config/locales';

export const getServerViewport = () => {
  const viewport = cookies().get('viewport')?.value;

  return {
    viewport,
    isMobile: viewport === 'mobile',
    isDesktop: viewport === 'desktop',
  };
};

export const getServerLocale = (): LocaleType => {
  const locale = cookies().get('locale')?.value as LocaleType | undefined;
  if (locale && LOCALES.includes(locale)) {
    return locale;
  }
  return DEFAULT_LOCALE;
};

export const getServerMarketCode = () => {
  const marketCode = cookies().get('marketCode')?.value as MarketCodeType | undefined;
  if (marketCode && MARKET_CODES.includes(marketCode)) {
    return marketCode;
  }
  return DEFAULT_MARKET_CODE;
};

export const getServerCurrency = () => {
  const currency = cookies().get('currency')?.value as CurrencyType | undefined;
  if (currency && CURRENCIES.includes(currency)) {
    return currency;
  }
  return DEFAULT_CURRENCY;
};

export type ServerContextType = {
  locale: LocaleType;
  viewport: {
    viewport: string | undefined;
    isMobile: boolean;
    isDesktop: boolean;
  };
  currency: CurrencyType;
  marketCode: MarketCodeType;
};
const getServerContext = (): ServerContextType => {
  return {
    locale: getServerLocale(),
    viewport: getServerViewport(),
    currency: getServerCurrency(),
    marketCode: getServerMarketCode(),
  };
};

export default getServerContext;
