import { PAYMENT_METHODS } from '@/app/_config/constants';
import { CheckoutProvider } from '@/app/_store/checkout/checkout.context';

import { render, screen } from '@/test/utilities';
import { describe, expect, it } from 'vitest';
import PaymentMethods from './payment-methods';

describe('Payment Methods', () => {
  const onlinePayment = PAYMENT_METHODS[0].title;
  const cod = PAYMENT_METHODS[1].title;

  render(
    <CheckoutProvider>
      <PaymentMethods />
    </CheckoutProvider>,
  );

  it('should contain online payment', () => {
    expect(screen.getByRole('radio', { name: onlinePayment })).toBeInTheDocument();
  });

  it('should contain cash on delivery', () => {
    expect(screen.getByRole('radio', { name: cod })).toBeInTheDocument();
  });
});
