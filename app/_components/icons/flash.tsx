import { SVGAttributes } from 'react';

const Flash = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='27' height='27' viewBox='0 0 27 27' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M9 25.875L11.25 15.75H6.75L11.25 1.125H21.375L16.875 10.125H21.375L9 25.875Z' fill='inherit' />
    </svg>
  );
};

export default Flash;
