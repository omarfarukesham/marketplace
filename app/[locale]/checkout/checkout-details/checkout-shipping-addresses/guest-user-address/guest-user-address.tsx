'use client';

import { AreaInput, StateInput, ZoneInput } from '@/app/_components/address-form/address-dropdowns';
import Button from '@/app/_components/ui/button';
import Form from '@/app/_components/ui/form/form';
import FormInput from '@/app/_components/ui/form/form-input';
import FormTextarea from '@/app/_components/ui/form/form-textarea';
import { DEFAULT_COUNTRY_OPTION } from '@/app/_config/constants';
import { EMAIL_REGEX } from '@/app/_config/validations';
import { merge } from '@/app/_lib/merge';
import customerService from '@/app/_services/customer/customer.service';
import { useCartContext } from '@/app/_store/cart/cart.context';
import { useCheckout } from '@/app/_store/checkout/checkout.context';
import { GuestUserAddressType } from '@/app/_types/order.type';
import { Dispatch, SetStateAction, useState } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import toast from 'react-hot-toast';
import ShippingAddressCard from '../user-addresses/shipping-address-card';

const GuestUserAddress = () => {
  const [addressFormOpen, setAddressFormOpen] = useState(true);

  const { shippingAddress, setShippingAddress } = useCheckout();

  const { refreshCart } = useCartContext();

  const handleAddressCreate: SubmitHandler<GuestUserAddressType> = (addressFormData) => {
    const addressInfo = {
      ...addressFormData,

      countryId: DEFAULT_COUNTRY_OPTION.id,
      countryName: DEFAULT_COUNTRY_OPTION.name,

      id: '',
      phone: '',
      isPrimary: false,
    };

    setShippingAddress(addressInfo);
    customerService.setAddressInLocalStorage({
      countryName: addressInfo.countryName,
      stateName: addressInfo.stateName,
    });

    toast.success('Address Confirmed');

    refreshCart();
    setAddressFormOpen(false);
  };

  return (
    <div className='relative grid gap-6 text-sm'>
      <h2 className='text-base font-medium md:font-bold'>Shipping Address</h2>

      {shippingAddress && (
        <ShippingAddressCard address={shippingAddress} onEditClick={() => setAddressFormOpen(true)} />
      )}

      <Form<GuestUserAddressType>
        className={merge(
          'grid gap-3 transition-all duration-300',
          addressFormOpen ? 'max-h-screen' : 'my-0 max-h-0 overflow-hidden py-0',
        )}
        onSubmit={handleAddressCreate}
        role='form'
      >
        <div className='grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-10'>
          <FormInput
            name='personName'
            label='Full Name (First and Last Name)'
            validations={{ required: 'Write your name' }}
          />
          <FormInput
            name='email'
            type='email'
            label='Email(Optional)'
            placeholder='example@gmail.com'
            validations={{
              validate: (value: string) =>
                value ? EMAIL_REGEX.test(value) || 'Please enter a valid email address' : true,
            }}
            extraInfo='This email will be used for sending invoice.'
          />
        </div>

        <div className='grid grid-cols-1 items-start gap-5 md:grid-cols-3 md:gap-10'>
          <StateInput />
          <ZoneInput />
          <AreaInput />

          {/* <CountryInput /> */}
        </div>

        <FormTextarea name='details' label='Address' validations={{ required: 'Please write your details address' }} />

        <Buttons setAddressFormOpen={setAddressFormOpen} />
      </Form>
    </div>
  );
};

const Buttons = ({ setAddressFormOpen }: { setAddressFormOpen: Dispatch<SetStateAction<boolean>> }) => {
  const { setValue } = useFormContext();
  const { shippingAddress, error, setError } = useCheckout();

  const handleCancel = () => {
    if (shippingAddress) {
      Object.entries(shippingAddress).map(([key, value]) => {
        setValue(key, value, { shouldValidate: true });
      });
    }
    setAddressFormOpen(false);
  };

  return (
    <div className='mt-2 flex items-center justify-center gap-5'>
      {shippingAddress && (
        <Button
          type='button'
          size='md'
          rounded
          className={merge('!bg-gray-500 px-10 py-3 text-white hover:!bg-danger')}
          onClick={handleCancel}
        >
          Cancel
        </Button>
      )}

      <Button
        type='submit'
        color='primary'
        size='md'
        rounded
        className={merge(
          '!bg-primary-900 px-10 py-3 text-white hover:!bg-secondary-900 md:mb-0',
          error?.type === 'SHIPPING' && 'animate-blink !bg-secondary-900',
        )}
        onClick={() => setError(null)}
      >
        Confirm
      </Button>
    </div>
  );
};

export default GuestUserAddress;
