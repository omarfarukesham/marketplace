import Progress from '@/app/_components/ui/progress';
import { ShippingMethodType } from '@/app/_types/checkout.type';
import Info from '@/icons/info';

const DELIVERY_BREAKDOWN = [
  { days: '≤ 7', value: 11.9 },
  { days: '8', value: 20.3 },
  { days: '9', value: 23.0 },
  { days: '10', value: 18.9 },
  { days: '11', value: 12.1 },
  { days: '12', value: 6.3 },
  { days: '13', value: 3.2 },
  { days: '> 13', value: 4.3 },
];

const ShippingMethodDetails = ({ shippingMethod: _shippingMethod }: { shippingMethod: ShippingMethodType }) => {
  return (
    <div className='grid gap-6 text-sm'>
      <div className='flex h-16 w-full rounded-md border border-gray-400'>
        <div className='w-32 rounded-l-md bg-gray-100 p-3'>Courier Company</div>
        {/* <div className='flex items-center gap-2.5 p-3'>
          {shippingMethod.couriers.map((courier) => (
            <div key={courier.name} className='flex items-center gap-1'>
              <Image src={courier.logo} alt={courier.name} />
              <span>{courier.name}</span>
            </div>
          ))}
        </div> */}
      </div>

      <div className='flex w-full rounded-md border border-gray-400'>
        <div className='w-32 rounded-l-md bg-gray-100 p-3'>Delivery Time</div>
        <div className='p-3 font-medium'>Nov 15-25</div>
      </div>

      <div className='flex w-full rounded-md border border-gray-400'>
        <div className='w-32 rounded-l-md bg-gray-100 p-3'>Cost</div>
        <div className='p-3 font-medium'>Free on all orders</div>
      </div>

      <div className='flex items-center gap-1 text-gray-900'>
        <Info className='fill-gray-900' /> If delivered after Nov 25, you will get a $5 credit within 48 hours.
      </div>

      <p className='text-label font-medium text-accent-4'>74.1% are ≤ 10 days</p>

      <div className='grid gap-7 font-medium text-gray-900'>
        {DELIVERY_BREAKDOWN.map((day) => (
          <div key={day.days} className='flex items-center gap-5'>
            <p className='w-9 whitespace-nowrap'>{day.days} days</p>
            <Progress value={day.value} />
            <p>{day.value}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShippingMethodDetails;
