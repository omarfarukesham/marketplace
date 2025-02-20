const ReviewLoading = () => {
  return (
    <div className='grid gap-3'>
      <div className='flex items-center gap-2.5'>
        <div className='h-9 w-9 animate-pulse rounded-full bg-gray-400' />
        <span className='h-3 animate-pulse bg-gray-400 font-bold'></span>
        <span className='h-3 animate-pulse bg-gray-400 font-bold'></span>
      </div>

      <div className='h-3 w-40 animate-pulse bg-gray-400 font-bold'></div>
      <div className='h-3 w-40 animate-pulse bg-gray-400 font-bold'></div>

      <div className='flex flex-wrap items-center gap-5'>
        <div className='h-32 w-32 animate-pulse bg-gray-400'></div>
        <div className='h-32 w-32 animate-pulse bg-gray-400'></div>
      </div>
    </div>
  );
};

export default ReviewLoading;
