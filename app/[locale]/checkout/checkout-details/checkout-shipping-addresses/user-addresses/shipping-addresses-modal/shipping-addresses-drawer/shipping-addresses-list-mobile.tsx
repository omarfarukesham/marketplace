import { useShippingAddress } from '@/app/_store/address/shipping-address.context';
import { useUser } from '@/app/_store/user/user.context';
import ActionableShippingAddressCardMobile from './actionable-shipping-address-card-mobile';

const ShippingAddressesListMobile = () => {
  const {
    setActiveAddress,
    activeAddress,
    setAddressToEdit,
    setActiveStepIndex,
    shippingAddresses,
    changeDefaultAddress,
    deleteAddress,
  } = useShippingAddress();
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className='grid gap-5 text-sm'>
      {shippingAddresses?.map((address) => (
        <ActionableShippingAddressCardMobile
          address={address}
          key={address.id}
          onEditClick={(address) => {
            setAddressToEdit(address);
            setActiveStepIndex(1);
          }}
          onDefaultChange={changeDefaultAddress}
          onDeleteClick={(address) => deleteAddress(address.id)}
          onClick={setActiveAddress}
          active={activeAddress?.id === address.id}
        />
      ))}

      <div className='border-t border-gray-200 px-5 py-3'>
        <button
          type='button'
          onClick={() => setActiveStepIndex(2)}
          className='mx-auto h-full  w-full rounded-full !bg-secondary-900 py-3 text-base font-bold transition-all hover:bg-primary-900 hover:text-white'
        >
          Add New Address
        </button>
      </div>
    </div>
  );
};

export default ShippingAddressesListMobile;
