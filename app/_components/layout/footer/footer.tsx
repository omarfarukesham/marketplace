import { getViewport } from '@/app/_lib/get-viewport';
import FooterDesktop from './desktop/footer-desktop';
import FooterMobile from './mobile/footer-mobile';

const Footer = () => {
  const { isDesktop } = getViewport();

  return isDesktop ? <FooterDesktop /> : <FooterMobile />;
};

export default Footer;
