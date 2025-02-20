import { SVGAttributes } from 'react';

const ShareArrow = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='24' height='25' viewBox='0 0 24 25' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M14.4856 20.5L12.5712 18.5889L17.3062 13.8619C14.5584 13.7117 11.8583 13.9282 9.20587 14.5113C6.55342 15.0944 3.81813 16.7644 1 19.5215C2.21285 16.281 4.33356 13.8918 7.36212 12.3537C10.3907 10.8157 13.6748 10.0466 17.2146 10.0466L12.5712 5.41114L14.4856 3.5L23 12L14.4856 20.5Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default ShareArrow;
