import { ProductType } from '@/app/_types/product.type';
import { Suspense } from 'react';
import ProductDetails from './product-details/product-details';
import ProductImages from './product-images/product-images';
import ProductRating from './prouct-rating';

type LeftSectionType = {
  product: ProductType;
};

const LeftSection = ({ product }: LeftSectionType) => {
  return (
    <div className='w-full'>
      <ProductImages product={product} isDesktop />

      <Suspense>
        <ProductRating product={product} />
      </Suspense>

      <Suspense>
        <ProductDetails product={product} />
      </Suspense>
    </div>
  );
};

export default LeftSection;
