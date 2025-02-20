import ArrowDown from '@/icons/arrows/arrow-down';

const sizeOptions = [
  { label: 'US', value: 'us' },
  { label: 'EU', value: 'eu' },
  { label: 'UK', value: 'uk' },
  { label: 'AU', value: 'au' },
  { label: 'NZ', value: 'nz' },
  { label: 'DE', value: 'de' },
];

const SizeTypeDropdown = () => {
  return (
    <div className='relative inline-block'>
      <span className='pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-700'>
        <ArrowDown className='fill-gray-700' />
      </span>
      <select name='size' className='h-7 appearance-none rounded-full pl-5 pr-12 shadow md:h-9'>
        {sizeOptions.map((size) => (
          <option value={size.value} key={size.value}>
            {size.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SizeTypeDropdown;
