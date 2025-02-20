import '@testing-library/jest-dom/vitest';
import { afterAll, afterEach, beforeAll } from 'vitest';
import { server } from './mocks/node';

// ENVs
process.env.NEXT_PUBLIC_API_BASE_URL = 'http://103.78.54.181';
process.env.NEXT_PUBLIC_CUSTOMER_PANEL_BASE_URL = 'http://103.78.54.180:3002';
process.env.NEXT_PUBLIC_ENV = 'development';

// setup mock server for all tests
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
