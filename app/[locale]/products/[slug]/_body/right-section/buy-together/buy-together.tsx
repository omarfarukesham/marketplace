'use client';

import { PRODUCTS_DATA } from '@/app/_lib/static-data/products-data';
import { ProductType } from '@/app/_types/product.type';
import Plus from '@/icons/product/plus';
import { Fragment, useState } from 'react';
import BuyTogetherCalculation from './buy-together-calculation';
import BuyTogetherCard from './buy-together-card';

type BuyTogetherType = {
  product: ProductType;
};
const BuyTogether = ({ product }: BuyTogetherType) => {
  const BUY_TOGETHER_ITEMS = PRODUCTS_DATA.slice(0, 3);
  const [selectedProducts, setSelectedProducts] = useState(BUY_TOGETHER_ITEMS);

  const onCheckboxClick = (product: ProductType) => {
    if (selectedProducts.find((item) => item.id === product.id)) {
      setSelectedProducts(selectedProducts.filter((item) => item.id !== product.id));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  return (
    <div>
      <hr className='my-5 h-0.5 bg-gray-400 md:my-12' />

      <h2 className='mb-7 text-base font-bold md:text-2xl'>Buy together and save upto 20%</h2>

      <div className='items-center justify-between md:flex'>
        {BUY_TOGETHER_ITEMS.map((product, index) => (
          <Fragment key={product.id}>
            <BuyTogetherCard
              product={product}
              className='w-1/4'
              selected={!!selectedProducts.find((item) => item.id === product.id)}
              onCheckboxClick={onCheckboxClick}
              showCheckbox={index !== 0}
            />
            {index !== BUY_TOGETHER_ITEMS.length - 1 && <Plus className='shrink-0 fill-gray-400' />}
          </Fragment>
        ))}
      </div>

      <BuyTogetherCalculation product={product} selectedProducts={selectedProducts} />
    </div>
  );
};

export default BuyTogether;
