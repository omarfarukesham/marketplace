import { getComponents } from '@/app/_lib/get-components';
import { NestedProps } from '@/app/_types/utility.type';

const layoutComponents = {
  Header: {
    TopBar: {
      BecomeASellerButton: true,
      HelpButton: true,
      GetTheAppButton: true,
    },
    Navbar: {
      Logo: true,
      LocationSelector: true,
      Search: true,
      LanguageSelector: true,
      UserOptions: {
        User: true,
        Cart: true,
      },
    },
    CategoryBar: {
      AllCategories: false,
      Categories: true,
    },
  },

  Footer: true,
};

export type LayoutComponentsType = typeof layoutComponents;

export const getLayoutComponents = <T extends NestedProps<LayoutComponentsType> | undefined = undefined>(props?: T) =>
  getComponents(layoutComponents, props);
