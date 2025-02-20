import { _ShippingAddressType } from './order.type';
import { ImageType } from './product.type';

export type UserType = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: 'admin' | 'user';
  createdAt: string;
  updatedAt: string;
  lastLogin: string;
  isVerified: boolean;
  isBlocked: boolean;
  isDeleted: boolean;
  profile: {
    id: string;
    avatar: string;
    cover: string;
    bio: string;
    social: {
      facebook: string;
      twitter: string;
      linkedin: string;
      instagram: string;
    };
  };
};

export type CustomerType = {
  status: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  id: string;
  name: string;
  image: ImageType;
  description: string;
  userId: string;
  userName: string;
  email: string;
  phone: string;
  customerGroupId: string;
  role: 'user' | 'admin';
  userInfo: string;
  billingAddress?: _ShippingAddressType[];
  shippingAddress: _ShippingAddressType[];
};
