import { RefObject, useEffect, useState } from 'react';

type IntersectionObserverOptions = IntersectionObserverInit;

const useIntersection = <T extends HTMLElement>(
  ref: RefObject<T>,
  options: IntersectionObserverOptions = {},
): IntersectionObserverEntry => {
  const [intersectionObserverEntry, setIntersectionObserverEntry] = useState<IntersectionObserverEntry>(
    {} as IntersectionObserverEntry,
  );

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === 'function') {
      const observer = new IntersectionObserver((entries) => {
        setIntersectionObserverEntry(entries[0]);
      }, options);

      observer.observe(ref.current);
      return () => {
        // setIntersectionObserverEntry(null);
        observer.disconnect();
      };
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.threshold, options.root, options.rootMargin]);

  return intersectionObserverEntry;
};

export default useIntersection;
