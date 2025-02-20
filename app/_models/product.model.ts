import { formatHierarchy } from '../_lib/format-hierarchy';
import { ProductCampaignInfoType, ProductType } from '../_types/product.type';
import imageModel from './image.model';

function productModel(data: any): ProductType {
  const categories = formatHierarchy(data?.categoryHierarchy);

  return {
    id: data?.id,
    itemId: data?.itemId,
    slug: data?.productSlug,
    title: data?.title,
    description: data?.description,

    images: data?.images?.map((img: any) => imageModel(img)),
    thumbnail: imageModel(data?.images?.find((img: any) => img.isPrimary)),
    bannerImage: imageModel(data?.bannerImage),

    price: data?.price,
    appliedPrice: data?.discountedPrice ? data.discountedPrice?.price : data?.price,
    discount: data?.discountedPrice?.discount,
    discountedAmount: data?.discountedPrice
      ? `${data.discountedPrice?.discount.value}${
          data.discountedPrice?.discount.type === 'PERCENTAGE' ? '%' : data.discountedPrice?.price.symbol
        }`
      : undefined,
    hasDiscount: !!data?.discountedPrice?.discount,
    productCampaignInfo: productCampaignInfoModel(data?.discountedPrice?.productCampaignInfo),
    shippingCampaignInfo: productCampaignInfoModel(data?.shippingCampaignInfo),
    // apiDiscount: data?.discountedPrice,

    variants: data.variants,

    totalRatingCount: data?.totalRatingCount,
    averageRating: data?.averageRating,

    categories,
    shipping: data?.defaultShippingInfos?.find((info: any) => info.marketCode === 'BD'),

    sellerId: data?.sellerId,
    sellerStoreName: data?.sellerStoreName,
    sellerSlug: data?.sellerSlug,

    brandId: data?.brandId,
    brandName: data?.brandName,
    ean: data?.ean,
    mpn: data?.mpn,
    gtin: data?.gtin,
    isExchangeable: data?.isExchangeable,
    isFeatured: data?.isFeatured,
    isRefundable: data?.isRefundable,
    isReturnable: data?.isReturnable,
    isShippedFromEU: data?.isShippedFromEU,
    publishStatus: data?.publishStatus,
    seoInfo: data?.seoInfo,
    shortDescription: data?.shortDescription,
    specifications: data?.specifications,
    sku: data?.sku,
    stockCount: data?.stockCount,
    stockStatus: data?.stockStatus,
    isInStock: isProductInStock(data),
    shouldShowStockWarning: shouldShowStockWarning(data),
    videos: data?.videos,
    attributes: data?.attributes,
    whatsInTheBox: data?.whatsInTheBox,
    weight: data?.weight,
    dimension: data?.dimension,
    packageDimension: data?.packageDimension,
    packageWeight: data?.packageWeight,
    hsCode: data?.hsCode,
    dangerousGoodsTypes: data?.dangerousGoodsTypes,
    warranty: data?.warranty,
    standardQuantity: data?.standardQuantity,
    warningQuantity: data?.warningQuantity,
    redirectionUrl: data?.redirectionUrl,
    visibilities: data?.visibilities,
    taxRules: data?.taxRules,
    taxRuleIds: data?.taxRuleIds,
  };
}

export const isProductInStock = (product: ProductType): boolean => {
  return product.stockStatus === 'OUT_OF_STOCK' ? false : product.stockCount > 0;
};

export const shouldShowStockWarning = (product: ProductType): boolean => {
  return isProductInStock(product) && product.stockCount < 10;
};

export const productCampaignInfoModel = (data: any): ProductCampaignInfoType | undefined => {
  if (!data) return;

  return {
    id: data?.id,
    name: data?.name,
    label: data?.label,
    campaignDiscount: data?.campaignDiscount,
    campaignSlug: data?.campaignSlug,
    campaignType: data?.campaignType,
    icon: imageModel(data?.icon),
    bannerImage: imageModel(data?.bannerImage),
    headerImage: imageModel(data?.headerImage),
    publishDate: new Date(data?.publishDate),
    effectiveStartDate: new Date(data?.effectiveStartDate),
    effectiveEndDate: new Date(data?.effectiveEndDate),
    status: data?.status,
  };
};

export default productModel;
