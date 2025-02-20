import Modal from '@/app/_components/ui/modal';

type OrderStockConfirmationModalType = {
  closeModal: () => void;
  onConfirm: () => void;
  message: string;
};

const OrderStockConfirmationModal = ({ closeModal, message, onConfirm }: OrderStockConfirmationModalType) => {
  return (
    <Modal
      onClose={closeModal}
      title='Stock Alert'
      className='pb-8 md:p-8'
      size={{ custom: 'w-11/12 max-h-[60%] md:w-1/3' }}
      showCross={false}
    >
      <p>{message}</p>
      <div className='mt-5 flex items-center justify-center gap-5'>
        <button
          className='rounded-lg bg-secondary-900 px-10 py-3 transition-colors hover:bg-primary-900 hover:text-white'
          onClick={onConfirm}
        >
          OK
        </button>
      </div>
    </Modal>
  );
};

export default OrderStockConfirmationModal;
