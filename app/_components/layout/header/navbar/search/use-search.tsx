import { ROUTES } from '@/app/_config/routes';
import dataLayer from '@/app/_lib/gtm/send-data';
import useDebounce from '@/app/_lib/hooks/use-debounce';
import useOutsideClick from '@/app/_lib/hooks/use-outside-click';
import { useProducts } from '@/app/_services/product/use-product';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

const useSearch = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showResult, setShowResult] = useState(false);

  const {
    data: products,
    isLoading,
    isFetched,
  } = useProducts({
    filters: { titleEn: debouncedQuery.trim() },
    queryConfig: { enabled: !!debouncedQuery },
  });

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const openResult = useCallback(() => setShowResult(true), []);
  const closeResult = useCallback(() => setShowResult(false), []);

  const selectNextProduct = useCallback(
    () => setSelectedIndex((prevIndex) => Math.min(prevIndex + 1, (products?.items?.length || 0) - 1)),
    [products],
  );
  const selectPrevProduct = useCallback(() => setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0)), []);
  const resetProductSelect = useCallback(() => setSelectedIndex(-1), []);

  useEffect(() => {
    if (products?.items.length) openResult();
  }, [openResult, products]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        openResult();
        inputRef.current?.focus();
      } else if (e.key === 'Escape') {
        if (selectedIndex !== -1) {
          resetProductSelect();
        } else {
          closeResult();
          inputRef.current?.blur();
        }
      } else if (e.key === 'Enter' && selectedIndex !== -1) {
        e.preventDefault();
        const selectedProduct = products?.items[selectedIndex];
        if (selectedProduct) {
          router.push(ROUTES.product(selectedProduct.slug));
          closeResult();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeResult, openResult, products?.items, resetProductSelect, router, selectedIndex]);

  const handleSubmit = () => {
    if (query.length) {
      router.push(`${ROUTES.search}?q=${query.trim()}`);
      dataLayer.search({ search_term: query.trim() });
      closeResult();
    }
  };

  const ref = useOutsideClick(closeResult);

  return {
    query,
    setQuery,
    products,
    isLoading,
    isFetched,
    showResult,
    closeResult,
    openResult,
    handleSubmit,
    selectedIndex,
    selectNextProduct,
    selectPrevProduct,
    resetProductSelect,
    ref,
    inputRef,
  };
};

export default useSearch;
