'use client';

import { Radio } from '@/app/_components/ui/inputs/radio';
import { merge } from '@/app/_lib/merge';
import { useCheckout } from '@/app/_store/checkout/checkout.context';
import { PaymentMethodType } from '@/app/_types/checkout.type';
import Tick from '@/icons/tick';
import { ChangeEvent } from 'react';

const PaymentMethodItem = ({ method }: { method: PaymentMethodType }) => {
  const { setPaymentMethod, setError, paymentMethod } = useCheckout();

  const onChange = (e: ChangeEvent<HTMLInputElement>, method: PaymentMethodType) => {
    if (e.target.checked) {
      setPaymentMethod(method.id);
      setError(null);
    }
  };
  return (
    <label
      htmlFor={method.id}
      className={merge(
        'relative flex items-center justify-center gap-4 rounded-lg bg-secondary-200 px-5 py-3 text-base transition-colors hover:bg-secondary-300 md:text-lg',
        paymentMethod === method.id && 'border-2 border-primary-400 font-bold text-primary-900',
      )}
    >
      <Radio
        // type='radio'
        id={method.id}
        name='paymentMethod'
        className='h-5 w-5'
        onChange={(e) => onChange(e, method)}
      />
      <span className='whitespace-nowrap'>{method.title}</span>
      {paymentMethod === method.id && (
        <span className='animate-fade-in absolute -right-2 -top-3 rounded-full border-2 border-primary-400 bg-white'>
          <Tick />
        </span>
      )}
    </label>
  );
};

export default PaymentMethodItem;
