import { DOM_IDS } from '@/app/_config/dom-ids';
import { merge } from '@/app/_lib/merge';
import { ProductType } from '@/app/_types/product.type';
import { forwardRef, useEffect, useRef, useState } from 'react';
import ViewAllButton from './view-all-button';

const ProductSpecification = forwardRef<HTMLDivElement, { product: ProductType }>(({ product }, ref) => {
  const [viewAll, setViewAll] = useState(false);

  const [showButton, setShowButton] = useState(false);
  const contentRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    if (contentRef.current && contentRef.current.offsetHeight > 400) {
      setShowButton(true);
    }
  }, [product]);

  return (
    <div id={DOM_IDS.PRODUCT_SPECIFICATION} className='relative scroll-m-20 pb-14' ref={ref}>
      <h2 className='mb-4 text-base font-bold md:text-2xl'>Specification</h2>
      <div className={merge('max-h-[400px] overflow-hidden text-label md:text-base', viewAll && 'max-h-none')}>
        <table className='w-full border border-gray-400' ref={contentRef}>
          <tbody>
            <tr className='border border-gray-400'>
              <td className='border border-gray-400 bg-gray-200 p-4'>SKU</td>
              <td className='w-2/3 border border-gray-400 p-4 italic'>{product.sku}</td>
            </tr>
            {product.attributes?.map((attribute) => (
              <tr key={attribute.label} className='border border-gray-400'>
                <td className='border border-gray-400 bg-gray-200 p-4'>{attribute.label}</td>
                <td className='w-2/3 border border-gray-400 p-4'>
                  {attribute.options.map((option, i) => (
                    <div key={option}>
                      {option}
                      {i < attribute.options.length - 1 && ', '}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
            {product.specifications?.map((specification) => (
              <tr key={specification.title} className='border border-gray-400'>
                <td className='border border-gray-400 bg-gray-200 p-4'>{specification.title}</td>
                <td className='w-2/3 border border-gray-400 p-4'>
                  {specification.values.map((value, i) => (
                    <div key={value.name}>
                      {value.name && (
                        <>
                          <strong>{value.name}</strong>:
                        </>
                      )}{' '}
                      {value.description}
                      {i < specification.values.length - 1 && <hr className='my-2 border-transparent' />}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showButton && <ViewAllButton viewAll={viewAll} setViewAll={setViewAll} />}
    </div>
  );
});

ProductSpecification.displayName = 'ProductSpecification';
export default ProductSpecification;
