import Logo from '@/app/_components/ui/logo';
import { ALIPO_FACEBOOK, ALIPO_INSTA, ALIPO_LINKEDIN, ALIPO_YOUTUBE } from '@/app/_config/constants';
import { ROUTES } from '@/app/_config/routes';
import Facebook from '@/icons/social/facebook';
import Instagram from '@/icons/social/instagram';
import LinkedIn from '@/icons/social/linkedin';
import Youtube from '@/icons/social/youtube';
import Link from 'next/link';

const items = [
  { label: 'About Us', link: ROUTES.aboutUs },
  { label: 'Contact Us', link: ROUTES.contactUs },
  { label: 'Sustainability', link: '/' },
  { label: 'Inspiration', link: '/' },
  { label: 'GDPR', link: '/' },
  { label: 'Sitemap', link: '/' },
];

const BasicInformation = () => {
  return (
    <div className='grid h-full content-between border-r border-gray-400'>
      <Logo variant='monotone' />
      <div className='grid gap-6 text-base font-bold'>
        {items.map((item) => (
          <Link key={item.label} href={item.link} className='transition-colors hover:text-secondary-900'>
            {item.label}
          </Link>
        ))}
      </div>

      <div className='flex items-center gap-8'>
        <Link href={ALIPO_FACEBOOK} target='_blank'>
          <Facebook className='h-7 w-7 transition-colors hover:fill-secondary-900' />
        </Link>
        <Link href={ALIPO_INSTA} target='_blank'>
          <Instagram className='h-7 w-7 transition-colors hover:fill-secondary-900' />
        </Link>
        <Link href={ALIPO_LINKEDIN} target='_blank'>
          <LinkedIn className='h-7 w-7 transition-colors hover:fill-secondary-900' />
        </Link>
        <Link href={ALIPO_YOUTUBE} target='_blank'>
          <Youtube className='h-7 w-7 transition-colors hover:fill-secondary-900' />
        </Link>
      </div>
    </div>
  );
};

export default BasicInformation;
