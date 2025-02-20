import { default as Rating } from '@/app/_components/ui/rating/rating';
import { PRODUCT_IMAGE_PLACEHOLDER, PROFILE_AVATAR } from '@/app/_config/resources';
import { _ReviewType } from '@/app/_types/review.type';

import Image from 'next/image';

type ReviewItemType = {
  review: _ReviewType;
};

const Review = ({ review }: ReviewItemType) => {
  const { images, review: text, customerInfo, rating, createdAt } = review ?? {};

  return (
    <div className='grid gap-3'>
      <div className='flex items-center gap-2.5'>
        <Image
          src={customerInfo.profileImage?.url || PROFILE_AVATAR}
          alt={customerInfo.profileImage?.altText}
          height={37}
          width={37}
          className='h-9 w-9 rounded-full'
        />
        <span className='font-bold'>{customerInfo.personName}</span>
        <span className='text-label text-gray-900'>on {createdAt.toDateString()}</span>
      </div>

      <div className='flex items-center gap-1.5 text-lg'>
        <Rating rating={rating} /> ({rating})
      </div>

      <p>{text}</p>

      <div className='flex flex-wrap items-center gap-5'>
        {images?.map((image) => (
          <Image
            key={image.url}
            height={125}
            width={125}
            src={image.url || PRODUCT_IMAGE_PLACEHOLDER}
            alt={image.altText}
            className='h-32 w-32'
          />
        ))}
      </div>
    </div>
  );
};

export default Review;
