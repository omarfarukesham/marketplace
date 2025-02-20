'use client';

import { ROUTES } from '@/app/_config/routes';
import dataLayer from '@/app/_lib/gtm/send-data';
import { useCartContext } from '@/app/_store/cart/cart.context';
import { ProductType } from '@/app/_types/product.type';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import ProductActionsDesktop from './product-actions-desktop';

const ProductActionsMobileBar = dynamic(() => import('./product-actions-mobile-bar'), { ssr: false });

type ProductStickySidebarType = {
  product: ProductType;
  isDesktop: boolean;
  disabled: boolean;
};

const ProductActions = ({ product, isDesktop, disabled }: ProductStickySidebarType) => {
  const router = useRouter();
  const cart = useCartContext();

  const handleBuyNow = async () => {
    if (!cart.isItemInCart(product.id)) {
      const res = await cart.addToCart(product.id);
      if (!res?.success) return toast.error(res?.message);
    }

    dataLayer.addToCart({
      items: [product],
      currency: cart.currencyCode,
      value: product.appliedPrice.priceValue,
    });

    router.push(ROUTES.checkout + `?productId=${product.id}`);
  };

  const handleShare = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}${ROUTES.product(product.slug)}`)
      .then(() => {
        toast.success('Link copied to clipboard');
      })
      .catch(() => {
        toast.error('Failed to copy link');
      });
  };

  return (
    <>
      {isDesktop ? (
        <ProductActionsDesktop
          product={product}
          disabled={disabled}
          handleBuyNow={handleBuyNow}
          handleShare={handleShare}
        />
      ) : (
        <ProductActionsMobileBar
          product={product}
          disabled={disabled}
          handleBuyNow={handleBuyNow}
          handleShare={handleShare}
        />
      )}
    </>
  );
};

export default ProductActions;
