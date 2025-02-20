import { useCartContext } from '@/app/_store/cart/cart.context';
import { ProductType } from '@/app/_types/product.type';
import { useState } from 'react';
import AddToCartMobileDrawer from './add-to-cart-modal/add-to-cart-mobile-drawer';

const AddToCartMobile = ({ product, disabled }: { product: ProductType; disabled: boolean }) => {
  const [cartModalOpen, setCartModalOpen] = useState(false);

  const cart = useCartContext();

  return (
    <div className='flex h-full items-center gap-2.5'>
      <button
        onClick={() => setCartModalOpen(true)}
        className='relative h-full grow rounded-full bg-secondary-900 px-10 text-base font-bold transition-all hover:bg-primary-900 hover:text-white disabled:bg-gray-300 disabled:text-gray-500'
        disabled={disabled}
      >
        {product.isInStock ? 'Add to Cart' : 'Sold Out'}
        {cart.getQuantity(product.id) ? (
          <span className='absolute -top-2 left-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary-900 text-white'>
            {cart.getQuantity(product.id)}
          </span>
        ) : null}
      </button>
      {cartModalOpen && (
        <AddToCartMobileDrawer product={product} slug={product.slug} setCartModalOpen={setCartModalOpen} />
      )}
    </div>
  );
};

export default AddToCartMobile;
