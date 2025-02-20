'use client';

import ProductSelectionCard from '@/app/_components/product/product-selection-card/product-selection-card';
import LoadingSpinner from '@/app/_components/ui/loading-spinner';
import { getFilters } from '@/app/_lib/getFilters';
import GTM_EVENTS from '@/app/_lib/gtm/events';
import dataLayer, { DataLayerOnLoad } from '@/app/_lib/gtm/send-data';
import { useCartContext } from '@/app/_store/cart/cart.context';
import { CartItem } from '@/app/_types/cart.type';
import { SearchParamsType } from '@/app/_types/utility.type';
import NoCartItem from './no-cart-item';

const CartItemsList = ({ searchParams }: { searchParams?: SearchParamsType }) => {
  const _filters = getFilters(['sort', 'q', 'page'], searchParams);

  // const products = await getCartItems(filters);

  const cart = useCartContext();

  const onItemSelect = async (cartItem: CartItem, isSelected: boolean) => {
    await cart.updateCartItemSelection(cartItem.product.id, isSelected);
  };

  if (cart.isFetching) return <LoadingSpinner />;

  return (
    <section className='w-full md:w-3/5'>
      {/* <FreeShipping countdownTime={1709549597771} /> */}

      {/* <CartItemsHeader /> */}

      <DataLayerOnLoad
        eventName={GTM_EVENTS.VIEW_CART}
        data={{ items: cart.items, total: cart.summary?.netAmount, currency: cart.currencyCode }}
      />

      <div>
        {cart.items.length === 0 ? (
          <NoCartItem />
        ) : (
          <div className='grid gap-6'>
            <div>
              <h2 className='mb-3 border-b border-gray-300 pb-2 text-base font-bold md:mb-4 md:pb-4 md:text-2xl'>
                Cart Items
              </h2>
              {cart.items
                .filter((item) => item.product.isInStock)
                .map((item) => (
                  <ProductSelectionCard
                    key={item.product.id}
                    cartItem={item}
                    isSelected={cart.isItemSelected(item.product.id)}
                    onSelect={onItemSelect}
                    onDelete={() => {
                      dataLayer.removeFromCart(item);
                    }}
                  />
                ))}
            </div>
            <div>
              <h2 className='text-base text-gray-900 md:text-lg'>Unavailable Items</h2>
              {cart.items
                .filter((item) => !item.product.isInStock)
                .map((item) => (
                  <ProductSelectionCard
                    key={item.product.id}
                    cartItem={item}
                    isSelected={cart.isItemSelected(item.product.id)}
                    onSelect={onItemSelect}
                    onDelete={() => {
                      dataLayer.removeFromCart(item);
                    }}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartItemsList;
