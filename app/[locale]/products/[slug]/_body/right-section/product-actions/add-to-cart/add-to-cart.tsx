'use client';

import Bin from '@/app/_components/ui/bin';
import dataLayer from '@/app/_lib/gtm/send-data';
import { useCartContext } from '@/app/_store/cart/cart.context';
import { ProductType } from '@/app/_types/product.type';
import Minus from '@/icons/product/minus';
import Plus from '@/icons/product/plus';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import toast from 'react-hot-toast';

const AddToCartSuccessModal = dynamic(() => import('./add-to-cart-modal/add-to-cart-success-modal'), { ssr: false });

type AddToCartType = {
  product: ProductType;
  disabled: boolean;
};

const AddToCart = ({ product, disabled }: AddToCartType) => {
  const cart = useCartContext();
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const openModal = () => setSuccessModalOpen(true);

  return (
    <>
      {disabled ? (
        <CartAddButton product={product} disabled openModal={openModal} />
      ) : cart.isItemInCart(product.id) ? (
        <CartQuantityUpdateButton product={product} />
      ) : (
        <CartAddButton product={product} openModal={openModal} />
      )}
      {successModalOpen && <AddToCartSuccessModal product={product} setSuccessModalOpen={setSuccessModalOpen} />}
    </>
  );
};

const CartQuantityUpdateButton = ({ product }: { product: ProductType }) => {
  const cart = useCartContext();

  const decreaseQuantity = async () => {
    const shouldRemove = cart.getQuantity(product.id) === 1;
    const res = await cart.updateCartItemQuantity(product.id, shouldRemove ? 0 : -1);

    if (!res.success) return toast.error(res.message);
    toast.success(res.message);
  };

  const increaseQuantity = async () => {
    const res = await cart.updateCartItemQuantity(product.id, 1);

    if (!res.success) return toast.error(res.message);
    // openModal();
    toast.success(res.message);
  };

  return (
    <div className='flex grow items-center justify-between whitespace-nowrap rounded-full bg-secondary-800 text-base font-bold'>
      <button
        onClick={decreaseQuantity}
        disabled={cart.isLoading}
        className='group rounded-l-full border-r border-secondary-500 bg-secondary-900 px-5 py-4 transition-colors hover:bg-secondary-800'
      >
        {cart.isLoading ? '...' : cart.getQuantity(product.id) === 1 ? <Bin /> : <Minus />}
      </button>
      {cart.getQuantity(product.id)} Unit
      <button
        onClick={increaseQuantity}
        disabled={cart.isLoading}
        className='group rounded-r-full border-l border-secondary-500 bg-secondary-900 px-5 py-4 transition-colors hover:bg-secondary-800'
      >
        {cart.isLoading ? '...' : <Plus />}
      </button>
    </div>
  );
};

const CartAddButton = ({
  product,
  openModal,
  disabled,
}: {
  product: ProductType;
  openModal: () => void;
  disabled?: boolean;
}) => {
  const cart = useCartContext();

  return (
    <>
      <button
        onClick={async () => {
          const res = await cart.addToCart(product.id, 1);

          if (!res?.success) return toast.error(res?.message);

          dataLayer.addToCart({
            items: [product],
            currency: cart.currencyCode,
            value: product.appliedPrice.priceValue,
          });

          openModal();
        }}
        disabled={disabled}
        className='w-full whitespace-nowrap rounded-full bg-secondary-900 px-6 py-4 text-base font-bold transition-all hover:bg-primary-900 hover:text-white disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-gray-300 nd:hover:shadow-lg'
      >
        {cart.isLoading ? '...' : product.isInStock ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </>
  );
};

export default AddToCart;
