'use client';

import '@/app/_styles/globals.css'; // TODO: this is temp. CSS breaks in development after manual reload. To solve this, you need to import the CSS in a client component(this is not a fix, just a temporary workaround). Remove this if its fixed by next.js.

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode, useState } from 'react';
import { CartProvider } from './_store/cart/cart.context';
import { UserProvider } from './_store/user/user.context';

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <CartProvider>{children}</CartProvider>
      </UserProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
