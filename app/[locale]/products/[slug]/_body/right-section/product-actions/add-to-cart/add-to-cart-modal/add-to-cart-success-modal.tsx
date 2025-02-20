import Modal from '@/app/_components/ui/modal';
import { ROUTES } from '@/app/_config/routes';
import { ProductType } from '@/app/_types/product.type';
import CartArrow from '@/icons/product/cart-arrow';
import Restart from '@/icons/product/restart';
import Tick from '@/icons/tick';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import CrossSellProducts from '../related-products';

type AddToCartModalType = {
  setSuccessModalOpen: Dispatch<SetStateAction<boolean>>;
  product: ProductType;
};

const AddToCartSuccessModal = ({ setSuccessModalOpen, product }: AddToCartModalType) => {
  return (
    <Modal
      size={{ custom: 'max-h-[90%] w-full md:w-3/5' }}
      onClose={() => setSuccessModalOpen(false)}
      className='thin-scrollbar mb-3 grid content-start gap-10 overflow-y-auto px-3 md:my-5 md:px-10'
    >
      <AddConfirmation />

      <ProductInformation product={product} />

      <Buttons setCartModalOpen={setSuccessModalOpen} />

      <hr className='border  border-gray-300' />

      <CrossSellProducts productId={product.id} />
    </Modal>
  );
};

const AddConfirmation = () => {
  return (
    <div className='grid justify-center justify-items-center gap-1.5'>
      <span className='rounded-full bg-success p-1 md:p-3'>
        <Tick className='fill-white' />
      </span>
      <span className='text-label font-medium md:text-base'>Product has been added to your shopping cart</span>
    </div>
  );
};

const ProductInformation = ({ product }: { product: ProductType }) => {
  return (
    <div className='flex flex-col items-center gap-5 md:flex-row md:items-start'>
      <Image
        src={product.thumbnail?.url || ''}
        alt={product.thumbnail?.altText || ''}
        height={160}
        width={160}
        className='shadow-sm'
      />

      <div className='grow'>
        <h1 className='mb-2 text-base font-bold md:text-lg'>{product.title}</h1>
        <span>
          Vendor: <span className='text-label font-bold md:text-base'>{product.sellerStoreName}</span>
        </span>
      </div>

      <div className='flex items-center justify-end gap-2 md:flex-col'>
        <span className='text-lg font-bold md:text-3xl'>{product.appliedPrice?.priceText}</span>
        {product.hasDiscount && (
          <del className='text-right text-base text-gray-800 md:text-lg'>{product.price?.priceText}</del>
        )}
        {product.hasDiscount && (
          <span className='rounded bg-danger p-1 text-sm leading-none text-white'>-{product.discountedAmount}</span>
        )}
      </div>
    </div>
  );
};

const Buttons = ({ setCartModalOpen }: { setCartModalOpen: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div className='mx-8 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8'>
      <button
        onClick={() => setCartModalOpen(false)}
        className='flex w-full items-center justify-center gap-2 rounded-full bg-primary-900 py-2 font-bold text-white md:py-3'
      >
        <Restart className='fill-white' /> Continue Shopping
      </button>

      <Link href={ROUTES.checkout}>
        <button className='flex h-full w-full items-center justify-center gap-2 rounded-full bg-secondary-900 py-2 font-bold md:py-3'>
          <CartArrow /> Proceed to Checkout
        </button>
      </Link>
    </div>
  );
};

export default AddToCartSuccessModal;
