'use client';

import { merge } from '@/app/_lib/merge';
import { useCartContext } from '@/app/_store/cart/cart.context';
import Cross from '@/icons/cross';
import Link from 'next/link';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import CartDrawerItem from './cart-drawer-item';

type CartDrawerType = {
  isCartOpen: boolean;
  toggleCart: () => void;
  closeCart: () => void;
};

const CartDrawer = ({ isCartOpen, toggleCart, closeCart }: CartDrawerType) => {
  const { items } = useCartContext();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // close the drawer when esc key is pressed
        closeCart();
      } else if (e.key === 'c' && e.altKey && e.ctrlKey) {
        // toggle the drawer when ctrl + c is pressed
        toggleCart();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeCart, toggleCart]);

  return (
    <>
      <DarkBackground isCartOpen={isCartOpen} closeCart={closeCart} />

      <div
        className={merge(
          'fixed right-0 top-0 z-10 flex h-screen w-fit items-start transition-transform duration-500',

          isCartOpen ? 'translate-x-0' : 'translate-x-[110%]',
        )}
      >
        <div className='h-full w-80 bg-white'>
          <CartHeader toggleCart={toggleCart} />

          <div className='thin-scrollbar h-[calc(100%-48px)] overflow-y-auto'>
            <CartSummary closeCart={closeCart} />

            <div className='m-3 grid gap-5'>
              {items.map((item) => (
                <CartDrawerItem cartItem={item} key={item.product.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CartHeader = ({ toggleCart }: { toggleCart: () => void }) => {
  return (
    <div className='flex h-12 items-center justify-between bg-primary-900 px-4 py-3 font-bold text-white'>
      Shopping Cart
      <button onClick={toggleCart} className='rounded-full p-1 transition-colors hover:bg-primary-800/70'>
        <Cross className='h-6 w-6 fill-white transition-transform hover:rotate-180' />
      </button>
    </div>
  );
};

const CartSummary = ({ closeCart }: { closeCart: () => void }) => {
  const {
    summary: {
      totalItem,
      totalSelectedItem,
      totalSelectedInStockItem,
      netAmountWithoutShipping: amountWithoutShipping,
    },
  } = useCartContext();

  return (
    <div className='grid place-items-center gap-3 p-3'>
      <p>Total Items {totalItem}</p>
      <p>Total: {amountWithoutShipping}</p>

      <Link
        href='/checkout'
        onClick={(e) => {
          if (!totalItem) {
            e.preventDefault();
            toast.error('Please add some product to cart first.');
          } else if (totalSelectedItem && !totalSelectedInStockItem) {
            e.preventDefault();
            toast.error('No selected product is in stock. Please add/select a product first.');
          } else if (!totalSelectedItem) {
            e.preventDefault();
            toast.error('Please go to cart and select a product first.');
          } else {
            closeCart();
          }
        }}
        className='w-full'
      >
        <button
          className='h-full w-full whitespace-nowrap rounded-full py-5 font-bold transition-colors disabled:bg-gray-300 disabled:text-gray-500 nd:bg-secondary-900 nd:hover:bg-primary-900 nd:hover:text-white'
          // disabled={!totalSelectedItem}

          title={!totalSelectedInStockItem ? 'No selected cart item' : ''}
        >
          Checkout ({totalSelectedInStockItem})
        </button>
      </Link>
      <Link href='/cart' onClick={closeCart} className='w-full'>
        <button className='w-full rounded-full border border-primary-900 py-5 font-bold transition-colors hover:border-secondary-900 hover:bg-secondary-900 hover:text-white'>
          Go to Cart
        </button>
      </Link>
    </div>
  );
};

const DarkBackground = ({ isCartOpen, closeCart }: { isCartOpen: boolean; closeCart: () => void }) => {
  return (
    <div
      className={merge(
        'fixed left-0 top-0 z-10 h-full w-full bg-black/80 duration-500',
        isCartOpen ? 'animate-in fade-in' : 'hidden animate-out fade-out',
        // 'pointer-events-none',
      )}
      onClick={closeCart}
      onKeyDown={closeCart}
      role='button'
      tabIndex={0}
    ></div>
  );
};

export default CartDrawer;
