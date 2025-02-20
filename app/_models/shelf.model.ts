import { ProductType } from '../_types/product.type';
import { ShelfType } from '../_types/shelf.type';
import paginatedResponse from './pageable.model';
import productModel from './product.model';

const shelfModel = (data: any): ShelfType => {
  return {
    id: data.id,
    name: data.name,
    description: data.description,
    products: data.products ? paginatedResponse<ProductType[]>(data.products, productModel) : undefined,

    code: data.code,
  };
};

export default shelfModel;
