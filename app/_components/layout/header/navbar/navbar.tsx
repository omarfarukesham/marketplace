import Logo from '@/app/_components/ui/logo';
import getServerContext from '@/app/_lib/get-server-context';
import { getLayoutComponents } from '../../layout.service';
import LanguageSelector from './language-selector';
import LocationSelector from './location-selector';
import Search from './search/search';
import User from './user-options';

const Navbar = async () => {
  const navbarComponents = await getLayoutComponents('Header.Navbar');

  const { locale, marketCode, viewport } = getServerContext();

  return (
    <nav className='flex w-full items-center justify-between gap-4 bg-white md:h-20 md:gap-10 md:px-10'>
      {navbarComponents.Logo && <Logo />}
      {navbarComponents.LocationSelector && viewport.isDesktop && <LocationSelector />}
      {navbarComponents.Search && <Search />}
      <div className='flex items-center gap-6 md:gap-10'>
        {navbarComponents.LanguageSelector && <LanguageSelector locale={locale} marketCode={marketCode} />}
        {navbarComponents.UserOptions && <User />}
      </div>
    </nav>
  );
};

export default Navbar;
