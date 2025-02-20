import Button from '@/app/_components/ui/button';
import { useShippingAddress } from '@/app/_store/address/shipping-address.context';
import PlusCircle from '@/icons/product/plus-circle';
import ActionableShippingAddressCard from '../actionable-shipping-address-card';

const ShippingAddressesList = () => {
  const {
    activeAddress,
    setActiveAddress,
    setActiveStepIndex,
    setAddressToEdit,
    shippingAddresses,
    deleteAddress,
    changeDefaultAddress,
  } = useShippingAddress();

  return (
    <div className='grid gap-6 text-sm'>
      {shippingAddresses?.length ? (
        shippingAddresses.map((address) => (
          <ActionableShippingAddressCard
            address={address}
            key={address.id}
            onEditClick={(address) => {
              setAddressToEdit(address);
              setActiveStepIndex(1);
            }}
            onDeleteClick={(address) => deleteAddress(address.id)}
            onDefaultChange={changeDefaultAddress}
            onClick={setActiveAddress}
            active={activeAddress?.id === address.id}
          />
        ))
      ) : (
        <p className='border border-dashed border-gray-500 px-3 py-10 text-center text-gray-500'>
          You have no saved addresses. Add a new address to continue.
        </p>
      )}

      <Button
        outlined
        color='primary'
        size='md'
        onClick={() => setActiveStepIndex(2)}
        className='ml-auto border-gray-600'
      >
        <PlusCircle /> Add New Address
      </Button>
    </div>
  );
};

export default ShippingAddressesList;
