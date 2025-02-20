import { SVGAttributes } from 'react';

const Store = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='19' height='19' viewBox='0 0 19 19' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M3.65877 4.81248V3.68752H15.3414V4.81248H3.65877ZM3.68762 15.3125V10.8125H2.85107V9.68752L3.65877 5.93752H15.3414L16.1491 9.68752V10.8125H15.3126V15.3125H14.1876V10.8125H10.8126V15.3125H3.68762ZM4.81259 14.1875H9.68762V10.8125H4.81259V14.1875ZM3.99912 9.68752H15.0011L14.4285 7.06248H4.57172L3.99912 9.68752Z'
        fill='inherit'
      />
    </svg>
  );
};

export default Store;
