import {
  SELECTED_SHIPPING_COUNTRY_KEY,
  SELECTED_SHIPPING_ID_KEY,
  SELECTED_SHIPPING_STATE_KEY,
} from '@/app/_config/constants';
import { ENDPOINTS } from '@/app/_config/endpoints';
import { customerApi } from '@/app/_lib/api-service';
import catchAsync from '@/app/_lib/catch-async';
import customerModel, { customerAddressModel } from '@/app/_models/customer.model';
import { CategoryType } from '@/app/_types/category.type';
import { _ShippingAddressType } from '@/app/_types/order.type';

export class CustomerService {
  fetch = async () => {
    const res = await customerApi.get(ENDPOINTS.customer(), { config: { cache: 'no-store' } });
    return customerModel(res.data?.content?.[0]);
  };

  fetchAddresses = async () => {
    const data = await customerApi.get(ENDPOINTS.addresses, { config: { cache: 'no-store' } });
    return data?.data?.content?.map((address: _ShippingAddressType) => customerAddressModel(address)) || [];
  };

  getAddresses = catchAsync<CategoryType, { slug: string }>(this.fetchAddresses);

  createAddress = catchAsync(async (address: _ShippingAddressType) => {
    const data = await customerApi.post(ENDPOINTS.addresses, address);
    return data;
  });

  updateAddress = catchAsync(async (address: _ShippingAddressType) => {
    const data = await customerApi.patch(ENDPOINTS.addresses, address);
    return data;
  });

  deleteAddress = catchAsync(async (addressId: string) => {
    const data = await customerApi.delete(ENDPOINTS.addresses, { filters: { addressId } });
    return data;
  });

  setAddressInLocalStorage = (addressData: { addressId: string } | { countryName: string; stateName: string }) => {
    if (typeof window !== 'undefined') {
      if ('addressId' in addressData) {
        localStorage.setItem(SELECTED_SHIPPING_ID_KEY, addressData.addressId);
      } else {
        const { countryName, stateName } = addressData;
        localStorage.setItem(SELECTED_SHIPPING_COUNTRY_KEY, countryName);
        localStorage.setItem(SELECTED_SHIPPING_STATE_KEY, stateName);
      }
    }
  };

  getAddressFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      const id = localStorage.getItem(SELECTED_SHIPPING_ID_KEY);
      const countryName = localStorage.getItem(SELECTED_SHIPPING_COUNTRY_KEY);
      const stateName = localStorage.getItem(SELECTED_SHIPPING_STATE_KEY);

      return {
        [SELECTED_SHIPPING_ID_KEY]: id,
        [SELECTED_SHIPPING_COUNTRY_KEY]: countryName,
        [SELECTED_SHIPPING_STATE_KEY]: stateName,
      };
    } else {
      return null;
    }
  };
}

const customerService = new CustomerService();
export default customerService;
