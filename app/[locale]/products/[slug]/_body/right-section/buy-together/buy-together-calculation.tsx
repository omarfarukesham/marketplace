import { ProductType } from '@/app/_types/product.type';
import Equal from '@/icons/product/equal';
import Plus from '@/icons/product/plus';

type BuyTogetherCalculationType = {
  product: ProductType;
  selectedProducts: ProductType[];
};

const BuyTogetherCalculation = ({ product, selectedProducts }: BuyTogetherCalculationType) => {
  const extraItems = selectedProducts.slice(1);

  return (
    <>
      <hr className='mb-4 mt-8 h-0.5 bg-gray-400' />

      <div className='flex flex-wrap items-center justify-between'>
        <div className='flex items-center gap-5 md:gap-9'>
          <div className='grid gap-1'>
            <span className='text-label font-medium text-gray-900'>1 Main item</span>
            <span className='font-bold'>{product.appliedPrice?.priceText}</span>
          </div>

          <span>
            <Plus />
          </span>

          <div className='grid gap-1'>
            <span className='text-label font-medium text-gray-900'>
              {extraItems.length} Add-on{extraItems.length > 1 && 's'}
            </span>
            <span className='font-bold'>
              {extraItems.reduce((total, item) => total + (item.appliedPrice?.priceValue || 0), 0)}
            </span>
          </div>

          <span>
            <Equal />
          </span>

          <div className='grid gap-1'>
            <span className='text-label font-medium text-gray-900'>Total</span>
            <span className='font-bold'>
              {selectedProducts.reduce((total, item) => total + (item.appliedPrice?.priceValue || 0), 0)}
            </span>
          </div>
        </div>

        <button className='ml-auto mt-4 rounded-md bg-secondary-900 px-8 py-4 text-label hover:bg-primary-900 hover:text-white md:mt-0'>
          Add {selectedProducts.length} Item{extraItems.length > 0 && 's'} to Cart
        </button>
      </div>
      <hr className='mt-4 h-0.5 bg-gray-400' />
    </>
  );
};

export default BuyTogetherCalculation;
