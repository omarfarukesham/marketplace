import CheckoutProductsDetails from './checkout-products-details/checkout-products-details';
import CheckoutShippingAddresses from './checkout-shipping-addresses/checkout-shipping-addresses';
import ShippingMethods from './shipping-methods/shipping-methods';

const CheckoutDetails = () => {
  return (
    <section className='w-full md:w-3/5'>
      <CheckoutShippingAddresses />

      <CheckoutProductsDetails />

      <ShippingMethods />
    </section>
  );
};

export default CheckoutDetails;
