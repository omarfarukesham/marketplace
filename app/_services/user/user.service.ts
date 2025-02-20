import { OTP_ACTION_TYPE } from '@/app/_config/constants';
import { ENDPOINTS } from '@/app/_config/endpoints';
import { userApi } from '@/app/_lib/api-service';
import catchAsync from '@/app/_lib/catch-async';

// TODO: Need to refactor with auth service
export class UserService {
  sendOtp = catchAsync(async (phoneNumber: string) => {
    const res = await userApi.post(ENDPOINTS.sendOtp, { mediumValue: phoneNumber, actionType: OTP_ACTION_TYPE.guest });
    return res;
  });

  verifyOtp = catchAsync(async ({ phoneNumber, otp }: { phoneNumber: string; otp: string }) => {
    const res = await userApi.post(ENDPOINTS.verifyOtp, {
      mediumValue: phoneNumber,
      otp,
      actionType: OTP_ACTION_TYPE.guest,
    });
    return res;
  });
}

const userService = new UserService();
export default userService;
