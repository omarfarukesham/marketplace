'use client';

import Bin from '@/app/_components/ui/bin';
import { Radio } from '@/app/_components/ui/inputs/radio';
import { merge } from '@/app/_lib/merge';
import { _ShippingAddressType } from '@/app/_types/order.type';
import Edit from '@/icons/edit';

const ActionableShippingAddressCard = ({
  address,
  active,
  onEditClick,
  onDeleteClick,
  onDefaultChange,
  onClick,
}: {
  address: _ShippingAddressType;
  active?: boolean;
  onEditClick?: (address: _ShippingAddressType) => void;
  onDeleteClick?: (address: _ShippingAddressType) => void;
  onDefaultChange?: (address: _ShippingAddressType) => void;
  onClick?: (address: _ShippingAddressType) => void;
}) => {
  return (
    <div
      role='button'
      tabIndex={0}
      onKeyDown={() => {}} // add later
      onClick={() => {
        onClick && onClick(address);
      }}
      className={merge(
        'grid gap-3 rounded-md border border-l-[6px] border-dashed border-l-secondary-400 p-4',
        active ? 'border-secondary-400' : 'border-gray-400',
      )}
      style={{
        borderLeftStyle: 'solid',
      }}
    >
      <p>
        <span className='font-bold'>{address.personName}</span> {address.phone}
      </p>
      {address.email && <p>{address.email}</p>}
      <p>
        {address.details} {address.stateName}, {address.countryName}
      </p>
      <div className='flex items-center justify-between text-label'>
        <button
          className={merge(
            'flex items-center rounded-full py-1 pl-1 pr-2',
            address.isPrimary ? 'bg-secondary-500' : 'bg-gray-200',
          )}
        >
          <Radio
            // name='isPrimary'
            value={address.id}
            id={address.id}
            checked={address.isPrimary}
            onChange={(e) => {
              if (e.target.checked) {
                onDefaultChange && onDefaultChange(address);
              }
            }}
            label='Default'
          />
          {/* <label htmlFor={address.id} className='cursor-pointer leading-0'>
            Default
          </label> */}
        </button>

        <div className='flex gap-10'>
          <button
            className='flex items-center gap-1'
            onClick={(e) => {
              e.stopPropagation();
              onEditClick && onEditClick(address);
            }}
          >
            <Edit className='fill-gray-900' /> Edit
          </button>
          <button
            className='flex items-center gap-1'
            onClick={(e) => {
              e.stopPropagation();
              if (onDeleteClick) onDeleteClick(address);
            }}
          >
            <Bin className='fill-gray-900' /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionableShippingAddressCard;
