import { SVGAttributes } from 'react';

const Equal = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='11' height='7' viewBox='0 0 11 7' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M0 5.21997H11V6.77997H0V5.21997Z' fill='inherit' />
      <path d='M0 0.219971H11V1.77997H0V0.219971Z' fill='inherit' />
    </svg>
  );
};

export default Equal;
