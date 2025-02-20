import {
  MarketCodeType,
  REQ_HEADER_DEVICE_ID,
  REQ_HEADER_LAN_CODE,
  REQ_HEADER_MARKET_CODE,
} from '../_config/constants';
import { LocaleType } from '../_config/locales';
import authService from '../_services/auth/auth.service';
import customerService from '../_services/customer/customer.service';
import {
  campaignApi,
  cartApi,
  categoryApi,
  customerApi,
  globalConfigApi,
  orderApi,
  productApi,
  settingsApi,
  storeApi,
  userApi,
} from './api-service';

const publicApis = [productApi, globalConfigApi, campaignApi, categoryApi, storeApi, settingsApi];

const privateApis = [cartApi, userApi, orderApi, customerApi];

export const attachInterceptors = ({ marketCode, locale }: { marketCode?: MarketCodeType; locale?: LocaleType }) => {
  privateApis.forEach((api) => {
    api.request.interceptor = (req: Request) => {
      if (marketCode) {
        req.headers.set(REQ_HEADER_MARKET_CODE, marketCode);
      }
      if (locale) {
        req.headers.set(REQ_HEADER_LAN_CODE, locale);
      }

      const token = authService.getToken();
      if (token) {
        req.headers.set('Authorization', `Bearer ${token}`);
      }

      const deviceId = authService.getDeviceIdFromLocalStorage();
      if (deviceId) {
        req.headers.set('DeviceId', deviceId);
      }

      const selectedAddress = customerService.getAddressFromLocalStorage();
      if (selectedAddress) {
        Object.entries(selectedAddress).forEach(([key, value]) => {
          req.headers.set(key, value ?? '');
        });
      }

      return req;
    };
  });

  publicApis.forEach((api) => {
    api.request.interceptor = (req: Request) => {
      if (marketCode) {
        req.headers.set(REQ_HEADER_MARKET_CODE, marketCode);
      }
      if (locale) {
        req.headers.set(REQ_HEADER_LAN_CODE, locale);
      }

      const deviceId = authService.getDeviceIdFromLocalStorage();
      if (deviceId) {
        req.headers.set(REQ_HEADER_DEVICE_ID, deviceId);
      }

      const selectedAddress = customerService.getAddressFromLocalStorage();
      if (selectedAddress) {
        Object.entries(selectedAddress).forEach(([key, value]) => {
          req.headers.set(key, value ?? '');
        });
      }

      return req;
    };
  });
};
