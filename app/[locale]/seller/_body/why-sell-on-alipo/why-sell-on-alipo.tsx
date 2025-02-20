import CreditScore from '@/icons/credit-score';
import Devices from '@/icons/devices';
import Note from '@/icons/note';
import NoteQuestion from '@/icons/note-question';
import OpenMessage from '@/icons/open-message';
import Package from '@/icons/package';
import { SVGAttributes } from 'react';

type ReasonType = { Icon: (props: SVGAttributes<SVGElement>) => JSX.Element; title: string; description: string };

const REASONS: ReasonType[] = [
  {
    Icon: Note,
    title: 'Free Registration',
    description: 'By joining our community, you open the door to a range of benefits.',
  },
  {
    Icon: OpenMessage,
    title: 'Seller Newsletter',
    description: "Our Seller Newsletter isn't just about updates — it's a platform for collaboration.",
  },
  {
    Icon: NoteQuestion,
    title: 'Support & Training',
    description: 'We offer comprehensive Support & Training services to empower our sellers.',
  },
  {
    Icon: Devices,
    title: 'Manage Anywhere',
    description: 'Download the app today and experience the freedom to manage your business.',
  },
  {
    Icon: CreditScore,
    title: 'On-time Payment',
    description: 'We understand the importance of a reliable and efficient financial process.',
  },
  {
    Icon: Package,
    title: 'Secure Shipping',
    description: 'Our commitment to secure shipping is embedded in every step of our process.',
  },
];

const WhySellOnAlipo = () => {
  return (
    <section className='px-3 md:px-20 xl:px-36 3xl:px-44'>
      <h2 className='mb-5 text-center font-bold md:text-2xl xl:mb-10 xl:text-4xl'>Why Sell on Alipo?</h2>
      <div className='grid gap-3 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-20'>
        {REASONS.map((reason) => (
          <ReasonCard key={reason.title} reason={reason} />
        ))}
      </div>
    </section>
  );
};

const ReasonCard = ({ reason }: { reason: ReasonType }) => {
  return (
    <div className='flex gap-3'>
      <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-secondary-900 md:h-16 md:w-16'>
        <reason.Icon className='h-6 w-6 fill-secondary-900 md:h-9 md:w-9' />
      </div>
      <div>
        <h3 className='leading-loose'>{reason.title}</h3>
        <p>{reason.description}</p>
      </div>
    </div>
  );
};

export default WhySellOnAlipo;
