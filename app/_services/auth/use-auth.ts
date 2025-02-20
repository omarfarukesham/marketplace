import { ENDPOINTS } from '@/app/_config/endpoints';
import customerModel from '@/app/_models/customer.model';
import { APIResponse } from '@/app/_types/api.type';
import { CustomerType } from '@/app/_types/user.type';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ApiError } from 'next/dist/server/api-utils';
import authService from './auth.service';

const setUser = (response: APIResponse) => {
  authService.setToken(response.data.content[0].idToken);
  const customer = customerModel(response.data.content[0]?.customerInfo);

  return customer;
};

export const useLogin = (onSuccess: (data: CustomerType) => void, onFailure: (data: ApiError) => void) => {
  return useMutation({
    mutationKey: [ENDPOINTS.authenticate],
    mutationFn: authService.login,
    onSuccess: (response) => {
      const customer = setUser(response);
      onSuccess(customer);
    },
    onError: onFailure,
  });
};

export const useUserInfo = (isEnabled: boolean = true) => {
  return useQuery({
    queryKey: [ENDPOINTS.userInfo, authService.getToken()],
    queryFn: authService.getUserInfo,
    select: (response) => customerModel(response.data.content[0]?.customerInfo),
    enabled: isEnabled,
  });
};

export const useSendOTP = () => {
  return useMutation({
    mutationKey: [ENDPOINTS.sendOtp],
    mutationFn: authService.sendOtp,
  });
};

export const useVerifyOTP = () => {
  return useMutation({
    mutationKey: [ENDPOINTS.verifyOtp],
    mutationFn: authService.verifyOtp,
  });
};

export const useResetPassword = () => {
  return useMutation({
    mutationKey: [ENDPOINTS.resetPassword],
    mutationFn: authService.resetPassword,
  });
};
export const useCheckUser = () => {
  return useMutation({
    mutationKey: [ENDPOINTS.checkUser],
    mutationFn: authService.checkUser,
  });
};
export const useRegistration = (onSuccess: (data: CustomerType) => void, onFailure: (data: ApiError) => void) => {
  return useMutation({
    mutationKey: [ENDPOINTS.registration],
    mutationFn: authService.registration,
    onSuccess: (response) => {
      const customer = setUser(response);
      onSuccess(customer);
    },
    onError: onFailure,
  });
};
