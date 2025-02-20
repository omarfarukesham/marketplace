import { merge } from '@/app/_lib/merge';
import { useCartContext } from '@/app/_store/cart/cart.context';
import { CartItem } from '@/app/_types/cart.type';
import Minus from '@/icons/product/minus';
import Plus from '@/icons/product/plus';
import toast from 'react-hot-toast';

const ProductQuantityUpdate = ({ cartItem, inputClassName }: { cartItem: CartItem; inputClassName?: string }) => {
  const cart = useCartContext();

  const decreaseQuantity = async () => {
    const shouldDecrease = cart.getQuantity(cartItem.product.id) > 1;
    if (shouldDecrease) {
      const res = await cart.updateCartItemQuantity(cartItem.product.id, -1);

      if (!res.success) return toast.error(res.message);
      toast.success(res.message);
    }
  };

  const increaseQuantity = async () => {
    const res = await cart.updateCartItemQuantity(cartItem.product.id, 1);

    if (!res.success) return toast.error(res.message);
    toast.success(res.message);
  };

  return (
    <div className='flex h-5 w-fit items-center justify-between rounded-sm border border-gray-300 md:h-auto'>
      <button
        className='flex h-5 w-5 items-center justify-center bg-gray-300 transition-transform hover:bg-gray-500 disabled:scale-100 disabled:bg-gray-100 md:h-auto md:w-6'
        onClick={decreaseQuantity}
        disabled={cart.getQuantity(cartItem.product.id) <= 1}
      >
        <Minus className='w-4' />
      </button>

      <input
        type='number'
        value={cartItem.quantity}
        readOnly
        className={merge('max-w-[30px] text-center text-sm font-medium outline-none md:max-w-[100px]', inputClassName)}
      />

      <button
        className='flex h-5 w-5 items-center justify-center bg-gray-300 transition-transform hover:bg-gray-500 md:h-auto md:w-6'
        onClick={increaseQuantity}
      >
        <Plus className='w-4' />
      </button>
    </div>
  );
};

export default ProductQuantityUpdate;
