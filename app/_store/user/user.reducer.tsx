import { Action, UserState } from './user.context';

export const userReducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        isLoading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'SET_DEVICE_ID':
      return {
        ...state,
        deviceId: action.payload,
      };
    default:
      return state;
  }
};
