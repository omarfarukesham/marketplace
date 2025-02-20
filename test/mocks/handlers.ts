import { ENDPOINTS } from '@/app/_config/endpoints';
import { http, HttpResponse } from 'msw';

export const handlers = [
  // * for matching any domain
  http.post('*' + ENDPOINTS.applyCoupon, async ({ request }) => {
    const body = await request.clone().json();

    if (body.couponCode === 'valid') {
      return new HttpResponse(JSON.stringify({ code: 200, status: 'SUCCESS' }));
    }
    return new HttpResponse(JSON.stringify({ code: 400, status: 'FAIL', message: 'Invalid Coupon Code' }), {
      status: 400,
    });
  }),
];
