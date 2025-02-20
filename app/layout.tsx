import Footer from '@/app/_components/layout/footer/footer';
import Header from '@/app/_components/layout/header/header';
import { merge } from '@/app/_lib/merge';
import '@/app/_styles/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { attachInterceptors } from './_lib/attach-interceptors';
import getServerContext from './_lib/get-server-context';
import { GTM_Init, GTM_NO_SCRIPT } from './_lib/gtm/init';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'], display: 'swap', adjustFontFallback: false });

export const metadata: Metadata = {
  title: {
    template: '%s | Alipo',
    default: 'Alipo',
  },
  colorScheme: 'only light',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { locale, marketCode } = getServerContext();

  // We need to attach the API interceptors to send market code and language code in the headers
  // This is for server side API requests
  attachInterceptors({ locale, marketCode });
  // The client side API requests are handled in navbar/language-selector.tsx

  return (
    <html lang='en' className='scroll-smooth'>
      <body className={merge(inter.className, 'w-screen max-w-full')}>
        <GTM_Init />

        <Providers>
          <Header />
          {children}
        </Providers>

        <Footer />

        <div id='modal'></div>
        <Toaster
          toastOptions={{
            duration: 2000,
            position: 'top-right',
          }}
        />

        <GTM_NO_SCRIPT />
      </body>
    </html>
  );
}
