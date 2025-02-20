'use client';

import Modal from '@/app/_components/ui/modal';
import { PRODUCTS_DATA } from '@/app/_lib/static-data/products-data';
import { Dispatch, SetStateAction, useState } from 'react';

import ProductSelectionCard from '@/app/_components/product/product-selection-card/product-selection-card';
import NoCartItem from '../no-cart-item';

type CartManageModalDesktopType = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

const CartManageModalDesktop = ({ setModalOpen }: CartManageModalDesktopType) => {
  const [products, setProducts] = useState(
    PRODUCTS_DATA.map((product) => ({ product, quantity: 1, isSelected: true })),
  );
  const [selectedProducts, setSelectedProducts] = useState(
    PRODUCTS_DATA.map((product) => ({ product, quantity: 1, isSelected: true })),
  );

  return (
    <Modal size='lg' title='Manage Cart' onClose={() => setModalOpen(false)} className='flex flex-col px-14 pb-8'>
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
      <button
        onClick={() => setProducts([])}
        className='mx-auto mt-5 w-fit rounded-full border border-black px-16 py-3 text-base font-bold transition-all hover:bg-primary-900 hover:text-white'
      >
        Remove
      </button>
    </Modal>
  );
};

export default CartManageModalDesktop;
