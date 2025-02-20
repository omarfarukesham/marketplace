import { CartItem } from '@/app/_types/cart.type';
import Cookies from 'js-cookie';
import CheckoutProductsGrid from './checkout-products-grid';
import CheckoutProductsScrollable from './items-scrollable';

type ItemsListType = {
  items: CartItem[];
};

const CheckoutProductsList = ({ items }: ItemsListType) => {
  const isDesktop = Cookies.get('viewport') === 'desktop';

  return isDesktop ? <CheckoutProductsGrid items={items} /> : <CheckoutProductsScrollable items={items} />;
};

export default CheckoutProductsList;
