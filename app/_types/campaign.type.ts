import { PaginatedResponseType } from './api.type';
import { CategoryType } from './category.type';
import { ImageType, ProductType } from './product.type';

export type CampaignType = {
  id: string;
  slug: string;
  name: string;
  label: string;
  description: string;
  status: string;

  icon: ImageType;
  bannerImage: ImageType;
  headerImage: ImageType;

  discounts: string[];
  productPoolIds: string[];
  productPoolNames: string[];
  comment: string;

  products?: PaginatedResponseType<ProductType[]>;

  publishDate: Date;
  effectiveStartDate: Date;
  effectiveEndDate: Date;

  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
};

export type CampaignCategoryType = Pick<CategoryType, 'id' | 'categoryId' | 'slug' | 'name' | 'icon' | 'thumbnail'>;
