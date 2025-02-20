'use client';

import { stopScroll } from '@/app/_lib/utils';
import { CategoryType } from '@/app/_types/category.type';
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useMemo, useState } from 'react';

const SidebarContext = createContext<{
  isDesktop: boolean;
  isSidebarOpen: boolean;
  isSubCategoryOpen: boolean;
  activeCategory: CategoryType | undefined;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  setActiveCategory: Dispatch<SetStateAction<CategoryType | undefined>>;
  setIsSubCategoryOpen: Dispatch<SetStateAction<boolean>>;
  onCategoryClick: (category: CategoryType) => void;
}>({
  isDesktop: false,
  isSidebarOpen: false,
  toggleSidebar: () => {},
  closeSidebar: () => {},
  activeCategory: undefined,
  setActiveCategory: () => {},
  isSubCategoryOpen: true,
  setIsSubCategoryOpen: () => {},
  onCategoryClick: () => {},
});

const SidebarProvider = ({
  children,
  isDesktop,
  initialCategory,
}: {
  children: ReactNode;
  isDesktop: boolean;
  initialCategory: CategoryType | undefined;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubCategoryOpen, setIsSubCategoryOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const onCategoryClick = (category: CategoryType) => {
    if (!isSubCategoryOpen) {
      setIsSubCategoryOpen(true);
      setActiveCategory(category);
    } else if (activeCategory?.id === category.id) {
      setIsSubCategoryOpen(false);
    } else {
      setActiveCategory(category);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) stopScroll(true);
    else stopScroll(false);
  }, [isSidebarOpen]);

  const value = useMemo(
    () => ({
      isDesktop,
      isSidebarOpen,
      isSubCategoryOpen,
      activeCategory,
      toggleSidebar,
      closeSidebar,
      setActiveCategory,
      setIsSubCategoryOpen,
      onCategoryClick,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isSidebarOpen, isDesktop, activeCategory, isSubCategoryOpen],
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error(`useSidebar must be used within a SidebarProvider`);
  }
  return context;
};

export default SidebarProvider;
