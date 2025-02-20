import { ImageType, ProductCampaignInfoType } from '@/app/_types/product.type';

export type CartItem = {
  product: {
    id: string;
    slug: string;
    title: string;
    thumbnail: ImageType;
    sellerStoreName: string;
    sellerSlug: string;
    stockCount: number;
    price: string;
    appliedPrice: string;
    discountedAmount: string | undefined;
    hasDiscount: boolean;
    productCampaignInfo?: ProductCampaignInfoType;
    shippingCampaignInfo?: ProductCampaignInfoType;
    isInStock: boolean;
    shouldShowStockWarning: boolean;
    isInsufficientQuantity: boolean;
  };
  quantity: number;
  isSelected: boolean;
};

export type CartState = {
  customerId: string;
  marketCode: string;
  currencyCode: string;
  currencySymbol: string;
  languageCode: string;
  promocode: string;
  couponId: string | null;

  items: CartItem[];

  summary: {
    totalAmount: string;
    totalDiscount: string | undefined;
    netAmount: string; // formated with currency symbol
    _netAmount: number; // raw amount from API
    netAmountWithoutShipping: string;
    totalItem: number;
    totalUniqueItem: number;
    totalSelectedItem: number;
    totalSelectedInStockItem: number;
    totalSelectedStockOutItem: number;
    shippingFee: string;
    shippingFeeDiscount: string | undefined;
    netShippingFee: string; // formated with currency symbol
    _netShippingFee: number; // raw amount from API
    couponCode: string | null;
    couponDiscount: number;
  };

  isLoading: boolean;
  isFetching: boolean;
};

export type DiscountType = 'PERCENTAGE' | 'FIXED';

type CartActionResponse = Promise<{ success: boolean; message: string }>;

export type CartContextType = CartState & {
  addToCart: (productId: string, quantity?: number) => CartActionResponse;
  updateCartItemQuantity: (productId: string, quantity: number) => CartActionResponse;
  updateCartItemSelection: (productId: string, isSelected: boolean) => CartActionResponse;
  removeItemFromCart: (productId: string) => CartActionResponse;
  clearCart: () => void;
  isItemInCart: (productId: string) => boolean;
  isItemSelected: (productId: string) => boolean;
  getQuantity: (productId: string) => number;
  setLoading: (isLoading: boolean) => void;
  refreshCart: () => void;
};

export type CartAction =
  | { type: 'UPDATE_CART'; payload: Omit<CartState, 'isLoading' | 'isFetching'> }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_FETCHING'; payload: boolean };
