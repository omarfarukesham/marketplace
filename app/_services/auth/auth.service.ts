import { DEVICE_ID_KEY, TOKEN_KEY } from '@/app/_config/constants';
import { ENDPOINTS } from '@/app/_config/endpoints';
import { userApi } from '@/app/_lib/api-service';
import catchAsync from '@/app/_lib/catch-async';
// import FingerprintJS from '@fingerprintjs/fingerprintjs';

export class AuthService {
  getToken = () => {
    if (typeof localStorage !== 'undefined') return localStorage.getItem(TOKEN_KEY);
  };
  setToken = (token: string) => {
    if (typeof localStorage !== 'undefined') localStorage.setItem(TOKEN_KEY, token);
  };
  logout = () => {
    if (typeof localStorage !== 'undefined') localStorage.removeItem(TOKEN_KEY);
  };

  login = (userData: { username: string; password: string }) => {
    return userApi.post(ENDPOINTS.authenticate, userData);
  };
  getUserInfo = () => {
    return userApi.get(ENDPOINTS.userInfo);
  };
  sendOtp = (data: { mediumValue: string; actionType: string }) => {
    return userApi.post(ENDPOINTS.sendOtp, data);
  };
  verifyOtp = (data: { mediumValue: string; actionType: string; otp: string }) => {
    return userApi.post(ENDPOINTS.verifyOtp, data);
  };
  verifyOtpCreateUser = catchAsync((data: { mediumValue: string; actionType: string; otp: string }) => {
    return userApi.post(ENDPOINTS.verifyOtpCreateUser, data);
  });
  resetPassword = (data: { username: string; password: string; otp: string }) => {
    return userApi.post(ENDPOINTS.resetPassword, data);
  };
  checkUser = (data: { username: string }) => {
    return userApi.post(ENDPOINTS.checkUser, data).then((response) => response?.data?.content[0]);
  };
  registration = (data: { username: string; personName: string; password: string; otp: string }) => {
    return userApi.post(ENDPOINTS.registration, data);
  };

  generateDeviceId = async () => {
    const FingerprintJS = (await import('@fingerprintjs/fingerprintjs')).default;
    const fp = await FingerprintJS.load();

    const { visitorId } = await fp.get();

    if (typeof localStorage !== 'undefined') localStorage.setItem(DEVICE_ID_KEY, visitorId);

    return visitorId;
  };

  getDeviceIdFromLocalStorage = () => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem(DEVICE_ID_KEY)) {
      return localStorage.getItem(DEVICE_ID_KEY);
    }

    return null;
  };

  getDeviceId = async () => {
    const deviceId = this.getDeviceIdFromLocalStorage();

    if (deviceId) return deviceId;

    return this.generateDeviceId();
  };
}

const authService = new AuthService();
export default authService;
