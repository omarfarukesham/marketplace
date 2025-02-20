import { BASE_URL, IS_PRODUCTION } from './constants';

const services = {
  globalConfigApi: {
    production: '/soldfy-global-configuration/api/marketplace',
    development: ':9092/api/marketplace',
  },
  campaignApi: { production: '/soldfycampaign/api/marketplace', development: ':9095/api/marketplace' },
  cartApi: { production: '/tradeservice/api/marketplace', development: ':9098/api/marketplace' },
  categoryApi: { production: '/soldfy-catalog/api/marketplace', development: ':9091/api/marketplace' },
  customerApi: { production: '/soldfy-customer/api/marketplace', development: ':9096/api/marketplace' },
  orderApi: { production: '/soldfy-order/api/marketplace', development: ':9099/api/marketplace' },
  productApi: { production: '/soldfy-catalog/api/marketplace', development: ':9091/api/marketplace' },
  storeApi: { production: '/soldfy-seller/api/marketplace', development: ':9093/api/marketplace' },
  settingsApi: { production: '/settings/api/marketplace/v1', development: ':9090/api/marketplace/v1' },
  userApi: { production: '/soldfy-user/api/marketplace', development: ':9097/api/marketplace' },
  contentApi: { production: '/contentservice/api', development: ':9094/api' },
};

export const getBaseUrl = (api: keyof typeof services) => {
  const developmentBaseUrl = `${BASE_URL}${services[api].development}`;
  const productionBaseUrl = `${BASE_URL}${services[api].production}`;

  if (!IS_PRODUCTION) {
    return developmentBaseUrl;
  } else {
    return productionBaseUrl;
  }
};
