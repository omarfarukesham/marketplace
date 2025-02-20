import Image from 'next/image';
import Link from 'next/link';

const prices = [
  {
    url: 'https://i.ibb.co/zQQJYsM/campaign-price-banner-01.jpg',
    altText: 'Price Banner 01',
  },
  {
    url: 'https://i.ibb.co/PhWBnyj/campaign-price-banner-02.jpg',
    altText: 'Price Banner 02',
  },
  {
    url: 'https://i.ibb.co/92wPmwX/campaign-price-banner-03.jpg',
    altText: 'Price Banner 03',
  },
  {
    url: 'https://i.ibb.co/92wPmwX/campaign-price-banner-03.jpg',
    altText: 'Price Banner 03',
  },
];

const PriceCards = () => {
  return (
    <div className='mt-16 grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-14'>
      {prices.map((price) => (
        <Link href='/' key={price.url} className='relative aspect-[415/162] w-full'>
          <Image src={price.url} alt={price.altText} fill sizes='(min-width: 768px) 33vw, 50vw' />
        </Link>
      ))}
    </div>
  );
};

export default PriceCards;
