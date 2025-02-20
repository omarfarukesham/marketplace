'use client';

import { Carousel, CarouselSlide } from '@/app/_components/ui/carousel';
import { ROUTES } from '@/app/_config/routes';
import { CampaignType } from '@/app/_types/campaign.type';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const BannerCarousel = ({ campaigns }: { campaigns: CampaignType[] }) => {
  return (
    <div className='w-full overflow-hidden md:w-[64%] md:rounded-lg'>
      <Carousel
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        className='h-full w-full'
      >
        {campaigns.map((campaign, i) => (
          <CarouselSlide key={campaign.id} className='relative'>
            <Image
              src={campaign.bannerImage?.url || ''}
              alt={campaign.bannerImage?.altText || ''}
              height={440}
              width={1170}
              className='aspect-[1170/440] h-full w-full max-w-[100vw] md:rounded-md'
              priority={i === 0}
              sizes='(min-width: 768px) 75vw, 100vw'
            />
            <Link
              href={ROUTES.campaign(campaign.slug)}
              className='absolute bottom-[15%] left-[6%] rounded-full bg-white px-[5%] py-[1%] text-[80%] shadow transition-colors duration-300 hover:bg-secondary-900 md:font-bold xl:text-[100%]'
            >
              Buy Now
            </Link>
          </CarouselSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
