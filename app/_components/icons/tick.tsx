import { SVGAttributes } from 'react';

const Tick = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='23' height='24' viewBox='0 0 23 24' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M9.15195 17.75L3.68945 12.2875L5.05508 10.9219L9.15195 15.0188L17.9447 6.22604L19.3103 7.59167L9.15195 17.75Z'
        fill='inherit'
      />
    </svg>
  );
};

export default Tick;
