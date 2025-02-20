import { ImageType } from './product.type';

export type OrderType = {
  status: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  id: string;
  orderSequenceId: number;
  requestId: string;
  customerId: string;
  customerName: string;
  sellerId: string;
  sellerName: string;
  sellerLogo: ImageType;
  currencyCode: string;
  languageCode: string;
  marketCode: string;
  orderStatus: string;
  shippingFee: number;
  deliveryDate: Date;
  shippingProvider: string;
  shippingInfo: _ShippingAddressType;
  billingInfo: _ShippingAddressType;
  paymentStatus: string;
  paymentMethod: PaymentsType;
  totalAmount: number;
  discountAmount: number;
  netAmount: number;
  discountInfo: string;
  reason: string;
};

export type PaymentsType = 'SSL_COMMERZ' | 'COD' | 'NAGAD';

export type AuthUserAddressType = {
  id: string;
  personName: string;
  phone: string;
  email: string | null;
  countryId: string;
  countryName: string;
  stateId: string;
  stateName: string;
  zoneId: string;
  zoneName: string;
  areaId: string;
  areaName: string;
  details: string;
  isPrimary: boolean;
};

export type GuestUserAddressType = Omit<AuthUserAddressType, 'id' | 'phone' | 'isPrimary'>;

export type _ShippingAddressType = AuthUserAddressType;
// AuthUserAddressType | GuestUserAddressType; // Skipping for saving time :P

export type CreateOrderData = {
  productId?: string;
  customerId: string;
  userId: string;
  paymentMethod: PaymentsType;
  shippingAddress: _ShippingAddressType;
  billingAddress: _ShippingAddressType;
};
