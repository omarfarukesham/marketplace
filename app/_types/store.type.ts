import { HierarchyType } from '../_lib/format-hierarchy';
import { ImageType, ProductType } from './product.type';

export type StoreType = {
  id: string;
  slug: string;
  status: 'ACTIVE' | 'INACTIVE';
  recommendedProducts?: ProductType[];

  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;

  users: StoreUserType[];
  authorizedPerson: AuthorizedPerson;

  bankInfo: BankInfo;
  paymentMethodName: string;
  marketCode: string;
  profileStatus: string;
  billingAddress: Address;
  shippingAddress: Address;
  warehouseAddress: Address;
  storeName: string;
  storeDisplayName: string;
  logo: ImageType;
  bannerImage: ImageType;
  shopTypeHierarchy: HierarchyType[];
  shopTypeCategoryId: string;
  description: string;
  bizInfo: BizInfo;
  bizDoc: BizDoc;
};

export type StoreCategoryType = {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  thumbnail: string;
};

export type StoreUserType = {
  userId: string;
  userName: string;
  userFullName: string;
};

interface BizDoc {
  licenseNo: string;
  certificate: string;
}

interface BizInfo {
  registrationNo: string;
  licenseNo: string;
  binNo: string;
  telephone: string;
  mobile: string;
  email: string;
  website: string;
}

interface Address {
  countryId: string;
  countryName: string;
  stateId: string;
  stateName: string;
  zoneId: string;
  zoneName: string;
  areaId: string;
  areaName: string;
  details: string;
}

interface BankInfo {
  name: string;
  accountNo: string;
  branchName: string;
  accountType: string;
}

interface AuthorizedPerson {
  nid: string;
  name: string;
  telephone: string;
  mobile: string;
  email: string;
}
