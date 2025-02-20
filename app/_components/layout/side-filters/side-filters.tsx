import SideFiltersDesktop from './side-filters-desktop';
import SideFiltersMobile from './side-filters-mobile';

function SideFilters({ isDesktop, children }: { isDesktop: boolean; children: React.ReactNode }) {
  return isDesktop ? (
    <SideFiltersDesktop>{children}</SideFiltersDesktop>
  ) : (
    <SideFiltersMobile>{children}</SideFiltersMobile>
  );
}

export default SideFilters;
