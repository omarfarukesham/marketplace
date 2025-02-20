import Location from '@/icons/location';

const LocationSelector = () => {
  return (
    <div className='hidden items-end gap-0.5 md:flex'>
      <Location className='h-[1.875rem] w-[1.875rem]' />
      <div className='grid'>
        <span className='text-label'>Deliver to</span>
        <span className='font-bold'>Bangladesh</span>
      </div>
    </div>
  );
};

export default LocationSelector;
