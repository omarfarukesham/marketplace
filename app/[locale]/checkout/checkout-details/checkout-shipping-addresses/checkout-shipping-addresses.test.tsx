import { CheckoutProvider } from '@/app/_store/checkout/checkout.context';

import { useUser } from '@/app/_store/user/user.context';
import Providers from '@/app/providers';
import { act, render, renderHook, screen } from '@/test/utilities';
import { describe, expect, it } from 'vitest';
import CheckoutShippingAddresses from './checkout-shipping-addresses';

describe('Checkout Shipping Addresses', () => {
  render(
    <CheckoutProvider>
      <CheckoutShippingAddresses />
    </CheckoutProvider>,
  );

  it('should have a form for guest user', () => {
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it.todo('should show address card for logged in user', async () => {
    const { result: userState } = renderHook(() => useUser(), {
      wrapper: ({ children }) => {
        return <Providers>{children}</Providers>;
      },
    });

    expect(userState.current.isAuthenticated).toBe(false);

    act(() => {
      userState.current.setUser({
        status: 'ACTIVE',
        createdAt: new Date('2024-02-28T10:02:18.025Z'),
        createdBy: 'null',
        updatedAt: new Date('2024-02-28T10:02:18.025Z'),
        updatedBy: '01749505533',
        id: '65df04aa78b66f2a184638c0',
        image: {
          title: 'null',
          url: 'https://alipo-mp.s3.ap-southeast-1.amazonaws.com/images/generic-image/download-zgm19pgkgk1t.jpeg',
          altText: 'null',
          metaDescription: 'null',
          isPrimary: false,
          position: 'null',
        },
        name: 'Iftekhairul',
        description: 'null',
        userId: '65df04aa8172780175dabdab',
        userName: '01749505533',
        email: 'null',
        phone: '01749505533',
        customerGroupId: 'null',
        role: 'user',
        userInfo: 'null',
        shippingAddress: [
          {
            id: '2d55af35-dbee-4965-abc5-34d181ebfe14',
            personName: 'Iftekhairul Islam',
            phone: '+8801234567890',
            email: '',
            countryId: '658543d7fb2613063680f5de',
            countryName: 'Bangladesh',
            stateId: '65854438fb2613063680f5df',
            stateName: 'Dhaka',
            zoneId: '6585446dfb2613063680f5e0',
            zoneName: 'Dhaka North',
            areaId: '654da7cc6d6a365cc60afd05',
            areaName: 'Mohammadpur',
            details: '2/A, Mohammadpur',
            isPrimary: true,
          },
          {
            id: 'f4727d05-7f70-4bf7-9e1c-9d3c1d9d523f',
            personName: 'Shihab Z Hasan Boss',
            phone: '+8801234567890',
            email: '',
            countryId: '658543d7fb2613063680f5de',
            countryName: 'Bangladesh',
            stateId: '65854438fb2613063680f5df',
            stateName: 'Dhaka',
            zoneId: '65584c97eb84a53f5864b09f',
            zoneName: 'Zone 8',
            areaId: '6560399c1befd91f50fed9ac',
            areaName: 'Area 11',
            details: '510 Mirpur',
            isPrimary: false,
          },
          {
            id: '7b9c8d64-a56f-48bf-af61-78bf1ed42f94',
            personName: 'Shihab',
            phone: '+8801747834813',
            email: '',
            countryId: '658543d7fb2613063680f5de',
            countryName: 'Bangladesh',
            stateId: '65854438fb2613063680f5df',
            stateName: 'Dhaka',
            zoneId: '65c5ebb64c223273b3a38e8e',
            zoneName: 'Dhaka North',
            areaId: '65c5ebcb4c223273b3a38e8f',
            areaName: 'Dhanmondi',
            details: 'sewden',
            isPrimary: false,
          },
        ],
      });
    });

    expect(userState.current.isAuthenticated).toBe(true);

    // expect(screen.getByText('Iftekhairul')).toBeDefined();
  });
});
