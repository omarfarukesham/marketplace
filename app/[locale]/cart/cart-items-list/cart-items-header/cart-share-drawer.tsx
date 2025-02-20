'use client';

import Drawer from '@/app/_components/ui/drawer';
import { PRODUCTS_DATA } from '@/app/_lib/static-data/products-data';
import { Dispatch, SetStateAction, useState } from 'react';

import ProductSelectionCard from '@/app/_components/product/product-selection-card/product-selection-card';
import NoCartItem from '../no-cart-item';

type CartShareDrawerType = {
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
};

const CartShareDrawer = ({ setDrawerOpen }: CartShareDrawerType) => {
  const [products] = useState(PRODUCTS_DATA.map((product) => ({ product, quantity: 1, isSelected: true })));
  const [selectedProducts, setSelectedProducts] = useState(
    PRODUCTS_DATA.map((product) => ({ product, quantity: 1, isSelected: true })),
  );

  return (
    <Drawer size='lg' title='Share Cart' onClose={() => setDrawerOpen(false)} className='flex flex-col px-3 pb-3'>
      <div className='thin-scrollbar overflow-y-auto pr-2'>
        {products.length === 0 ? (
          <NoCartItem />
        ) : (
          <div>
            {products.map((product) => (
              <ProductSelectionCard
                key={product.product.id}
                // @ts-ignore

                cartItem={{ ...product, quantity: 1 }}
                isSelected={!!selectedProducts.find((item) => item.product.id === product.product.id)}
                onSelect={(clickedItem, checked) => {
                  if (checked)
                    setSelectedProducts(selectedProducts.filter((item) => item.product.id !== clickedItem.product.id));
                  // @ts-ignore
                  else setSelectedProducts([...selectedProducts, clickedItem]);
                }}
              />
            ))}
          </div>
        )}
      </div>
      <button className='mx-auto mt-3 w-full rounded-full bg-secondary-900 py-3 text-base font-bold transition-all hover:bg-primary-900 hover:text-white'>
        Share Now ({selectedProducts.length})
      </button>
    </Drawer>
  );
};

export default CartShareDrawer;
