import { StaticImageData } from 'next/image';
import { PaginatedResponseType } from './api.type';
import { ProductType } from './product.type';

export type ShelfType = {
  id: string;

  code: string;
  name: string;
  icon?: StaticImageData | string;
  thumbnail?: string;
  products?: PaginatedResponseType<ProductType[]>;

  description?: string;
};
