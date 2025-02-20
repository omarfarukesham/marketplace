import Button from '@/app/_components/ui/button';
import { InputField } from '@/app/_components/ui/inputs/input';
import { API_SUCCESS } from '@/app/_config/constants';
import { ENDPOINTS } from '@/app/_config/endpoints';
import cartService from '@/app/_services/cart/cart.service';
import { useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { FormEventHandler, useState } from 'react';
import toast from 'react-hot-toast';

const CheckoutCouponDesktop = () => {
  const [error, setError] = useState('');

  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  const handleCouponSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const code = form.code.value;

    const res = await cartService.applyCoupon({
      code,
      ...(searchParams.get('productId') && { productId: searchParams.get('productId') as string }),
    });

    if (res.data?.status !== API_SUCCESS && res.error) {
      return setError(res.error?.message);
    }

    queryClient.invalidateQueries({ queryKey: [ENDPOINTS.cart] });
    toast.success('Coupon Applied Successfully');
    form.reset();
    setError('');
  };

  return (
    <form className='flex items-start gap-5' onSubmit={handleCouponSubmit} data-testid='coupon-form' name='coupon-form'>
      <div>
        <InputField
          placeholder='Enter Coupon Code'
          name='code'
          required
          className='grow'
          onChange={() => setError('')}
        />
        {error && (
          <p className='animate-fade-in text-sm text-danger' role='alert'>
            ⚠ {error}
          </p>
        )}
      </div>
      <Button outlined color='primary' size='lg' className='border-gray-900 px-7 py-3.5'>
        Apply
      </Button>
    </form>
  );
};

export default CheckoutCouponDesktop;
