import { ProductType } from '@/app/_types/product.type';
import ShareArrow from '@/icons/arrows/share-arrow';
import AddToCart from './add-to-cart/add-to-cart';

type ProductActionsDesktopProps = {
  product: ProductType;
  disabled: boolean;
  handleBuyNow: () => void;
  handleShare: () => void;
};

const ProductActionsDesktop = ({ product, disabled, handleBuyNow, handleShare }: ProductActionsDesktopProps) => {
  return (
    <div className='mt-4 flex items-center gap-3'>
      <AddToCart product={product} disabled={disabled} />

      <button
        onClick={handleBuyNow}
        disabled={disabled}
        className='shrink-0 rounded-full border px-10 py-3 font-medium transition-all hover:text-white disabled:bg-gray-300 disabled:text-gray-500 nd:border-gray-900 nd:hover:scale-105 nd:hover:border-primary-900 nd:hover:bg-primary-900 nd:hover:shadow-lg'
      >
        Buy Now
      </button>
      <button
        onClick={handleShare}
        className='flex shrink-0 items-center gap-1.5 rounded-full border border-gray-900 px-10 py-3 font-medium transition-all hover:text-white disabled:bg-gray-300 disabled:text-gray-500 nd:hover:scale-105 nd:hover:border-primary-900 nd:hover:bg-primary-900 nd:hover:shadow-lg'
      >
        <ShareArrow className='h-6 w-6 fill-gray-900' /> Share
      </button>
    </div>
  );
};

export default ProductActionsDesktop;
