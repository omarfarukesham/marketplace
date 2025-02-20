import { merge } from '@/app/_lib/merge';
import Cart from '@/icons/product/cart';

const ProductCardLoading = ({ className }: { className?: string }) => {
  return (
    <div className={merge('group relative w-auto min-w-[10.8rem] shrink-0', 'grid gap-1.5 md:gap-3', className)}>
      <div className='aspect-square w-full animate-pulse overflow-hidden rounded-t-md border border-gray-300 bg-gray-600'></div>

      <div className='h-3 w-full animate-pulse bg-gray-400'></div>

      <div className='h-3 w-full animate-pulse bg-gray-400'></div>

      <div className='flex items-center justify-between'>
        <div className='grid w-1/3 gap-1'>
          <div className='h-3 w-full animate-pulse bg-gray-400'></div>
          <div className='h-3 w-full animate-pulse bg-gray-400'></div>
        </div>

        <div className='animate-pulse rounded-full bg-gray-500 p-1.5 shadow'>
          <Cart className='animate-pulse fill-gray-700' />
        </div>
      </div>
    </div>
  );
};

export default ProductCardLoading;
