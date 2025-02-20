export const ROUTES = {
  home: '/',
  product: (slug: string) => {
    return `/products/${encodeURIComponent(slug)}`;
  },
  search: `/search`,

  category: (slug: string) => `/categories/${encodeURIComponent(slug)}`,

  customizedCategory: (slug: string) => `/customized-categories/${encodeURIComponent(slug)}`,

  bestSellingProducts: (slug: string) => `/best-selling-products/${encodeURIComponent(slug)}`,

  brand: (slug: string) => `/brands/${encodeURIComponent(slug)}`,

  campaigns: '/campaigns',

  campaign: (slug: string) => `/campaigns/${encodeURIComponent(slug)}`,

  stores: '/stores',
  store: (slug: string) => `/stores/${slug}`,
  storeProfile: (id: string) => `/stores/${id}/profile`,
  storeProducts: (slug: string) => `/stores/${slug}/products`,
  storeReviews: (id: string) => `/stores/${id}/reviews`,
  storeCategory: (storeId: string, categoryId: string) => `/stores/${storeId}/categories/${categoryId}`,

  cart: '/cart',
  checkout: '/checkout',
  checkoutSuccess: (requestId: string) => `/checkout/success?order_id=${requestId}`,

  // static pages
  aboutUs: '/about-us',
  becomeASeller: '/seller',
  contactUs: '/contact-us',
  helpCenter: '/help-center',
  privacyPolicy: '/privacy-policy',
  refundPolicy: '/refund-policy',
  returnPolicy: '/return-policy',
  termsConditions: '/terms-conditions',

  sellerRegistration: '/seller/registration',
};
