import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(_on, _config) {},
  },
  env: {
    Deviceid: '9077beacd164b2e6656091893616da80',
  },
});
