import { ROUTES } from '@/app/_config/routes';

export const FOOTER_COLUMNS = [
  {
    name: 'Customer Services',
    items: [
      { label: 'Help Center', link: ROUTES.helpCenter },
      { label: 'Report Abuse', link: '/' },
      { label: 'Submit a Dispute', link: '/' },
      { label: 'Return Policy', link: '/' },
      { label: 'Policies & Rules', link: '/' },
      { label: 'Privacy & Cookie Agreement', link: ROUTES.privacyPolicy },
      { label: 'Payment Options', link: '/' },
      { label: 'Shipping', link: '/' },
    ],
  },
  {
    name: 'Quick Links',
    items: [
      { label: 'Become a Seller', link: ROUTES.becomeASeller },
      { label: 'Browse by Category', link: '/' },
      { label: 'Top Brands', link: '/' },
      { label: 'Blog', link: '/' },
      { label: 'Alipo Exclusive', link: '/' },
      { label: 'Reward Program', link: '/' },
      { label: 'Careers', link: '/' },
    ],
  },
  {
    name: 'My Account',
    items: [
      { label: 'Product Support', link: '/' },
      { label: 'Checkout', link: '/' },
      { label: 'Shopping', link: '/' },
      { label: 'Cart Wishlist', link: '/' },
      { label: 'Custom Link', link: '/' },
      { label: 'Redeem Voucher', link: '/' },
    ],
  },
];
