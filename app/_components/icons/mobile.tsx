import { SVGAttributes } from 'react';

const Mobile = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      // fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.0114 4H8.3553C7.80616 4 7.361 4.44772 7.361 5V19C7.361 19.5523 7.80616 20 8.3553 20H16.0114C16.5605 20 17.0057 19.5523 17.0057 19V5C17.0057 4.44771 16.5605 4 16.0114 4ZM8.3553 3C7.25703 3 6.3667 3.89543 6.3667 5V19C6.3667 20.1046 7.25702 21 8.3553 21H16.0114C17.1097 21 18 20.1046 18 19V5C18 3.89543 17.1097 3 16.0114 3H8.3553Z'
        fill='inherit'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.2444 5.79999C10.2444 5.52385 10.479 5.29999 10.7684 5.29999L13.5981 5.29999C13.8875 5.29999 14.1222 5.52385 14.1222 5.79999C14.1222 6.07613 13.8875 6.29999 13.5981 6.29999L10.7684 6.29999C10.479 6.29999 10.2444 6.07613 10.2444 5.79999Z'
        fill='inherit'
      />
      <ellipse cx='12.2318' cy='17.35' rx='1.30875' ry='1.35' fill='inherit' />
    </svg>
  );
};

export default Mobile;
