import ProductCardQuantity from '@/app/_components/product/product-card-quantity';
import { CartItem } from '@/app/_types/cart.type';

const CheckoutProductsGrid = ({ items }: { items: CartItem[] }) => {
  return (
    <div className='grid grid-cols-2 gap-8 border-b border-gray-300 py-7 md:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-6'>
      {items.map((item) => (
        <ProductCardQuantity cartItem={item} key={item.product.id} />
      ))}
    </div>
  );
};

export default CheckoutProductsGrid;
