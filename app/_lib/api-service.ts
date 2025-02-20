import '@colors/colors';
import { getBaseUrl } from '../_config/api';
import { DEFAULT_CACHE_TYPE, REQ_HEADER_LAN_CODE, REQ_HEADER_MARKET_CODE, TOKEN_KEY } from '../_config/constants';
import { APIFiltersType, ResponseError } from '../_types/api.type';
import { addContentTypeToHeaders } from './utils';

export class API {
  baseUrl: string;
  public request: {
    interceptor: (req: Request) => Request;
  } = {
    interceptor: (req: Request) => req,
  };

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async fetch(endpoint: string, options: { filters?: APIFiltersType; config?: RequestInit } = {}) {
    const params = API.formatQueries(options.filters);

    const url = this.baseUrl + endpoint + params;

    let req = new Request(url, options.config);

    req = this.request.interceptor(req);

    const res = await fetch(req);

    return { req, res };
  }

  async get(endpoint: string, options: { filters?: APIFiltersType; config?: RequestInit } = {}) {
    const startTime = performance.now();

    const { cache, ...restConfig } = options.config || {};

    const { req, res } = await this.fetch(endpoint, {
      filters: options.filters,
      config: {
        method: 'GET',
        cache: cache || DEFAULT_CACHE_TYPE,
        ...restConfig,
      },
    });

    const duration = performance.now() - startTime;
    this.logServerRequest(endpoint, duration, req, res, options.filters);

    // clear token from local storage if the token in invalid
    if (res.status === 401 && typeof localStorage !== 'undefined') localStorage.removeItem(TOKEN_KEY);

    const resData = await res.json();

    if (!res.ok) throw new ResponseError(resData.message, resData.code, resData.status);

    return resData;
  }

  async post<Body extends Record<string, unknown> | FormData>(
    endpoint: string,
    data: Body,
    options?: {
      filters?: APIFiltersType;
      config?: Omit<RequestInit, 'method' | 'body'> & { responseType?: 'text' | 'json' };
    },
  ) {
    const { headers, responseType = 'json', ...restConfig } = options?.config || {};

    const { res } = await this.fetch(endpoint, {
      filters: options?.filters,
      config: {
        method: 'POST',
        body: data instanceof FormData ? data : JSON.stringify(data),
        headers: addContentTypeToHeaders(headers, data),
        ...restConfig,
      },
    });

    let resData;
    if (responseType === 'text') {
      resData = await res.text();
    } else {
      resData = await res.json();
    }

    if (!res.ok) throw new ResponseError(resData.message, resData.code, resData.status);

    return resData;
  }

  async patch<Body extends Record<string, unknown> | FormData>(
    endpoint: string,
    data: Body,
    options?: { filters?: APIFiltersType; config?: Omit<RequestInit, 'method' | 'body'> },
  ) {
    const { headers, ...restConfig } = options?.config || {};

    const { res } = await this.fetch(endpoint, {
      filters: options?.filters,
      config: {
        method: 'PATCH',
        body: data instanceof FormData ? data : JSON.stringify(data),
        headers: addContentTypeToHeaders(headers, data),
        ...restConfig,
      },
    });

    const resData = await res.json();

    if (!res.ok) throw new ResponseError(resData.message, resData.code, resData.status);

    return resData;
  }

  async delete(
    endpoint: string,
    options?: { filters?: APIFiltersType; config?: Omit<RequestInit, 'method' | 'body'> },
  ) {
    const { res } = await this.fetch(endpoint, {
      filters: options?.filters,
      config: {
        method: 'DELETE',
        ...options?.config,
      },
    });

    const resData = await res.json();

    if (!res.ok) throw new ResponseError(resData.message, resData.code, resData.status);

    return resData;
  }

  static formatQueries(filters?: APIFiltersType): string {
    if (!filters) return '';

    let queries = '?';

    for (const filter in filters) {
      queries += filter + '=' + filters[filter] + '&';
    }

    return queries.slice(0, queries.length - 1);
  }

  logServerRequest(endpoint: string, duration: number, req: Request, res: Response, filters?: APIFiltersType) {
    const isServer = typeof window === 'undefined';
    if (isServer) {
      const formattedFilters = Object.entries(filters || {}).map(([key, value]) => `${key}=${value}`);
      let requestColor: 'red' | 'green';
      if (res.ok) requestColor = 'green';
      else requestColor = 'red';

      let durationColor: 'red' | 'green' | 'yellow';
      if (duration < 50) durationColor = 'green';
      else if (duration < 100) durationColor = 'yellow';
      else durationColor = 'red';

      // eslint-disable-next-line no-console
      console.log(
        `GET`[requestColor].bold +
          ' - ' +
          `${duration.toFixed()}ms`[durationColor].italic +
          ' - ' +
          `${res.status}`[requestColor].bold +
          ' - ' +
          `${endpoint}`.underline +
          ' - ' +
          `${formattedFilters.length ? formattedFilters : 'x'}`.gray +
          ' - ' +
          `${__filename.split(/\\|\//).slice(-3).join('-')}`.italic +
          ' - ' +
          `${req.headers.get(REQ_HEADER_MARKET_CODE)} ${req.headers.get(REQ_HEADER_LAN_CODE)}`.brightCyan +
          ' - ' +
          `${Date.now()}`.gray,
      );
    }
  }
}

export const globalConfigApi = new API(getBaseUrl('globalConfigApi'));
export const campaignApi = new API(getBaseUrl('campaignApi'));
export const cartApi = new API(getBaseUrl('cartApi'));
export const categoryApi = new API(getBaseUrl('categoryApi'));
export const customerApi = new API(getBaseUrl('customerApi'));
export const orderApi = new API(getBaseUrl('orderApi'));
export const productApi = new API(getBaseUrl('productApi'));
export const storeApi = new API(getBaseUrl('storeApi'));
export const settingsApi = new API(getBaseUrl('settingsApi'));
export const userApi = new API(getBaseUrl('userApi'));
export const contentApi = new API(getBaseUrl('contentApi'));
