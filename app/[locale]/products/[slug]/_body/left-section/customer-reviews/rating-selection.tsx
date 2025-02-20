import StarFill from '@/icons/star-fill';
import { CSSProperties } from 'react';
import './rating-selection.css';

const RatingSelection = ({ name }: { name: string }) => {
  return (
    <span className='star-rating'>
      <label htmlFor='rate-1' style={{ '--i': '1' } as CSSProperties}>
        <StarFill />
      </label>
      <input type='radio' name={name} id='rate-1' value='1' />
      <label htmlFor='rate-2' style={{ '--i': '2' } as CSSProperties}>
        <StarFill />
      </label>
      <input type='radio' name={name} id='rate-2' value='2' />
      <label htmlFor='rate-3' style={{ '--i': '3' } as CSSProperties}>
        <StarFill />
      </label>
      <input type='radio' name={name} id='rate-3' value='3' />
      <label htmlFor='rate-4' style={{ '--i': '4' } as CSSProperties}>
        <StarFill />
      </label>
      <input type='radio' name={name} id='rate-4' value='4' />
      <label htmlFor='rate-5' style={{ '--i': '5' } as CSSProperties}>
        <StarFill />
      </label>
      <input type='radio' name={name} id='rate-5' value='5' />
    </span>
  );
};

export default RatingSelection;
