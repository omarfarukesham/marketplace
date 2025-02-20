import { SVGAttributes } from 'react';

const ArrowRight = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.14183 3.26178C7.35932 2.95449 7.74866 2.91154 8.01145 3.16585L13.7761 8.74438C13.9151 8.87884 13.9968 9.0776 13.9999 9.28847C14.003 9.49933 13.9271 9.70123 13.7921 9.84115L8.02744 15.8182C7.77221 16.0828 7.38184 16.0554 7.15553 15.7569C6.92921 15.4585 6.95266 15.002 7.20789 14.7374L12.4331 9.31969L7.22387 4.27863C6.96108 4.02433 6.92435 3.56906 7.14183 3.26178Z'
        fill='inherit'
      />
    </svg>
  );
};

export default ArrowRight;
