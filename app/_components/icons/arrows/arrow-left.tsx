import { SVGAttributes } from 'react';

const ArrowLeft = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.3161 16.2419C13.0444 16.5546 12.5707 16.5878 12.258 16.3161L4.75806 9.79888C4.59752 9.65937 4.50376 9.45827 4.50011 9.24561C4.49646 9.03296 4.58327 8.82876 4.73893 8.68383L12.2389 1.70108C12.5421 1.41883 13.0167 1.43578 13.2989 1.73894C13.5812 2.0421 13.5642 2.51667 13.2611 2.79892L6.3713 9.21352L13.2419 15.1839C13.5546 15.4556 13.5878 15.9293 13.3161 16.2419Z'
        fill='inherit'
      />
    </svg>
  );
};

export default ArrowLeft;
