import { ShippingMethodType } from '@/app/_types/checkout.type';
import ShippingMethodCard from './shipping-method-card';

const shippingMethods: ShippingMethodType[] = [
  {
    id: '1',
    name: 'Standard',
    price: '',

    delivery: '2 - 3 days',
    available: true,
  },
  {
    id: '2',
    name: 'Express',
    price: '',

    available: false,
  },
];

const ShippingMethods = () => {
  return (
    <div className='my-5 overflow-hidden md:overflow-visible'>
      <h2 className='mb-2 text-base font-medium md:mb-5 md:font-bold'>Shipping Methods</h2>

      <div className='flex gap-8 overflow-x-auto pb-2'>
        {shippingMethods.map((method) => (
          <ShippingMethodCard key={method.id} shippingMethod={method} />
        ))}
      </div>
    </div>
  );
};

export default ShippingMethods;
