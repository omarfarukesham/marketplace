import { SVGAttributes } from 'react';

const ArrowDown = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='23' height='24' viewBox='0 0 23 24' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.698 8.66209C19.0525 8.91065 19.1021 9.35561 18.8086 9.65595L12.3719 16.2442C12.2167 16.403 11.9874 16.4964 11.7441 16.4999C11.5008 16.5034 11.2678 16.4167 11.1064 16.2624L4.20982 9.67421C3.90448 9.38252 3.93611 8.93639 4.28047 8.67774C4.62483 8.4191 5.15151 8.44589 5.45686 8.73758L11.7081 14.7093L17.5247 8.75585C17.8181 8.45552 18.3434 8.41354 18.698 8.66209Z'
        fill='inherit'
      />
    </svg>
  );
};

export default ArrowDown;
