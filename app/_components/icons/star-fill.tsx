import { SVGAttributes } from 'react';

const StarFill = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='1em' height='1.0625em' viewBox='0 0 16 17' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M3.7377 14.9168L4.78041 10.4091L1.28333 7.37718L5.90333 6.97614L7.69999 2.7251L9.49666 6.97614L14.1167 7.37718L10.6196 10.4091L11.6623 14.9168L7.69999 12.5266L3.7377 14.9168Z'
        fill='inherit'
      />
    </svg>
  );
};

export default StarFill;
