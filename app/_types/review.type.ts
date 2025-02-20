import { ImageType } from './product.type';

export type ReviewType = {
  id: string;
  reviewer: {
    avatarUrl: string;
    name: string;
    date: string;
  };
  rating: number;
  purchase: string;
  text: string;
  imageUrls?: string[];
};

export type _ReviewType = {
  status: string;
  createdAt: Date;

  updatedAt: Date;

  id: string;
  customerInfo: {
    userId: string | null;
    username: string;
    personName: string;
    profileImage: ImageType;
  };
  userId: string | null;
  productId: string;
  rating: number;
  review: string;
  images: ImageType[];
  isApproved: boolean;
};
