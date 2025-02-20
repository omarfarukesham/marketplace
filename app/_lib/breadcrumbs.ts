import Home from '@/icons/home';
import { CustomizedCategoryType } from '../_types/category.type';
import { ProductType } from '../_types/product.type';

export const getProductPageBreadcrumb = (product: ProductType) => [
  { label: Home, link: '/' },
  ...product.categories.map((category) => ({ label: category.name, link: `/categories/${category.slug}` })),
  { label: product.title },
];

export const getCustomizedCatPageBreadcrumb = (customizedCategory: CustomizedCategoryType) => [
  { label: Home, link: '/' },
  ...customizedCategory.hierarchy.map((category) => ({
    label: category.name,
    link: `/customized-categories/${category.slug}`,
  })),
];

export const getCartPageBreadcrumb = () => [{ label: Home, link: '/' }, { label: 'Cart' }];

export const getCheckoutPageBreadcrumb = () => [
  { label: Home, link: '/' },
  { label: 'Cart', link: '/cart' },
  { label: 'Checkout' },
];
