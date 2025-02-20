import { SVGAttributes } from 'react';

const SocialLgX = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50' {...props}>
      <g clipPath='url(#clip0_174_208)'>
        <circle cx='25' cy='25' r='25' fill='#172554' />
        <path
          d='M27.7784 23.0616L36.377 13H32.5233L25.871 20.7114L20.1935 13.0412H12L21.8561 26.1138L12.4465 37H16.4217L23.6412 28.5464L29.9686 36.8353H38L27.7784 23.0616ZM16.6535 15.2267H18.9764L33.3809 34.5674H31.0641L16.6535 15.2267Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_174_208'>
          <rect width='50' height='50' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SocialLgX;
