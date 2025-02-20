import { _ReviewType } from '../_types/review.type';
import imageModel from './image.model';

const reviewModel = (data: any): _ReviewType => {
  return {
    status: data.status,
    createdAt: new Date(data.createdAt),
    updatedAt: new Date(data.updatedAt),
    id: data.id,
    customerInfo: {
      userId: data.customerInfo.userId,
      username: data.customerInfo.username,
      personName: data.customerInfo.personName,
      profileImage: imageModel(data.customerInfo.profileImage),
    },
    userId: data.userId,
    productId: data.productId,
    rating: data.rating,
    review: data.review,
    images: data.images?.map(imageModel),
    isApproved: data.isApproved,
  };
};

export default reviewModel;
