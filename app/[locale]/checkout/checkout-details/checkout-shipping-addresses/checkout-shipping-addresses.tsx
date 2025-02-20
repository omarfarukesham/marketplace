'use client';

import { useAddresses } from '@/app/_services/customer/use-customer';
import { useUser } from '@/app/_store/user/user.context';
import GuestUserAddress from './guest-user-address/guest-user-address';
import UserAddresses from './user-addresses/user-addresses';

const CheckoutShippingAddresses = () => {
  const { isAuthenticated, isLoading: isUserLoading } = useUser();
  // fetching addresses here if user is authenticated to avoid two separate loading spinners.
  // It will be cached, so no worries for calling it again in `ShippingAddressProvider` component.
  const { isLoading: isAddressLoading } = useAddresses({
    queryOptions: {
      enabled: isAuthenticated, // no need to fetch if user is not authenticated
    },
  });

  const isLoading = isUserLoading || isAddressLoading;

  return (
    <div className='mb-4 grid grid-cols-1 justify-between gap-6 md:mb-10 md:grid-cols-1 md:gap-10'>
      {isLoading ? <AddressLoading /> : isAuthenticated ? <UserAddresses /> : <GuestUserAddress />}
    </div>
  );
};

const AddressLoading = () => (
  <div className='grid gap-6'>
    <h2 className='text-base font-medium md:font-bold'>Shipping Address</h2>
    <div className='h-32 w-full rounded-lg border-2 border-dashed'></div>
  </div>
);

export default CheckoutShippingAddresses;
