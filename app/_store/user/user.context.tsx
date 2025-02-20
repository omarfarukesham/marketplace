'use client';

import { ReactNode, createContext, useContext, useEffect, useReducer } from 'react';

import authService from '@/app/_services/auth/auth.service';
import { useUserInfo } from '@/app/_services/auth/use-auth';
import { CustomerType } from '@/app/_types/user.type';
import { userReducer } from './user.reducer';

export type Action =
  | { type: 'SET_USER'; payload: CustomerType | null }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_DEVICE_ID'; payload: string };

export type UserState = {
  user: CustomerType | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  deviceId: string | null;
};

const initialState: UserState = {
  user: null,
  isLoading: true,
  isAuthenticated: false,
  deviceId: authService.getDeviceIdFromLocalStorage(),
};

const UserContext = createContext<
  | (UserState & {
      setUser: (user: CustomerType | null) => void;
    })
  | undefined
>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const setUser = (user: CustomerType | null) => dispatch({ type: 'SET_USER', payload: user });

  const setLoading = (isLoading: boolean) => dispatch({ type: 'SET_LOADING', payload: isLoading });

  const setDeviceId = (deviceId: string) => dispatch({ type: 'SET_DEVICE_ID', payload: deviceId });

  const shouldGetUserInfo = !!(!state.user && authService.getToken());
  const { data: customerData, isError } = useUserInfo(shouldGetUserInfo);

  useEffect(() => {
    if (customerData) {
      setUser(customerData);
    }
    if (!shouldGetUserInfo || isError) {
      setLoading(false);
    }
  }, [customerData, isError, shouldGetUserInfo]);

  useEffect(() => {
    authService.getDeviceId().then(setDeviceId);
  }, []);

  const contextValue = { ...state, setUser };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
