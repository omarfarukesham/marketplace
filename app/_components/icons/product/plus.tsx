import { SVGAttributes } from 'react';

const Plus = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M11 13H5.00003L5 11H11L11 5H13L13 11H19L19 13H13.0001V19H11V13Z' fill='inherit' />
    </svg>
  );
};

export default Plus;
