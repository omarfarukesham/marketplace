import '@/app/_styles/globals.css';
import type { Metadata } from 'next';

import { HomeComponentsProvider } from './home.context';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <HomeComponentsProvider>{children}</HomeComponentsProvider>;
}
