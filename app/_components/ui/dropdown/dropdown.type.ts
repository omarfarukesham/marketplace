import { Dispatch, ReactNode, SetStateAction } from 'react';

export type SortOptionType = {
  label: string;
  slug: string | null;
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE' | '';
  reverse: boolean;
};

export type PathOptionType = { label: string; path: string };

export type ActionOptionType = {
  label: string;
  value: string;
  action?: (item: ActionOptionType) => void;
  content?: (props: {
    item: ActionOptionType;
    setActiveOption: Dispatch<SetStateAction<ActionOptionType | undefined>>;
  }) => ReactNode;
};

// export type DropdownOptionType = SortOptionType | PathOptionType | ActionOptionType;

export type CustomDropdownButtonType<T = ActionOptionType> = ({
  activeOption,
  optionsOpen,
  setOptionsOpen,
}: {
  activeOption: T | undefined;
  optionsOpen: boolean;
  setOptionsOpen: Dispatch<SetStateAction<boolean>>;
}) => ReactNode;

export type DropdownType<T> = {
  options: T[];
  defaultValue?: string;
  onChange?: (option: T) => void;
  customButton?: CustomDropdownButtonType<T>;
  buttonClassName?: string;
  optionsClassName?: string;
  label?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  extraInfo?: string;
  isLoading?: boolean;
};
