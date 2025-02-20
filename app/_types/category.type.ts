import { StaticImageData } from 'next/image';
import { HierarchyType } from '../_lib/format-hierarchy';
import { PaginatedResponseType } from './api.type';
import { ProductType } from './product.type';

export type CategoryType = {
  slug: string;
  id: string;
  categoryId: number;
  status: 'ACTIVE' | 'INACTIVE';

  name: string;
  description: string;
  icon: string;
  thumbnail: string;
  bannerImage: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  parentCategoryId: number;
  parentCategoryName: string;
  hierarchy: { slug: string; name: string }[];
  isVisibleInMenu: boolean;
  isVisibleInHeader: boolean;
  isVisibleInCategorySlider: boolean;
  isFeatured: boolean;
  activeMarkets: {
    SE: boolean;
    BD: boolean;
  };
  products?: ProductType[];
};

export type CustomizedCategoryType = {
  id: string;
  slug: string;
  code: string;
  name: string;
  description: string;
  icon?: StaticImageData | string;
  thumbnail?: string;
  customizedCategoryId: number;
  customizedParentCategoryId?: number;
  productPoolId: string;
  hierarchy: HierarchyType[];
  isFeatured: boolean;
  isRecommended: boolean;

  products?: PaginatedResponseType<ProductType[]>;
};

export type CategoryFiltersType = {
  brands: Brand[];
  filterOptions: FilterOption[];
};

interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string;
}

interface FilterOption {
  type: string;
  id: string;
  categoryId: number;
  status: string;
  options: Option[];
}

interface Option {
  label: string | JSX.Element;
  min?: number;
  max?: number;
  value: string;
}
