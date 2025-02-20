'use client';

import { merge } from '@/app/_lib/merge';
import ArrowDown from '@/icons/arrows/arrow-down';
import Info from '@/icons/info';
import LoadingSpinner from '../loading-spinner';
import { DropdownProvider, useDropdownContext } from './dropdown.context';
import { ActionOptionType, DropdownType } from './dropdown.type';

export type DropdownActionType = DropdownType<ActionOptionType>;

const DropdownAction = (props: DropdownActionType) => {
  return (
    <DropdownProvider<ActionOptionType> {...props}>
      <DropdownRoot />
    </DropdownProvider>
  );
};

const DropdownRoot = () => {
  const { optionsOpen, ref, ...rest } = useDropdownContext();

  return (
    <div className={merge('relative grid gap-2', rest.className)} ref={ref}>
      {rest.label && <DropdownLabel />}

      <Button />

      {!rest.error && rest.extraInfo && (
        <small className='flex items-center gap-0.5'>
          <Info className='h-3 w-3' /> {rest.extraInfo}
        </small>
      )}

      {rest.error && <p className='animate-fade-in text-sm text-danger'>{rest.error}</p>}

      {optionsOpen && <ActionOptions />}
    </div>
  );
};

const DropdownLabel = () => {
  const { label, required } = useDropdownContext();

  return (
    <label className='text-label font-medium'>
      {label}
      {required && <span className='text-danger'> *</span>}
    </label>
  );
};

const Button = () => {
  const { optionsOpen, setOptionsOpen, activeOption, customButton, ...rest } = useDropdownContext<ActionOptionType>();

  if (customButton) {
    return customButton({ optionsOpen, setOptionsOpen, activeOption });
  }

  return (
    <button
      type='button'
      onClick={() => {
        setOptionsOpen(!optionsOpen);
      }}
      className={merge(
        'flex w-full items-center justify-between rounded-md border px-4 py-2',
        rest.disabled && '!bg-gray-200',
        rest.error ? 'border-danger outline-danger' : 'border-gray-600',
        rest.buttonClassName,
      )}
      disabled={rest.disabled}
    >
      {rest.isLoading && <LoadingSpinner className='h-3 w-3' />}
      <input
        readOnly
        placeholder={rest.placeholder || 'Select an option'}
        className={merge(
          'w-fit max-w-[80%] outline-none placeholder:text-gray-900',
          rest.disabled && 'bg-gray-200 text-gray-600',
        )}
        value={activeOption?.label || ''}
      />
      <ArrowDown className={merge('fill-gray-600 transition-transform', optionsOpen && 'rotate-180')} />
    </button>
  );
};

const ActionOptions = () => {
  const { optionsOpen, options, setOptionsOpen, ...rest } = useDropdownContext<ActionOptionType>();

  if (!options?.length) return;
  return (
    <div
      className={merge(
        'thin-scrollbar absolute z-10 max-h-60 w-full overflow-y-auto whitespace-nowrap rounded-md bg-white p-4 shadow',
        rest.error ? 'top-[80%]' : 'top-full',
        rest.optionsClassName,
      )}
      onClick={() => setOptionsOpen(!optionsOpen)}
      role='listbox'
      tabIndex={0}
      onKeyDown={() => {}} // implement later
    >
      {options.map((item, i) =>
        item.content ? (
          <item.content key={i} item={item} setActiveOption={rest.setActiveOption} />
        ) : (
          <ActionOption key={i} item={item} />
        ),
      )}
    </div>
  );
};

function ActionOption({ item }: { item: ActionOptionType }) {
  const { activeOption, setActiveOption, onChange } = useDropdownContext<ActionOptionType>();

  const isActive = activeOption && activeOption.value === item.value;

  return (
    <li className='mt-2 flex text-sm' key={item.label}>
      <button
        className={merge('w-full text-left hover:underline hover:underline-offset-4', {
          'underline underline-offset-4': isActive,
        })}
        onClick={() => {
          setActiveOption(item);
          if (item.action) item.action(item);
          if (onChange) onChange(item);
        }}
      >
        {item.label}
      </button>
    </li>
  );
}

export default DropdownAction;
