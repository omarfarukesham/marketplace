import { SVGAttributes } from 'react';

type IconWithBadgeType = {
  icon: (props: SVGAttributes<SVGElement>) => JSX.Element;
  text: string;
} & SVGAttributes<SVGAElement>;

const IconWithBadge = ({ icon: Icon, text, ...rest }: IconWithBadgeType) => {
  return (
    <div className='relative'>
      <Icon {...rest} />
      <span className='absolute -top-1 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-danger md:right-2.5 md:top-0 md:text-base'>
        {text}
      </span>
    </div>
  );
};

export default IconWithBadge;
