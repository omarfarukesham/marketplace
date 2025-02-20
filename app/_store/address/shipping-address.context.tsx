/* eslint-disable react-hooks/exhaustive-deps */
import { API_SUCCESS, SELECTED_SHIPPING_ID_KEY } from '@/app/_config/constants';
import { ENDPOINTS } from '@/app/_config/endpoints';
import customerService from '@/app/_services/customer/customer.service';
import { useAddresses } from '@/app/_services/customer/use-customer';
import { useCheckout } from '@/app/_store/checkout/checkout.context';
import { _ShippingAddressType } from '@/app/_types/order.type';
import { useQueryClient } from '@tanstack/react-query';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import toast from 'react-hot-toast';
import { useCartContext } from '../cart/cart.context';

export const ShippingAddressContext = createContext<{
  activeStepIndex: number;
  setActiveStepIndex: Dispatch<SetStateAction<number>>;
  activeAddress: _ShippingAddressType | undefined;
  setActiveAddress: (selectedAddress: _ShippingAddressType) => void;
  addressToEdit: _ShippingAddressType | null;
  setAddressToEdit: Dispatch<SetStateAction<_ShippingAddressType | null>>;
  shippingAddresses: _ShippingAddressType[] | undefined;
  deleteAddress: (addressId: string) => Promise<void>;
  changeDefaultAddress: (address: _ShippingAddressType) => Promise<void>;
  editAddress: (updatedAddress: _ShippingAddressType) => Promise<void>;
  createAddress: (newAddress: _ShippingAddressType) => Promise<void>;
} | null>(null);

// TODO: refactor this for maintainability
const ShippingAddressProvider = ({ children }: { children: ReactNode }) => {
  const { data: shippingAddresses } = useAddresses({}); // Already fetched and cached in `CheckoutShipping` component
  const { setShippingAddress: setCheckoutShipping } = useCheckout();
  const { refreshCart } = useCartContext();

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeAddress, setActiveAddress] = useState<_ShippingAddressType | undefined>(undefined);
  const [addressToEdit, setAddressToEdit] = useState<_ShippingAddressType | null>(null);

  const queryClient = useQueryClient();

  const updateActiveAddress = (selectedAddress: _ShippingAddressType) => {
    setActiveAddress(selectedAddress);
    customerService.setAddressInLocalStorage({ addressId: selectedAddress.id });
    refreshCart();
  };

  useEffect(() => {
    // show the active address in checkout's selected shipping address
    if (activeAddress) {
      setCheckoutShipping(activeAddress);
    }
  }, [activeAddress]);

  useEffect(() => {
    const previousSelectedAddressId = localStorage.getItem(SELECTED_SHIPPING_ID_KEY);
    const previousSelectedAddress = shippingAddresses?.find((address) => address.id === previousSelectedAddressId);

    // after the page loads, if there is a previously selected address in local storage, then set it as active
    // else set the default as active
    if (previousSelectedAddress) {
      updateActiveAddress(previousSelectedAddress);
    } else if (shippingAddresses?.length) {
      updateActiveAddress(shippingAddresses.find((address) => address.isPrimary)!);
    }
  }, [shippingAddresses]);

  const deleteAddress = useCallback(
    async (addressId: string) => {
      const res = await customerService.deleteAddress(addressId);
      if (res.data?.status !== API_SUCCESS) {
        toast.error(res.error?.message || 'Failed to delete the address');
        return;
      }

      toast.success('Successfully deleted the address');

      // if the selected address is deleted, then set the default as active
      if (activeAddress?.id === addressId)
        updateActiveAddress(shippingAddresses!.find((address) => address.isPrimary)!);

      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.addresses] });
    },
    [activeAddress?.id, shippingAddresses],
  );

  const editAddress = useCallback(async (updatedAddress: _ShippingAddressType) => {
    const res = await customerService.updateAddress(updatedAddress);

    if (res.data?.status !== API_SUCCESS) {
      toast.error(res.error?.message || 'Failed to create the address');
      return;
    }

    toast.success('Successfully updated the address');

    setActiveStepIndex(0);
    updateActiveAddress(updatedAddress);

    queryClient.invalidateQueries({ queryKey: [ENDPOINTS.addresses] });
  }, []);

  const changeDefaultAddress = useCallback(
    async (address: _ShippingAddressType) => editAddress({ ...address, isPrimary: true }),
    [editAddress],
  );

  const createAddress = useCallback(async (newAddress: _ShippingAddressType) => {
    const res = await customerService.createAddress(newAddress);

    if (res.data?.status !== API_SUCCESS) {
      toast.error(res.error?.message || 'Failed to create the address');
      return;
    }

    toast.success('Successfully created the address');

    setActiveStepIndex(0);
    updateActiveAddress(res.data?.data?.content?.[0]);

    queryClient.invalidateQueries({ queryKey: [ENDPOINTS.addresses] });
  }, []);

  //TODO: need to separate active address and address to edit for reducing re-render
  const value = useMemo(
    () => ({
      activeAddress,
      activeStepIndex,
      setActiveAddress: updateActiveAddress,
      setActiveStepIndex,
      addressToEdit,
      setAddressToEdit,
      shippingAddresses,
      deleteAddress,
      changeDefaultAddress,
      editAddress,
      createAddress,
    }),
    [
      activeAddress,
      activeStepIndex,
      addressToEdit,
      changeDefaultAddress,
      createAddress,
      deleteAddress,
      editAddress,
      shippingAddresses,
    ],
  );

  return <ShippingAddressContext.Provider value={value}>{children}</ShippingAddressContext.Provider>;
};

export const useShippingAddress = () => {
  const context = useContext(ShippingAddressContext);
  if (context === undefined) {
    throw new Error(`useShippingAddress must be used within a ShippingAddressContext`);
  }
  return context!;
};

export default ShippingAddressProvider;
