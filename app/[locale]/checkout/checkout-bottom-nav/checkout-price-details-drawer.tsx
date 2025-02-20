import Drawer from '@/app/_components/ui/drawer';
import CheckoutPriceCalculation from '../checkout-order-summary/checkout-price-calculation';

type CheckoutPriceDetailsDrawerType = {
  onClose: () => void;
};

const CheckoutPriceDetailsDrawer = ({ onClose }: CheckoutPriceDetailsDrawerType) => {
  return (
    <Drawer
      title='Price Details'
      onClose={onClose}
      className='thin-scrollbar flex flex-col overflow-y-auto px-3 pb-3'
      overlayClassName='!-top-[4.7rem]'
    >
      <CheckoutPriceCalculation />
    </Drawer>
  );
};

export default CheckoutPriceDetailsDrawer;
