import { formatHierarchy } from '../_lib/format-hierarchy';
import { StoreCategoryType, StoreType } from '../_types/store.type';
import imageModel from './image.model';
import productModel from './product.model';

const storeModel = (data: any): StoreType => {
  return {
    status: data?.status,
    createdAt: data?.createdAt,
    createdBy: data?.createdBy,
    updatedAt: data?.updatedAt,
    updatedBy: data?.updatedBy,
    id: data?.id,
    slug: data?.sellerSlug,
    users: data?.users,
    authorizedPerson: data?.authorizedPerson,
    bankInfo: data?.bankInfo,
    paymentMethodName: data?.paymentMethodName,
    marketCode: data?.marketCode,
    profileStatus: data?.profileStatus,
    billingAddress: data?.billingAddress,
    shippingAddress: data?.shippingAddress,
    warehouseAddress: data?.warehouseAddress,
    storeName: data?.storeName,
    storeDisplayName: data?.storeDisplayName,
    logo: imageModel(data?.logo),
    bannerImage: imageModel(data?.bannerImage),
    shopTypeHierarchy: formatHierarchy(data?.shopTypeHierarchy),
    shopTypeCategoryId: data?.shopTypeCategoryId,
    description: data?.description,
    bizInfo: data?.bizInfo,
    bizDoc: data?.bizDoc,

    recommendedProducts: data?.recommendedProducts?.map((product: any) => productModel(product)),
  };
};

export const storeCategoryModel = (data: any): StoreCategoryType => {
  return {
    id: data?.id,
    categoryId: data?.categoryId,
    name: data?.name,
    slug: data?.slug,
    thumbnail: data?.thumbnail,
  };
};

export default storeModel;
