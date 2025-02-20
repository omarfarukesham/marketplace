'use client';

import Button from '@/app/_components/ui/button';
import { API_SUCCESS } from '@/app/_config/constants';
import { ROUTES } from '@/app/_config/routes';
import dataLayer from '@/app/_lib/gtm/send-data';
import { merge } from '@/app/_lib/merge';
import orderService from '@/app/_services/order/order.service';
import { useCartContext } from '@/app/_store/cart/cart.context';
import { useCheckout } from '@/app/_store/checkout/checkout.context';
import { useUser } from '@/app/_store/user/user.context';
import { CreateOrderData } from '@/app/_types/order.type';
import dynamic from 'next/dynamic';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import OrderStockConfirmationModal from './order-stock-confirmation-modal';

const GuestUserVerifyModal = dynamic(() => import('./guest-user-verify-modal'), { ssr: false });

const SubmitOrder = ({ className }: { className?: string }) => {
  const userState = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [guestUserModalOpen, setGuestUserModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const cart = useCartContext();
  const checkout = useCheckout();

  const createOrder = async (order: CreateOrderData) => {
    const toastId = toast.loading('Creating order...');

    const res = await orderService.create({ data: order });

    if (res.error?.code === 1025 || res.error?.code === 1026) {
      toast.dismiss(toastId);
      setErrorMessage(res.error.message);
      return setConfirmationModal(true);
    }

    if (res.data?.status !== API_SUCCESS) {
      return toast.error(res.error?.message || "Couldn't create the order", { id: toastId });
    }

    toast.success('Order created successfully', { id: toastId });

    const paymentUrl = res.data?.data?.content?.[0]?.paymentUrl;
    const requestId = res.data?.data?.content?.[0]?.requestId;

    dataLayer.purchase({
      currency: cart.currencyCode,
      items: cart.items,
      transaction_id: requestId,
      value: cart.summary?._netAmount,
      coupon: cart.summary?.couponCode,
      shipping: cart.summary?._netShippingFee,
    });

    cart.refreshCart();

    if (paymentUrl) {
      router.push(paymentUrl);
    } else {
      router.push(ROUTES.checkoutSuccess(requestId));
    }
  };

  const handleSubmitOrder = () => {
    if (!cart.summary?.totalSelectedInStockItem) {
      return toast.error('No product selected. Please select some items to proceed.');
    }

    if (!checkout.shippingAddress) {
      checkout.setError({ type: 'SHIPPING', message: 'Please provide shipping address.' });
      return toast.error('Please provide shipping address.');
    }

    if (!checkout.paymentMethod) {
      checkout.setError({ type: 'PAYMENT', message: 'Please select a payment method.' });
      return toast.error('Please select a payment method.');
    }

    // take phone input and verify for guest user
    if (!userState.isAuthenticated) {
      return setGuestUserModalOpen(true);
    }

    createOrder({
      productId: searchParams.get('productId') as string,
      customerId: userState.user!.id,
      userId: userState.user!.userId,
      paymentMethod: checkout.paymentMethod,
      shippingAddress: checkout.shippingAddress,
      billingAddress: checkout.shippingAddress,
    });
  };
  return (
    <>
      <Button
        color='secondary'
        size='lg'
        className={merge('mx-auto w-full items-center justify-center rounded-full', className)}
        onClick={handleSubmitOrder}
      >
        Submit Order
      </Button>

      {guestUserModalOpen && (
        <GuestUserVerifyModal closeModal={() => setGuestUserModalOpen(false)} createOrder={createOrder} />
      )}

      {confirmationModalOpen && (
        <OrderStockConfirmationModal
          message={errorMessage}
          closeModal={() => setConfirmationModal(false)}
          onConfirm={() => {
            cart.refreshCart();
            setConfirmationModal(false);
          }}
        />
      )}
    </>
  );
};

export default SubmitOrder;
