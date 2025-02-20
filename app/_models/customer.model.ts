import { _ShippingAddressType } from '../_types/order.type';
import { CustomerType } from '../_types/user.type';

function customerModel(data: any): CustomerType {
  return {
    id: data.id,
    email: data.email,
    name: data.name,
    userId: data.userId,
    userName: data.userName,
    phone: data.phone,
    image: data.image,
    status: data.status,
    role: data.role,
    description: data.description,
    customerGroupId: data.customerGroupId,
    userInfo: data.userInfo,
    shippingAddress: data.shippingAddress?.map((address: any) => customerAddressModel(address)),
    billingAddress: data.billingAddress?.map((address: any) => customerAddressModel(address)),
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    createdBy: data.createdBy,
    updatedBy: data.updatedBy,
  };
}

export function customerAddressModel(data: any): _ShippingAddressType {
  return {
    id: data.id,
    personName: data.personName,
    details: data.details,
    stateId: data.stateId,
    stateName: data.stateName,
    countryId: data.countryId,
    countryName: data.countryName,
    areaId: data.areaId,
    areaName: data.areaName,
    zoneId: data.zoneId,
    zoneName: data.zoneName,

    phone: data.phone,
    email: data.email,
    isPrimary: data.isPrimary,
  };
}

export default customerModel;
