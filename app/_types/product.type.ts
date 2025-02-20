import { HierarchyType } from '../_lib/format-hierarchy';

export type ProductType = {
  id: string;
  itemId: number;
  slug: string;
  title: string;
  sku: string;
  ean: string;
  gtin: string;
  mpn?: string;
  brandId: string;
  brandName: string;
  sellerId: string;
  sellerStoreName: string;
  sellerSlug: string;
  categories: HierarchyType[];
  publishStatus: 'DRAFT' | 'ONLINE' | 'OFFLINE';
  taxRuleIds?: string[];
  taxRules?: TaxRule[];

  price: PriceType;
  appliedPrice: PriceType;
  discount?: {
    type: 'PERCENTAGE' | 'FIXED';
    value: number;
  };
  discountedAmount?: string;
  hasDiscount: boolean;
  productCampaignInfo?: ProductCampaignInfoType;
  shippingCampaignInfo?: ProductCampaignInfoType;

  visibilities?: string[];
  stockCount: number;
  isInStock: boolean;
  shouldShowStockWarning: boolean;
  inStockDate?: Date;
  stockStatus: 'IN_STOCK' | 'OUT_OF_STOCK';
  dimension?: {
    unit: 'MM' | 'CM' | 'IN';
    height: number;
    width: number;
    length: number;
  };
  weight?: WeightType;
  redirectionUrl?: string;
  standardQuantity?: number;
  warningQuantity?: number;
  isReturnable: boolean;
  isRefundable: boolean;
  isExchangeable: boolean;
  isShippedFromEU: boolean;
  isFeatured: boolean;
  hsCode?: string;
  packageWeight?: PackageWeight;
  packageDimension?: PackageDimension;
  dangerousGoodsTypes?: string;
  warranty?: WarrantyType;

  images: ImageType[];
  thumbnail: ImageType;
  bannerImage: ImageType;
  videos: [];

  shortDescription: string;
  description: string;
  whatsInTheBox?: string; // TODO: Add type
  attributes?: Attribute[];
  specifications?: Specification[];
  shipping?: DefaultShippingInfo;
  seoInfo: SeoInfo;

  totalRatingCount: number;
  averageRating: number;

  // Temp
  // originalPrice?: number;
  sizes?: { label: string; value: string }[];
  colors?: { label: string; value: string; imageUrl: string }[];
  // rating?: {
  //   number: number;
  //   total: number;
  // };

  variants?: VariantType[];
};

export type ImageType = {
  title: string;
  url: string;
  altText: string;
  metaDescription: string;
  isPrimary: boolean;
  position: string;
};

export type VideoType = {
  title: string;
  url: string;
  altText: string;
  metaDescription: string;
  position: number;
  thumbnail: ImageType;
};

export type PriceType = {
  symbol: string;
  priceValue: number;
  priceText: string;
  currencyCode: string;
};

export type WeightType = {
  unit: 'MG' | 'GM' | 'KG';
  value: number;
};

export type WarrantyType = {
  warrantyType: 'NO_WARRANTY' | 'BRAND_WARRANTY' | 'SELLER_WARRANTY';
  timePeriodUnit: 'DAYS' | 'MONTHS' | 'YEARS';
  value: number;
  policyUrl: string;
  policyDetails: string;
};

export type TaxRule = {
  status: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  id: string;
  name: string;
  description: string;
  countryId: string;
  countryName: string;
  stateId: string;
  stateName: string;
  zoneId: string;
  zoneName: string;
  areaId?: string;
  areaName: string;
  taxRate: TaxRate;
  sellerIdCondition: string;
  taxCategoryId: string;
  taxCategoryName: string;
  taxSubCategoryId: string;
  taxSubCategoryName: string;
};

export type TaxRate = {
  id: string;
  type: string;
  value: number;
};

export type PackageWeight = {
  unit: string;
  value: number;
};

export type PackageDimension = {
  unit: string;
  height: number;
  width: number;
  length: number;
};

export type Attribute = {
  label: string;
  options: string[];
};

export type Specification = {
  title: string;
  values: {
    name: string;
    description: string;
  }[];
};

export type DefaultShippingInfo = {
  marketCode: string;
  shippingType: 'HOME' | 'OFFICE' | 'PICKUP' | 'MAILBOX';
  cost: PriceType;
  carrierName: string;
  estimatedDeliveryTime: DeliveryTime;
};

export type DeliveryTime = {
  unit: 'DAYS' | 'MONTHS' | 'YEARS';
  from: number;
  to: number;
};

export type SeoInfo = {
  urlKey: string;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
  metaRobotRule: string;
  crossDomainMarketCode: string;
  crossDomainUrl: string;
  canonicalUrl: string;
  openGraphImageUrl: string;
  isIncludeInHtmlMap: boolean;
  isUseInCrossLinking: boolean;
};

export type VariantType = {
  productId: string;
  productSlug: string;
  variantAttribute: {
    [key: string]: string;
  };
};

export type ProductCampaignInfoType = {
  id: string;
  name: string;
  label: string;
  campaignSlug: string;
  campaignType: 'PRODUCT' | 'SHIPPING';
  icon: ImageType;
  bannerImage: ImageType;
  headerImage: ImageType;
  campaignDiscount: {
    type: 'PERCENTAGE' | 'FIXED';
    value: number;
  };
  publishDate: Date;
  effectiveStartDate: Date;
  effectiveEndDate: Date;
  status: 'ACTIVE' | 'INACTIVE';
};
