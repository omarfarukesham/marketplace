'use client';

import { ShippingDiscountAlert } from '@/app/_components/offers/free-shipping';
import { ROUTES } from '@/app/_config/routes';
import { ProductType, VariantType } from '@/app/_types/product.type';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

import ProductActions from './product-actions/product-actions';
import QuantityInformation from './quantity-information/quantity-information';
import Variants from './variants/variants';

type ProductStickySidebarType = {
  product: ProductType;
  isDesktop: boolean;
};

const VariantsNActions = ({ product, isDesktop }: ProductStickySidebarType) => {
  const [cartButtonDisabled, setCartButtonDisabled] = useState(!product.isInStock);
  const router = useRouter();

  const handleVariantChange = useCallback(
    (matchedVariant: VariantType | null) => {
      if (matchedVariant?.productSlug) {
        router.push(ROUTES.product(matchedVariant.productSlug));
      }
      setCartButtonDisabled(!product.isInStock || !matchedVariant);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [product.stockCount],
  );

  return (
    <div>
      {product.shippingCampaignInfo && (
        <ShippingDiscountAlert
          message={product.shippingCampaignInfo?.label}
          countdownTime={product.shippingCampaignInfo?.effectiveEndDate?.getTime()}
          className='mt-5 hidden md:flex'
        />
      )}

      {product.variants?.length ? <Variants product={product} onVariantChange={handleVariantChange} /> : null}

      {isDesktop && <QuantityInformation product={product} />}

      <ProductActions product={product} isDesktop={isDesktop} disabled={cartButtonDisabled} />
    </div>
  );
};

export default VariantsNActions;
