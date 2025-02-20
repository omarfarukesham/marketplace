import { SVGAttributes } from 'react';

const Minus = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M5 13V11H19V13H5Z' fill='inherit' />
    </svg>
  );
};

export default Minus;
