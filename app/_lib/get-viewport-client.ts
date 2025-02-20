import Cookies from 'js-cookie';

export const getViewportClient = () => {
  const viewport = Cookies.get('viewport');

  return {
    viewport,
    isMobile: viewport === 'mobile',
    isDesktop: viewport === 'desktop',
  };
};
