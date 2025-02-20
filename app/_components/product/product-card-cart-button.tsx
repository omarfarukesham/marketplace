'use client';

import dataLayer from '@/app/_lib/gtm/send-data';
import { merge } from '@/app/_lib/merge';
import { useCartContext } from '@/app/_store/cart/cart.context';
import { ProductType } from '@/app/_types/product.type';
import CartAdd from '@/icons/product/cart-add';
import Plus from '@/icons/product/plus';
import toast from 'react-hot-toast';

const ProductCardCartButton = ({ product }: { product: ProductType }) => {
  const cart = useCartContext();

  const isProductInCart = cart.isItemInCart(product.id);

  return (
    <button
      className={merge(
        'group/cart relative rounded-full p-1.5 transition-all disabled:bg-gray-200 nd:shadow nd:hover:scale-110 nd:hover:shadow-lg nd:group-hover:bg-secondary-900 md:p-2',
        isProductInCart && 'bg-primary-900',
      )}
      disabled={!product.isInStock}
      onClick={async () => {
        const res = isProductInCart
          ? await cart.updateCartItemQuantity(product.id, 1)
          : await cart.addToCart(product.id);
        if (!res.success) return toast.error(res.message);
        toast.success(res.message);

        dataLayer.addToCart({
          items: [product],
          currency: cart.currencyCode,
          value: product.appliedPrice.priceValue,
        });
      }}
    >
      <CartAdd
        className={merge(
          'animate-fade-in block h-4 w-4 group-hover:fill-white group-disabled/cart:fill-white md:h-auto md:w-auto',
          isProductInCart && 'fill-white group-hover/cart:hidden',
        )}
      />

      {isProductInCart && (
        <div className='absolute -top-4 left-1/2 flex h-5 w-fit -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-full bg-secondary-900 px-2 py-1 text-sm'>
          {cart.getQuantity(product.id)} <span className='hidden md:inline'>Added</span>
        </div>
      )}

      {!product.isInStock && (
        <div className='absolute -top-4 left-1/2 hidden h-5 w-fit -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-full bg-secondary-900 px-2 py-1 text-sm md:flex'>
          Sold Out
        </div>
      )}

      {isProductInCart && (
        <Plus className='animate-fade-in hidden h-4 w-4 group-hover/cart:block group-hover/cart:fill-white md:h-auto md:w-auto' />
      )}
    </button>
  );
};

export default ProductCardCartButton;
