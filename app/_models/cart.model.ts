import { CartItem, CartState } from '../_types/cart.type';
import imageModel from './image.model';
import { isProductInStock, productCampaignInfoModel, shouldShowStockWarning } from './product.model';

function cartModel(data: any = {}): Omit<CartState, 'isLoading' | 'isFetching'> {
  const { summary, currencySymbol } = data;

  return {
    currencyCode: data.currencyCode,
    currencySymbol: currencySymbol,
    customerId: data.customerId,
    languageCode: data.languageCode,
    marketCode: data.marketCode,
    promocode: data.promocode,
    couponId: data.couponId,
    items: data.items?.map((item: any) => cartItemModel(item, data)),

    summary: {
      totalAmount: summary?.totalAmount ? priceString(summary.totalAmount, currencySymbol) : '0.00',
      totalItem: data.summary?.totalItem || 0,
      totalUniqueItem: data.summary?.totalUniqueItem || 0,
      totalDiscount: summary?.totalDiscount ? priceString(summary.totalDiscount, currencySymbol) : undefined,
      totalSelectedItem: data.summary?.totalSelectedItem || 0,
      totalSelectedInStockItem: data.summary?.totalSelectedInStockItem || 0,
      totalSelectedStockOutItem: data.summary?.totalSelectedStockOutItem || 0,
      netAmount: summary?.netAmount ? priceString(summary.netAmount, currencySymbol) : '0.00',
      _netAmount: summary?.netAmount,
      netAmountWithoutShipping: priceString(summary?.netAmount - summary?.netShippingFee, currencySymbol),
      shippingFee: priceString(summary.shippingFee, currencySymbol),
      shippingFeeDiscount: summary?.shippingFeeDiscount
        ? priceString(summary.shippingFeeDiscount, currencySymbol)
        : undefined,
      netShippingFee: summary?.netShippingFee ? priceString(summary.netShippingFee, currencySymbol) : '0.00',
      _netShippingFee: summary?.netShippingFee,
      couponCode: summary?.couponCode,
      couponDiscount: summary?.couponDiscount,
    },
  };
}

const priceString = (price: number, currencySymbol: string) => {
  return `${currencySymbol}${price.toFixed(2)}`;
};

function cartItemModel(item: any = {}, data: any): CartItem {
  const { product } = item;
  const { currencySymbol } = data;

  return {
    product: {
      id: product?.id,
      slug: product?.slug,
      title: product?.title,
      thumbnail: imageModel(product?.image),
      sellerStoreName: product?.sellerStoreName,
      sellerSlug: product?.sellerSlug,
      stockCount: product?.stockCount,

      price: priceString(product.price, currencySymbol) || '0.00',
      appliedPrice: product?.discount
        ? priceString(product.discountedPrice, currencySymbol)
        : priceString(product?.price, currencySymbol),

      discountedAmount: product?.discount
        ? `${product.discountInfo?.value}${product.discountInfo.type === 'PERCENTAGE' ? '%' : currencySymbol}`
        : undefined,
      hasDiscount: !!product?.discount,

      productCampaignInfo: productCampaignInfoModel(product?.productCampaignInfo),
      shippingCampaignInfo: productCampaignInfoModel(product?.shippingCampaignInfo),

      isInStock: isProductInStock(product),
      shouldShowStockWarning: shouldShowStockWarning(product),
      isInsufficientQuantity: product?.isInsufficientQuantity,
    },
    quantity: item.quantity,
    isSelected: item.isSelected,
  };
}

export default cartModel;
