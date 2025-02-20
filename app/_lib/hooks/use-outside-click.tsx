import { useEffect, useRef } from 'react';

const useOutsideClick = (onOutsideClick: () => void, extraElement?: Node | null) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        (!extraElement || !extraElement.contains(event.target as Node)) &&
        !ref.current.contains(event.target as Node)
      ) {
        onOutsideClick();
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [extraElement, onOutsideClick]);

  return ref;
};

export default useOutsideClick;
