import Rating from '@/app/_components/ui/rating/rating';
import { ProductType } from '@/app/_types/product.type';

type ProductRatingType = {
  product: ProductType;
};

const ProductRating = ({ product }: ProductRatingType) => {
  return (
    <div className='mt-12 hidden items-center gap-1.5 text-lg md:flex'>
      <span className='font-bold'>{product.totalRatingCount}</span> Reviews <Rating rating={product.averageRating} />(
      {product.averageRating}/5)
    </div>
  );
};

export default ProductRating;
