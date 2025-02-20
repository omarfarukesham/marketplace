import { merge } from '@/app/_lib/merge';
import { ShippingMethodType } from '@/app/_types/checkout.type';

const ShippingMethodCard = ({ shippingMethod }: { shippingMethod: ShippingMethodType }) => {
  const { name, price, delivery, available } = shippingMethod;

  return (
    <div
      className={merge(
        'relative grid shrink-0 cursor-pointer gap-1 rounded-lg border px-5 py-2 text-sm md:gap-2 md:text-base',
        available ? 'border-secondary-500' : '',
      )}
    >
      <div className='flex items-center gap-2.5'>
        <input disabled={!available} checked={available} readOnly type='radio' className='h-5 w-5' />
        <p
          className={merge('text-sm font-bold md:text-label', available ? 'text-accent-4' : 'text-gray-600 opacity-50')}
        >
          {name} {price}
        </p>
      </div>

      <div className='flex items-end gap-2 pl-7 text-label text-gray-900'>
        {available ? <p>{delivery}</p> : <p>Not available for this item right now.</p>}
      </div>
    </div>
  );
};

export default ShippingMethodCard;
