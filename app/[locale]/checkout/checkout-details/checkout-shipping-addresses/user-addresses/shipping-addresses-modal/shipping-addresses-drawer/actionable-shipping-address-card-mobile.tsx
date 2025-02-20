'use client';

import { _ShippingAddressType } from '@/app/_types/order.type';
import Tick from '@/icons/tick';

const ActionableShippingAddressCardMobile = ({
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
    <div className='border-t border-gray-400'>
      <div
        className='relative grid gap-2 px-4 py-5'
        role='button'
        tabIndex={0}
        onKeyDown={() => {}} // add later
        onClick={() => {
          onClick && onClick(address);
        }}
      >
        <p>
          <span className='font-bold'>{address.personName}</span> {address.phone}
        </p>
        <p>{address.details}</p>
        <p>
          {address.stateName}, {address.countryName}
        </p>

        {active && (
          <span className='absolute right-5 top-1/2 -translate-y-1/2'>
            <Tick className='fill-accent-4' />
          </span>
        )}
      </div>

      <div className='flex items-center justify-between border-t border-dashed border-gray-400 px-4 pt-4 text-sm font-medium text-gray-700'>
        <div className='flex items-center gap-1'>
          <input
            type='radio'
            name='isPrimary'
            value={address.id}
            id={address.id}
            checked={address.isPrimary}
            onChange={(e) => {
              if (e.target.checked) {
                onDefaultChange && onDefaultChange(address);
              }
            }}
          />
          <label htmlFor={address.id}>Default</label>
        </div>

        <div className='flex items-center gap-2'>
          <button className='flex items-center gap-1' onClick={() => onDeleteClick && onDeleteClick(address)}>
            Delete
          </button>

          {/* <hr className='h-4 w-[1px] bg-gray-700' />

          <button className='flex items-center gap-1' onClick={() => toast.success('Copied!')}>
            Copy
          </button> */}

          <hr className='h-4 w-[1px] bg-gray-700' />

          <button
            className='flex items-center gap-1'
            onClick={(e) => {
              e.stopPropagation();
              onEditClick && onEditClick(address);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionableShippingAddressCardMobile;
