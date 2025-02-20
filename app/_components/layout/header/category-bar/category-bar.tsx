import SidebarProvider from '@/app/_components/layout/sidebar/sidebar.context';
import { getViewport } from '@/app/_lib/get-viewport';
import { merge } from '@/app/_lib/merge';
import customizedCategoryService from '@/app/_services/customized-category/customized-categories.service';
import Sidebar from '../../sidebar/sidebar';
import { featuredCategory } from '../../sidebar/sidebar-desktop';
import CategoryBarItems from './category-bar-items';
import SidebarRoot from './sidebar-root';

const CategoryBar = async () => {
  const { data: customizedCategories } = await customizedCategoryService.getAll({
    filters: { isFeatured: true, status: 'ACTIVE' },
  });

  const { isDesktop } = getViewport();

  return (
    <div
      className={merge(
        'relative bg-white text-label md:bg-secondary-900 md:px-10 md:text-lg',
        'flex items-center justify-between gap-2.5',
        'whitespace-nowrap',
        'overflow-x-hidden md:h-16',
      )}
    >
      <SidebarProvider isDesktop={isDesktop} initialCategory={featuredCategory}>
        <SidebarRoot>
          <Sidebar />
        </SidebarRoot>
      </SidebarProvider>

      {customizedCategories?.items && (
        <CategoryBarItems categories={customizedCategories.items} isDesktop={isDesktop} />
      )}
    </div>
  );
};

export default CategoryBar;
