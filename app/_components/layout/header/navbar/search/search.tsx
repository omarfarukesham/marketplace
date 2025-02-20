import { getViewport } from '@/app/_lib/get-viewport';
import SearchDesktop from './search-desktop';
import SearchMobile from './search-mobile';

const Search = () => {
  const { isDesktop } = getViewport();

  return isDesktop ? <SearchDesktop /> : <SearchMobile />;
};

export default Search;
