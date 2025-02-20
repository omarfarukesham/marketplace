'use client';

import { Radio } from '@/app/_components/ui/inputs/radio';
import { useCheckout } from '@/app/_store/checkout/checkout.context';
import { PaymentMethodType } from '@/app/_types/checkout.type';
import Image from 'next/image';
import { ChangeEvent } from 'react';

const PaymentMethodItem2 = ({ method, index }: { method: PaymentMethodType; index: number }) => {
  const { setPaymentMethod, setError } = useCheckout();

  const onChange = (e: ChangeEvent<HTMLInputElement>, method: PaymentMethodType) => {
    if (e.target.checked) {
      setPaymentMethod(method.id);
      setError(null);
    }
  };
  return (
    <div className={`flex items-center gap-3 ${index === 0 && 'w-full'}`}>
      <Radio
        // type='radio'
        id={method.id}
        name='paymentMethod'
        className='h-5 w-5'
        onChange={(e) => onChange(e, method)}
      />

      {method.items.map((item) => (
        <Image key={item.src} src={item} alt={'payment method' + index} />
      ))}
    </div>
  );
};

export default PaymentMethodItem2;
