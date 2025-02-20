import { NextRequest, NextResponse, userAgent } from 'next/server';
import { DEFAULT_LOCALE, LOCALES, LocaleType } from './app/_config/locales';
import applySetCookie from './app/_lib/apply-set-cookie';

// Get the locale
const getLocale = async (request: NextRequest) => {
  return request.cookies.get('locale')?.value;
};

const getViewport = (request: NextRequest) => {
  // Parse user agent
  const { device } = userAgent(request);

  // Check the viewport
  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';

  return viewport;
};

const checkLocaleInPathname = (pathname: string) => {
  return LOCALES.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
};

export async function middleware(request: NextRequest) {
  const viewport = getViewport(request);

  const { pathname } = request.nextUrl;

  let response;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = checkLocaleInPathname(pathname);

  if (pathnameHasLocale) {
    response = NextResponse.next();
    response.cookies.set('viewport', viewport);
    applySetCookie(request, response);
    return response;
  }

  // If no locale already in the pathname, then try to get if from cookie/db
  const locale = await getLocale(request);

  if (locale && locale != DEFAULT_LOCALE && LOCALES.includes(locale as LocaleType)) {
    // e.g. incoming request is /products
    // The new URL is now /en/products
    request.nextUrl.pathname = `/${locale}${pathname}`;
    response = NextResponse.redirect(request.nextUrl);
  } else {
    // Setting proxy
    // e.g. serving /en/products in route /products
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = `/${DEFAULT_LOCALE}${pathname}`;
    response = NextResponse.rewrite(newUrl);
  }

  response.cookies.set('viewport', viewport);
  applySetCookie(request, response);
  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // eslint-disable-next-line no-useless-escape
    '/((?!_next)(?!robots\\.txt).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
