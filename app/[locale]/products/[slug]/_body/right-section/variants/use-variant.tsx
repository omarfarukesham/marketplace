import { ProductType, VariantType } from '@/app/_types/product.type';
import { useEffect, useState } from 'react';

const useVariant = (product: ProductType, onVariantChange?: (matchedVariant: VariantType | null) => void) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.find((variant) => variant.productSlug === product.slug)?.variantAttribute || {},
  );

  const [variantMatched, setVariantMatched] = useState(true);

  const variantProperties = Object.keys(product.variants?.[0]?.variantAttribute || {});

  const variantsWithUniqueOptions = variantProperties.map((property) => {
    const uniqueOptions: string[] = [];
    product.variants?.forEach((variant) => {
      if (variant.variantAttribute[property] && !uniqueOptions.includes(variant.variantAttribute[property])) {
        uniqueOptions.push(variant.variantAttribute[property]);
      }
    });
    return { property, uniqueOptions };
  });

  useEffect(() => {
    if (!selectedVariant) return;

    const matchedVariant = product.variants?.find((variant) => {
      return Object.keys(selectedVariant).every((key) => variant.variantAttribute[key] === selectedVariant[key]);
    });

    if (matchedVariant) {
      if (matchedVariant.productSlug !== product.slug) {
        onVariantChange?.(matchedVariant);
      } else {
        onVariantChange?.(matchedVariant);
        setVariantMatched(true);
      }
    } else {
      onVariantChange?.(null);
      setVariantMatched(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedVariant]);

  return { selectedVariant, setSelectedVariant, variantsWithUniqueOptions, variantMatched };
};

export default useVariant;
