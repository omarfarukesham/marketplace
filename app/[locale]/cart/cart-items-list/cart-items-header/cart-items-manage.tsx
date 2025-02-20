'use client';

import { ActionOptionType, CustomDropdownButtonType } from '@/app/_components/ui/dropdown/dropdown.type';

import DropdownAction from '@/app/_components/ui/dropdown/dropdown-action';
import EditManage from '@/icons/edit-manage';
import { useState } from 'react';
import CartManageModal from './cart-manage-modal';
import CartShareModal from './cart-share-modal';

const manageButton: CustomDropdownButtonType<ActionOptionType> = ({ optionsOpen, setOptionsOpen }) => (
  <button className='flex items-center gap-1 text-label' onClick={() => setOptionsOpen(!optionsOpen)}>
    <EditManage className='fill-gray-900' /> Manage & Share
  </button>
);

const CartItemsManage = ({ isDesktop }: { isDesktop: boolean }) => {
  const [manageModalOpen, setManageModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const CART_MANAGE_OPTIONS: ActionOptionType[] = [
    {
      label: 'Manage Cart',
      value: 'mangeCart',
      action: () => {
        setManageModalOpen(true);
      },
    },
    {
      label: 'Share Cart',
      value: 'shareCart',
      action: () => {
        setShareModalOpen(true);
      },
    },
  ];
  return (
    <div>
      <DropdownAction options={CART_MANAGE_OPTIONS} customButton={manageButton} />
      {manageModalOpen && <CartManageModal setModalOpen={setManageModalOpen} isDesktop={isDesktop} />}
      {shareModalOpen && <CartShareModal setModalOpen={setShareModalOpen} isDesktop={isDesktop} />}
    </div>
  );
};

export default CartItemsManage;
