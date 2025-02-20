import { render, screen, waitFor } from '@/test/utilities';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import CheckoutCouponDesktop from './checkout-coupon-desktop';

describe('checkout coupon code', () => {
  const { user } = render(<CheckoutCouponDesktop />);
  const input = screen.getByPlaceholderText(/Enter Coupon Code/i);
  const form = screen.getByRole('form');

  beforeEach(async () => await user.clear(input));

  const VALID_COUPON_CODE = 'valid';
  const INVALID_COUPON_CODE = 'invalid';

  it('should submit with the code', async () => {
    const onSubmitMock = vi.fn();
    form.onsubmit = onSubmitMock;
    await user.type(input, INVALID_COUPON_CODE + '{Enter}');

    expect(onSubmitMock).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ code: expect.objectContaining({ value: INVALID_COUPON_CODE }) }),
      }),
    );
  });

  it('should show error message on invalid code', async () => {
    await user.type(input, INVALID_COUPON_CODE + '{Enter}');
    await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent(/Invalid Coupon Code/i));
  });

  it('should not show error message on valid code', async () => {
    expect.hasAssertions();

    await user.type(input, VALID_COUPON_CODE + '{Enter}');

    try {
      await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument());
      throw Error('showing error on valid code');
    } catch (error) {
      expect((error as Error).message).toMatch(/Unable to find role="alert"/i);
    }
  });
});
