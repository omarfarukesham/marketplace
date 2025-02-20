import useOutsideClick from '@/app/_lib/hooks/use-outside-click';
import { Dispatch, ReactNode, Ref, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { DropdownType } from './dropdown.type';

type DropdownContextType<T> = {
  optionsOpen: boolean;
  activeOption: T | undefined;
  setOptionsOpen: Dispatch<SetStateAction<boolean>>;
  setActiveOption: Dispatch<SetStateAction<T | undefined>>;

  ref: Ref<HTMLDivElement>;
} & DropdownType<T>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DropdownContext = createContext<DropdownContextType<any>>({} as DropdownContextType<any>);

export const DropdownProvider = <T extends Record<string, unknown>>({
  children,
  ...rest
}: { children: ReactNode } & DropdownType<T>) => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const ref = useOutsideClick(() => setOptionsOpen(false));

  const defaultOption = rest.options.find((option) => {
    if ('value' in option) {
      return option.value === rest.defaultValue;
    } else if ('slug' in option) {
      return option.slug === rest.defaultValue;
    } else if ('path' in option) {
      return option.path === rest.defaultValue;
    }
  });

  const [activeOption, setActiveOption] = useState<T | undefined>(defaultOption);

  useEffect(() => setActiveOption(defaultOption), [defaultOption]);

  const value = { optionsOpen, setOptionsOpen, activeOption, setActiveOption, ref, ...rest };

  return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>;
};

export const useDropdownContext = <T,>() => {
  return useContext(DropdownContext) as DropdownContextType<T>;
};
