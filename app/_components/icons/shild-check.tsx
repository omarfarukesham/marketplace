import { SVGAttributes } from 'react';

const ShildCheck = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30' {...props}>
      <path
        d='M13.6875 19.4375L20.75 12.375L18.9688 10.5938L13.6875 15.875L11.0625 13.25L9.28125 15.0312L13.6875 19.4375ZM15 27.5C12.1042 26.7708 9.71354 25.1094 7.82812 22.5156C5.94271 19.9219 5 17.0417 5 13.875V6.25L15 2.5L25 6.25V13.875C25 17.0417 24.0573 19.9219 22.1719 22.5156C20.2865 25.1094 17.8958 26.7708 15 27.5Z'
        fill='inherit'
      />
    </svg>
  );
};

export default ShildCheck;
