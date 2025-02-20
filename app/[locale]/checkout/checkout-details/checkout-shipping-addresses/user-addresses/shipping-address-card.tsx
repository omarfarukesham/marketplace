import { _ShippingAddressType } from '@/app/_types/order.type';
import Edit from '@/icons/edit';

const ShippingAddressCard = ({
  address,
  onEditClick,
}: {
  address: _ShippingAddressType | undefined;
  onEditClick: (address: _ShippingAddressType) => void;
}) => {
  if (!address) return null;

  return (
    <div
      className='flex items-start justify-between rounded-md border border-l-[6px] border-dashed border-gray-400 border-l-secondary-400 p-4'
      style={{
        borderLeftStyle: 'solid',
      }}
    >
      <div className='grid gap-3'>
        <p>
          <span className='font-bold'>{address.personName}</span>{' '}
          {address.phone && <span className='bg-gray-200 px-1'>{address.phone}</span>}
        </p>
        {address.email && <p>{address.email}</p>}
        <p>
          {address.details} {address.stateName}, {address.countryName}
        </p>
      </div>
      <button onClick={() => onEditClick(address)}>
        <Edit className='fill-gray-900' />
      </button>
    </div>
  );
};

export default ShippingAddressCard;
