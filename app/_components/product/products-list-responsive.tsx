import ProductsGrid from '@/app/_components/product/products-grid';
import ProductsScrollable from '@/app/_components/product/products-scrollable';
import { getViewport } from '@/app/_lib/get-viewport';
import { ProductType } from '@/app/_types/product.type';

type ProductsListResponsiveType = {
  products: ProductType[];
  className?: string;
  grid?: 4 | 5 | 6;
};

const ProductsListResponsive = ({ products, grid, className }: ProductsListResponsiveType) => {
  const { isDesktop } = getViewport();

  return isDesktop ? (
    <ProductsGrid products={products} className={className} grid={grid} />
  ) : (
    <ProductsScrollable products={products} />
  );
};

export default ProductsListResponsive;
