'use client';

import Copy from '@/icons/copy';
import toast from 'react-hot-toast';

const OrderIdCapsule = ({ orderSequenceId, index }: { orderSequenceId: string; index: number }) => {
  return (
    <div key={orderSequenceId} className='flex items-center gap-10 rounded border px-3 py-2'>
      <p>
        Order {index + 1} - <span className='font-bold'>{orderSequenceId}</span>
      </p>
      <Copy
        onClick={() => navigator.clipboard.writeText(orderSequenceId).then(() => toast.success('Id Copied'))}
        className='cursor-pointer active:fill-primary-900'
      />
    </div>
  );
};

export default OrderIdCapsule;
