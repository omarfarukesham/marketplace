import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { ReactElement } from 'react';
import Providers from '../app/providers';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <Providers>{children}</Providers>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  return { ...render(ui, { wrapper: AllTheProviders, ...options }), user: userEvent.setup() };
};

export * from '@testing-library/react';
export { customRender as render };
