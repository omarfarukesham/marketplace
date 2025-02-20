'use client';

import ProductSelectionCard from '@/app/_components/product/product-selection-card/product-selection-card';
import Drawer from '@/app/_components/ui/drawer';
import { CartItem } from '@/app/_types/cart.type';
import { Dispatch, SetStateAction } from 'react';

type CheckoutProductsDrawerType = {
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  products: CartItem[];
};

const CheckoutProductsDrawer = ({ setDrawerOpen, products }: CheckoutProductsDrawerType) => {
  return (
    <Drawer
      size='lg'
      title='Items Details'
      onClose={() => setDrawerOpen(false)}
      className='thin-scrollbar flex flex-col overflow-y-auto px-3 pb-3'
    >
      {products.length === 0 ? (
        <p>No item yet</p>
      ) : (
        <div>
          {products.map((item) => (
            <ProductSelectionCard key={item.product.id} cartItem={item} showCheckbox={false} />
          ))}
        </div>
      )}
    </Drawer>
  );
};

export default CheckoutProductsDrawer;
