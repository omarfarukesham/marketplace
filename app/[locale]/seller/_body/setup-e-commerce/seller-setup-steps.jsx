import AddressInformation from '@/icons/address-information';
import CardAdd from '@/icons/card-add';
import FileUpload from '@/icons/file-upload';
import PeopleAdd from '@/icons/people-add';
import PersonalInformation from '@/icons/personal-information';

const sellerSetupSteps = [
  {
    icon: PeopleAdd,
    title: 'Sign up for free',
    description: 'Create your account through our website or mobile app with just your phone number.',
  },
  {
    icon: PersonalInformation,
    title: 'Add Profile Information',
    description: 'Complete your profile by providing your email and store name so that we can identify you.',
  },
  {
    icon: AddressInformation,
    title: 'Add Address Information',
    description: 'Provide all address details of your business',
  },
  {
    icon: CardAdd,
    title: 'Add ID & Bank Information',
    description: 'Add in your ID & BUsiness related details. Include necessary bank information.',
  },
  {
    icon: FileUpload,
    title: 'List Products',
    description: 'Add products to your store. Start selling as soon as your products go live after quality checking.',
  },
];

export default sellerSetupSteps;
