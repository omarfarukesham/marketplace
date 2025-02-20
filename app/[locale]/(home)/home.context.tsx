'use client';

import React, { ReactNode } from 'react';
import { HomeComponentsType, getHomeComponents as getAllHomeComponents } from './home.service';

export const HomeComponentsContext = React.createContext<{
  homeComponents: HomeComponentsType | Record<string, never>;
}>({
  homeComponents: {},
});

HomeComponentsContext.displayName = 'HomeComponentsContext';

export const HomeComponentsProvider = (props: { children: ReactNode }) => {
  const [homeComponents, setHomeComponents] = React.useState<HomeComponentsType | Record<string, never>>({});
  React.useEffect(() => {
    (async () => {
      const homeComponents = await getAllHomeComponents();

      setHomeComponents(homeComponents);
    })();
  }, []);

  const value = React.useMemo(() => ({ homeComponents, setHomeComponents }), [homeComponents]);

  return <HomeComponentsContext.Provider value={value} {...props} />;
};

export const useHomeComponents = () => {
  const context = React.useContext(HomeComponentsContext);
  if (context === undefined) {
    throw new Error(`useHome must be used within a HomeProvider`);
  }
  return context;
};
