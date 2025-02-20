import { OrderType } from '../_types/order.type';

function orderModel(data: any): OrderType {
  return {
    id: data.id,
    status: data.status,
    paymentMethod: data.paymentMethod,
    createdAt: new Date(data.createdAt),
    createdBy: data.createdBy,
    updatedAt: new Date(data.updatedAt),
    updatedBy: data.updatedBy,
    orderSequenceId: data.orderSequenceId,
    requestId: data.requestId,
    customerId: data.customerId,
    customerName: data.customerName,
    sellerId: data.sellerId,
    sellerName: data.sellerName,
    sellerLogo: data.sellerLogo,
    currencyCode: data.currencyCode,
    languageCode: data.languageCode,
    marketCode: data.marketCode,
    orderStatus: data.orderStatus,
    shippingFee: data.shippingFee,
    deliveryDate: new Date(data.deliveryDate),
    shippingProvider: data.shippingProvider,
    shippingInfo: data.shippingInfo,
    billingInfo: data.billingInfo,
    paymentStatus: data.paymentStatus,
    totalAmount: data.totalAmount,
    discountAmount: data.discountAmount,
    netAmount: data.netAmount,
    discountInfo: data.discountInfo,
    reason: data.reason,
  };
}

export default orderModel;
