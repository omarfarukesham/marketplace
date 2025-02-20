import { SVGAttributes } from 'react';

const Facebook = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M15 8.25064H10.4995V5.25051C10.4995 4.42199 11.1715 3.75098 11.9989 3.75098H13.4984V0H10.4995C8.01402 0 6 2.01411 6 4.49966V8.24956H3V11.9995H6V24H10.4995V12.0005H13.4995L15 8.25064Z'
        fill='inherit'
      />
    </svg>
  );
};

export default Facebook;
