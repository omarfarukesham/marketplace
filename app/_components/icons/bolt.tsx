import { SVGAttributes } from 'react';

const Bolt = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M9.15383 20.8846L10.1538 14H5.90381L13.3846 3.21152H13.8461L12.8654 11H17.8654L9.61536 20.8846H9.15383Z'
        fill='inherit'
      />
    </svg>
  );
};

export default Bolt;
