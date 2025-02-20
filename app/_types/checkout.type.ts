import { StaticImageData } from 'next/image';

export type PaymentMethodType = {
  id: 'SSL_COMMERZ' | 'COD' | 'NAGAD';
  title: string;
  items: StaticImageData[];
};

export type ShippingMethodType = {
  id: string;
  name: string;
  price: string;
  delivery?: string;
  available: boolean;
};
