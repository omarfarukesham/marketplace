import { UseQueryOptions } from '@tanstack/react-query';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type APIResponse = any;

export type APIFiltersType = Record<string, string | number | boolean>;

export type APIOptionsType = { disabled: boolean };

export type QueryConfig<T> = Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'>;

export type PaginateType = {
  perPage: number;
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;
  currentPage: number;
};

export type PaginatedResponseType<T> = {
  items: T;
  paginate: PaginateType;
};

// export type ResponseError = {
//   message: string;
//   code: number;
//   status: 'SUCCESS' | 'FAIL';
// };

export class ResponseError extends Error {
  code: number | undefined;
  status: string | undefined;
  constructor(message: string, code?: number, status?: string) {
    super(message);
    this.code = code;
    this.status = status;
  }
}

export type ApiSuccessResponseType = {
  code: number;
  status: 'SUCCESS' | 'FAIL';
  message: string;
};
