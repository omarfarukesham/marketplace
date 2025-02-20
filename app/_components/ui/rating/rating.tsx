import { merge } from '@/app/_lib/merge';
import StarFill from '@/icons/star-fill';
import StartHalf from '@/icons/star-half';
import { Fragment, ReactNode } from 'react';

const Rating = ({
  rating,
  size = 'md',
  className,
  itemClassName,
  children,
}: {
  rating: number;
  size?: 'lg' | 'md' | 'sm';
  className?: string;
  itemClassName?: string;
  children?: ReactNode;
}) => {
  const haveFraction = rating !== parseInt(rating.toString());

  const sizes = {
    sm: '[&>svg]:h-[14px] [&>svg]:w-[14px] md:[&>svg]:h-4 md:[&>svg]:w-4',
    md: '[&>svg]:h-4 [&>svg]:w-4 md:[&>svg]:h-6 md:[&>svg]:w-6',
    lg: '[&>svg]:h-8 [&>svg]:w-8',
  };

  return (
    <div className={merge('flex items-center', sizes[size], className)} aria-label='rating'>
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <Fragment key={index}>
            {index <= rating ? (
              <StarFill className={merge('fill-accent-4', itemClassName)} />
            ) : haveFraction && Math.ceil(rating) === index ? (
              <StartHalf className={merge('fill-accent-4', itemClassName)} />
            ) : (
              <StarFill className={merge('fill-gray-400', itemClassName)} />
            )}
          </Fragment>
        );
      })}
      {children}
    </div>
  );
};

export default Rating;
