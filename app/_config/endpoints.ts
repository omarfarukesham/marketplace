export const ENDPOINTS = {
  customizedCategories: '/customize-categories',
  customizedCategory: (slug: string) => `/customize-categories/${slug}`,

  categories: '/categories',
  category: (slug: string) => `/categories/${slug}`,
  categoryFilters: (slug: string) => `/categories/filters?slug=${slug}`,

  products: '/products',
  product: (slug: string) => `/products/${slug}`,
  relevantProducts: (productId: string) => `/relevant-products/${productId}/details`,

  brands: '/brands',
  brand: (slug: string) => `/brands/${slug}`,
  brandCategories: (brandId: string) => `/available-categories?brandId=${brandId}`,

  campaigns: '/campaigns',
  campaign: (slug: string) => `/campaigns/${slug}`,
  campaignCategories: (slug: string) => `/campaigns/${slug}/available-categories`,

  featuredProducts: `/shelves`,
  featuredProduct: (code: string) => `/shelves/${code}/details`,

  bestSellingProductsGroup: `/best-selling-products`,
  bestSellingProducts: (slug: string) => `/best-selling-products/${slug}`,

  featuredCategory: (code: string) => `/shelves/${code}/details`,

  sellers: '/sellers',
  seller: (slug: string) => `/sellers/${slug}`,
  recommendedSellers: '/sellers/recommended-sellers',
  sellerCategories: (sellerId: string) => `/available-categories?sellerId=${sellerId}`,
  sellerRegistration: '/sellers',

  addToCart: '/cart/add',
  updateCart: '/cart/update',
  cart: '/cart/details',
  applyCoupon: '/cart/apply-coupon',
  removeCoupon: '/cart/remove-coupon',

  order: (requestId: string) => `/orders?requestId=${requestId}`,
  checkout: '/cart/checkout',
  orderFinal: (orderId: string) => `/payments/verify-shurjopay-payment?order_id=${orderId}`,

  states: '/states',
  areas: '/areas',
  zones: '/zones',

  addresses: `/customers/shipping-address`,

  authenticate: '/authenticate',
  userInfo: '/user-info',
  sendOtp: '/send',
  verifyOtp: '/verify',
  resetPassword: '/users/reset-password',
  verifyOtpCreateUser: '/verify-create-user',
  checkUser: '/users/check-user',
  registration: '/users/register',

  customer: () => `/customers/65c5b43b568c441919c66782`,
  reviews: (productId: string) => `/review-ratings/${productId}/list`,
  createReview: '/review-ratings',
  isReviewExists: (productId: string) => `/review-ratings/${productId}/is-exist`,

  contentUpload: '/direct-content-upload',
};
