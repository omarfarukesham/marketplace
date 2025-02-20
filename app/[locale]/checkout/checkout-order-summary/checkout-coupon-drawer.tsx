import Drawer from '@/app/_components/ui/drawer';
import { InputField } from '@/app/_components/ui/inputs/input';
import { API_SUCCESS } from '@/app/_config/constants';
import cartService from '@/app/_services/cart/cart.service';
import { useCartContext } from '@/app/_store/cart/cart.context';
import Cross from '@/icons/cross';
import { FormEventHandler, useState } from 'react';
import toast from 'react-hot-toast';

type CheckoutCouponDrawerType = {
  onClose: () => void;
};

const CheckoutCouponDrawer = ({ onClose }: CheckoutCouponDrawerType) => {
  const [error, setError] = useState('');
  const cart = useCartContext();

  const handleCouponSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const code = (e.target as HTMLFormElement).code.value;
    const res = await cartService.applyCoupon(code);

    if (res.data?.status !== API_SUCCESS && res.error) {
      return setError(res.error?.message);
    }

    cart.refreshCart();

    toast.success('Coupon Applied Successfully');
    (e.target as HTMLFormElement).reset();
    setError('');
  };

  const handleRemoveCoupon = async () => {
    const res = await cartService.removeCoupon({});

    if (res.data?.status !== API_SUCCESS && res.error) return toast.error(res.error?.message);

    cart.refreshCart();
    toast.success('Coupon removed Successfully');
  };

  return (
    <Drawer size='lg' title='Apply Coupon Code' onClose={onClose} className='thin-scrollbar overflow-y-auto pr-2'>
      <form
        className='flex items-start justify-center gap-5 border-t border-gray-300 py-6'
        onSubmit={handleCouponSubmit}
      >
        <div>
          <InputField
            placeholder='Enter Coupon Code'
            name='code'
            required
            className='w-48'
            onChange={() => setError('')}
          />
          {error && <p className='animate-fade-in text-sm text-danger'>⚠ {error}</p>}
        </div>
        <button className='rounded-md border border-gray-900 px-7 py-3'>Apply</button>
      </form>

      <div className='my-10'>
        {cart.couponId ? (
          <div className='ml-[50px] flex w-fit items-center gap-5 rounded bg-secondary-500 px-5 py-2'>
            <div className='font-bold'> ✔ {cart?.summary?.couponCode}</div>
            <div>
              -{cart?.summary?.couponDiscount}
              {cart?.currencySymbol}
            </div>
            <button className='rounded hover:bg-danger' onClick={handleRemoveCoupon} title='Remove Coupon'>
              <Cross className='h-4 w-4 hover:fill-white' />
            </button>
          </div>
        ) : (
          <div className='mx-auto flex flex-col items-center gap-2'>
            <svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none'>
              <path
                d='M10.1733 39.2916C9.20508 39.2916 8.38558 38.9562 7.71475 38.2854C7.04391 37.6145 6.7085 36.795 6.7085 35.8269V28.75H9.58345V35.8269C9.58345 35.9743 9.64488 36.1095 9.76774 36.2324C9.89063 36.3552 10.0258 36.4167 10.1733 36.4167H17.2501V39.2916H10.1733ZM35.827 39.2916H28.7501V36.4167H35.827C35.9744 36.4167 36.1096 36.3552 36.2325 36.2324C36.3554 36.1095 36.4168 35.9743 36.4168 35.8269V28.75H39.2917V35.8269C39.2917 36.795 38.9563 37.6145 38.2855 38.2854C37.6147 38.9562 36.7951 39.2916 35.827 39.2916ZM6.7085 10.1731C6.7085 9.20496 7.04391 8.38546 7.71475 7.71462C8.38558 7.04379 9.20508 6.70837 10.1733 6.70837H17.2501V9.58333H10.1733C10.0258 9.58333 9.89063 9.64476 9.76774 9.76762C9.64488 9.89051 9.58345 10.0257 9.58345 10.1731V17.25H6.7085V10.1731ZM39.2917 10.1731V17.25H36.4168V10.1731C36.4168 10.0257 36.3554 9.89051 36.2325 9.76762C36.1096 9.64476 35.9744 9.58333 35.827 9.58333H28.7501V6.70837H35.827C36.7951 6.70837 37.6147 7.04379 38.2855 7.71462C38.9563 8.38546 39.2917 9.20496 39.2917 10.1731ZM23.037 33.7444C23.5849 33.7444 24.0475 33.5558 24.4247 33.1786C24.8019 32.8014 24.9905 32.3388 24.9905 31.7908C24.9905 31.2429 24.8019 30.7803 24.4247 30.4031C24.0475 30.026 23.5849 29.8374 23.037 29.8374C22.489 29.8374 22.0264 30.026 21.6492 30.4031C21.2721 30.7803 21.0835 31.2429 21.0835 31.7908C21.0835 32.3388 21.2721 32.8014 21.6492 33.1786C22.0264 33.5558 22.489 33.7444 23.037 33.7444ZM21.6806 26.9107H24.3491C24.3737 25.9598 24.5168 25.2091 24.7785 24.6586C25.0402 24.1082 25.5778 23.4263 26.3911 22.613C27.4355 21.5686 28.1413 20.7092 28.5087 20.0347C28.876 19.3602 29.0597 18.5806 29.0597 17.696C29.0597 16.0939 28.4982 14.7866 27.3752 13.7743C26.2523 12.7618 24.8185 12.2556 23.0739 12.2556C21.6487 12.2556 20.4071 12.6218 19.3492 13.354C18.2914 14.0863 17.5008 15.1331 16.9774 16.4944L19.4395 17.5117C19.7246 16.6934 20.1878 16.033 20.8291 15.5305C21.4705 15.028 22.2064 14.7768 23.037 14.7768C24.0248 14.7768 24.8259 15.052 25.4402 15.6024C26.0545 16.1528 26.3617 16.8802 26.3617 17.7845C26.3617 18.3988 26.213 18.9762 25.9157 19.5168C25.6184 20.0574 25.1085 20.6374 24.3861 21.2566C23.381 22.1707 22.6789 23.0344 22.2795 23.8478C21.8802 24.6611 21.6806 25.6821 21.6806 26.9107Z'
                fill='#BBBBBB'
              />
            </svg>

            <span className='font-bold'>Its Empty</span>
            <p>There is not coupon code</p>
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default CheckoutCouponDrawer;
