'use client';

import { AreaInput, StateInput, ZoneInput } from '@/app/_components/address-form/address-dropdowns';
import Button from '@/app/_components/ui/button';
import Form from '@/app/_components/ui/form/form';
import FormCheckbox from '@/app/_components/ui/form/form-checkbox';
import FormInput from '@/app/_components/ui/form/form-input';
import { FormPhoneInput2 } from '@/app/_components/ui/form/form-phone-input-2';
import FormTextarea from '@/app/_components/ui/form/form-textarea';
import { DEFAULT_COUNTRY_OPTION } from '@/app/_config/constants';
import { EMAIL_REGEX } from '@/app/_config/validations';
import { useShippingAddress } from '@/app/_store/address/shipping-address.context';
import { _ShippingAddressType } from '@/app/_types/order.type';
import { SubmitHandler } from 'react-hook-form';

const ShippingAddressEdit = () => {
  const { addressToEdit: defaultValue, editAddress } = useShippingAddress();

  const handleAddressEdit: SubmitHandler<_ShippingAddressType> = (updatedAddress) =>
    editAddress({ ...updatedAddress, countryId: DEFAULT_COUNTRY_OPTION.id, countryName: DEFAULT_COUNTRY_OPTION.name });

  return (
    <div className='relative grid gap-6 text-sm'>
      <Form<_ShippingAddressType>
        className='grid gap-5'
        onSubmit={handleAddressEdit}
        defaultValues={defaultValue ?? {}}
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
          />
        </div>

        <div className='grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-10'>
          <StateInput />
          <ZoneInput />
        </div>

        <div className='grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-10'>
          <AreaInput />
          <FormPhoneInput2 name='phone' required className='py-3' />
        </div>

        <div className='grid grid-cols-1 items-start gap-5 md:gap-10'>
          <FormTextarea
            name='details'
            label='Address'
            validations={{ required: 'Please write your details address' }}
          />
        </div>

        <FormCheckbox name='isPrimary' id='isPrimary' label='Set as my default address' />

        <Button
          type='submit'
          color='secondary'
          size='lg'
          rounded
          className='mx-auto mb-3 !bg-secondary-900 hover:!bg-primary-900 md:mb-0'
        >
          Save and Use
        </Button>
      </Form>
    </div>
  );
};

export default ShippingAddressEdit;
