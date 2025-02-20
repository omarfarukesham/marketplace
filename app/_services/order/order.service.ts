import { ENDPOINTS } from '@/app/_config/endpoints';
import { cartApi, orderApi } from '@/app/_lib/api-service';
import catchAsync from '@/app/_lib/catch-async';
import orderModel from '@/app/_models/order.model';
import { CreateOrderData, OrderType } from '@/app/_types/order.type';

export class OrderService {
  fetch = async ({ requestId }: { requestId: string }) => {
    const data = await orderApi.get(ENDPOINTS.order(requestId), {
      config: {
        cache: 'no-store',
      },
    });

    return data?.data?.content?.map((order: OrderType) => orderModel(order));
  };

  get = catchAsync<OrderType[], { requestId: string }>(this.fetch);

  create = catchAsync(
    async ({ data, options }: { data: CreateOrderData; options?: Parameters<typeof cartApi.post>[2] }) => {
      const res = await cartApi.post(ENDPOINTS.checkout, data, options);
      return res;
    },
  );

  orderFinal = catchAsync(async (orderId: string) => {
    const res = await orderApi.post(ENDPOINTS.orderFinal(orderId), {});
    return res;
  });
}

const orderService = new OrderService();
export default orderService;
