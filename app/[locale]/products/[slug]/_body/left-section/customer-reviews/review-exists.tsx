import Tick from '@/icons/tick';

const ReviewExists = () => {
  return (
    <div className='flex items-center gap-2 border-2 border-dashed px-2 py-3'>
      <Tick className='rounded-full bg-secondary-900 p-1' /> You already submitted a review for this product.
    </div>
  );
};

export default ReviewExists;
