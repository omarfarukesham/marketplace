import { SVGAttributes } from 'react';

const SocialLgFacebook = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50' {...props}>
      <g clipPath='url(#clip0_174_199)'>
        <circle cx='25' cy='25' r='25' fill='#1773EA' />
        <path
          d='M31 22.2506H26.4995V19.2505C26.4995 18.422 27.1715 17.751 27.9989 17.751H29.4984V14H26.4995C24.014 14 22 16.0141 22 18.4997V22.2496H19V25.9995H22V38H26.4995V26.0005H29.4995L31 22.2506Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_174_199'>
          <rect width='50' height='50' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SocialLgFacebook;
