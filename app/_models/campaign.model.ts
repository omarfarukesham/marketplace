import { CampaignType } from '../_types/campaign.type';
import { ProductType } from '../_types/product.type';
import imageModel from './image.model';
import paginatedResponse from './pageable.model';
import productModel from './product.model';

const campaignModel = (data: any): CampaignType => {
  return {
    id: data?.id,
    slug: data?.campaignSlug,
    name: data?.name,
    label: data?.label,
    description: data?.description,
    status: data?.status,

    icon: imageModel(data?.icon),
    bannerImage: imageModel(data?.bannerImage),
    headerImage: imageModel(data?.headerImage),

    discounts: data?.discounts,

    products: data?.products ? paginatedResponse<ProductType[]>(data?.products, productModel) : undefined,
    productPoolIds: data?.productPoolIds,
    productPoolNames: data?.productPoolNames,

    comment: data?.comment,
    effectiveStartDate: new Date(data?.effectiveStartDate),
    effectiveEndDate: new Date(data?.effectiveEndDate),
    publishDate: data?.publishDate,
    createdAt: data?.createdAt,
    createdBy: data?.createdBy,
    updatedAt: data?.updatedAt,
    updatedBy: data?.updatedBy,
  };
};

export default campaignModel;
