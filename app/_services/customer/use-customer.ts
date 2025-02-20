import { ENDPOINTS } from '@/app/_config/endpoints';
import { QueryConfig } from '@/app/_types/api.type';
import { _ShippingAddressType } from '@/app/_types/order.type';
import { CustomerType } from '@/app/_types/user.type';
import { useQuery } from '@tanstack/react-query';
import customerService from './customer.service';

export const useCustomer = ({ queryOptions }: { queryOptions?: QueryConfig<CustomerType> }) => {
  return useQuery<CustomerType>({
    queryKey: [ENDPOINTS.customer()],
    queryFn: () => customerService.fetch(),
    ...queryOptions,
  });
};

export const useAddresses = ({ queryOptions }: { queryOptions?: QueryConfig<_ShippingAddressType[]> }) => {
  return useQuery<_ShippingAddressType[]>({
    queryKey: [ENDPOINTS.addresses],
    queryFn: () => customerService.fetchAddresses(),
    ...queryOptions,
  });
};
