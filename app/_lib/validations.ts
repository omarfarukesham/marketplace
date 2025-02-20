import { isValidPhoneNumber } from 'react-phone-number-input';
import { EMAIL_REGEX } from '../_config/validations';

export const isValidEmailOrPhone = (value: string) => {
  return isValidPhoneNumber(value, 'BD') || EMAIL_REGEX.test(value);
};
