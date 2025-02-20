import { SVGAttributes } from 'react';

const Cross = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='35' height='35' viewBox='0 0 35 35' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M9.07812 27.4531L7.54688 25.9219L15.9688 17.5L7.54688 9.07812L9.07812 7.54688L17.5 15.9688L25.9219 7.54688L27.4531 9.07812L19.0312 17.5L27.4531 25.9219L25.9219 27.4531L17.5 19.0312L9.07812 27.4531Z'
        fill='inherit'
      />
    </svg>
  );
};

export default Cross;
