import { SVGAttributes } from 'react';

const X = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='26' height='24' viewBox='0 0 26 24' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_52_143)'>
        <path
          d='M15.7784 10.0616L24.377 0H20.5233L13.871 7.71141L8.19347 0.0411859H0L9.85612 13.1138L0.446478 24H4.42168L11.6412 15.5464L17.9686 23.8353H26L15.7784 10.0616ZM4.65354 2.22667H6.97643L21.3809 21.5674H19.0641L4.65354 2.22667Z'
          fill='inherit'
        />
      </g>
      <defs>
        <clipPath id='clip0_52_143'>
          <rect width='26' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default X;
