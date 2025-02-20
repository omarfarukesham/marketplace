import '@/app/_styles/globals.css';
import { CheckoutProvider } from '../../_store/checkout/checkout.context';

export const metadata = {
  title: 'Checkout',
  description: 'Checkout your products',
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return <CheckoutProvider>{children}</CheckoutProvider>;
}
