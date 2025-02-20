const $fetch = async (endpoint: string, options: RequestInit) => {
  // const url = `${getEnv('NEXT_PUBLIC_API_URL')}${endpoint}`; //! FIX: env not working in useEffect!
  const url = `${'http://103.78.54.181:9092/api'}${endpoint}`;

  const res = await fetch(url, options);

  return res;
};

export default $fetch;
