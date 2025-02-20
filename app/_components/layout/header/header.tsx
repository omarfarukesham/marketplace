import { getViewport } from '@/app/_lib/get-viewport';
import { getLayoutComponents } from '../layout.service';
import CategoryBar from './category-bar/category-bar';
import Navbar from './navbar/navbar';
import TopBar from './top-bar/top-bar';

const Header = async () => {
  const headerComponents = await getLayoutComponents('Header');
  const { isDesktop } = getViewport();

  return (
    <header className='grid gap-3 px-2.5 py-3 md:gap-0 md:p-0'>
      {headerComponents.TopBar && isDesktop && <TopBar />}
      {headerComponents.Navbar && <Navbar />}
      {headerComponents.CategoryBar && <CategoryBar />}
    </header>
  );
};

export default Header;
