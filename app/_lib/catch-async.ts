// using default any because the asyncFunctions prop type will be explicitly defined most of the time, so no need to repeat it here.

import { ResponseError } from '../_types/api.type';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function catchAsync<ResponseType, PropsType = any>(asyncFunction: (props: PropsType) => Promise<ResponseType>) {
  return async function (props: PropsType) {
    try {
      const data: ResponseType = await asyncFunction(props);
      return { data, error: undefined };
    } catch (error) {
      return { data: undefined, error: error as ResponseError };
    }
  };
}

export default catchAsync;
