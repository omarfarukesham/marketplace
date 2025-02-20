import { SVGAttributes } from 'react';

const ArrowRightSlim = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M15 19L13.575 17.6L18.175 13H2V11H18.175L13.6 6.4L15 5L22 12L15 19Z' fill='inherit' />
    </svg>
  );
};

export default ArrowRightSlim;
