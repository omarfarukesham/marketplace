import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type ReturnType = [string, Dispatch<SetStateAction<string>>];

const useQueryState = (key: string, defaultValue: string): ReturnType => {
  const [value, setValue] = useState<string>(defaultValue);
  const router = useRouter();

  useEffect(() => {
    const url = new URL(window.location.href);
    const query = url.searchParams.get(key);
    if (query) {
      setValue(query);
    }
  }, [key]);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    router.push(url.toString(), { scroll: false });
  }, [key, router, value]);

  return [value, setValue];
};

export default useQueryState;
