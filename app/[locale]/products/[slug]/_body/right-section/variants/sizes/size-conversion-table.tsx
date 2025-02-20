import Table, { TBody, TD, TH, THead, TR } from '@/app/_components/ui/table';

const headers = [
  { label: 'Size', value: 'size' },
  { label: 'US', value: 'us' },
  { label: 'EU', value: 'eu' },
  { label: 'UK', value: 'ukSize' },
  { label: 'AU', value: 'au' },
  { label: 'NZ', value: 'nz' },
  { label: 'DE', value: 'de' },
  { label: 'UA', value: 'ua' },
  { label: 'BD', value: 'bd' },
];

const measurements = [
  { size: 'S', us: '36', eu: '17.7', uk: '41.8', au: '27.6', nz: '25.6', de: '15.3', ua: '21.3', bd: '12.7' },
  { size: 'M', us: '38', eu: '18.1', uk: '43.3', au: '27.6', nz: '25.6', de: '15.3', ua: '21.3', bd: '12.7' },
  { size: 'L', us: '40', eu: '18.6', uk: '45.3', au: '27.6', nz: '25.6', de: '15.3', ua: '21.3', bd: '12.7' },
  { size: 'XL', us: '42', eu: '19.1', uk: '47.3', au: '27.6', nz: '25.6', de: '15.3', ua: '21.3', bd: '12.7' },
];

const SizeConversionTable = () => {
  return (
    <div className='mt-5 md:mt-6'>
      <h2 className='mb-3 text-label font-medium md:mb-4 md:text-base md:font-bold'>International size conversions</h2>
      <Table>
        <THead>
          {headers.map((header) => (
            <TH key={header.value}>{header.label}</TH>
          ))}
        </THead>

        <TBody>
          {measurements.map((measurement) => (
            <TR key={measurement.size} className='border border-gray-300'>
              <TD className='bg-gray-100 md:min-w-[8rem]'>{measurement.size}</TD>
              <TD className='md:min-w-[8rem]'>{measurement.us}</TD>
              <TD className='md:min-w-[8rem]'>{measurement.eu}</TD>
              <TD className='md:min-w-[8rem]'>{measurement.uk}</TD>
              <TD className='md:min-w-[8rem]'>{measurement.au}</TD>
              <TD className='md:min-w-[8rem]'>{measurement.nz}</TD>
              <TD className='md:min-w-[8rem]'>{measurement.de}</TD>
              <TD className='md:min-w-[8rem]'>{measurement.ua}</TD>
              <TD className='md:min-w-[8rem]'>{measurement.bd}</TD>
            </TR>
          ))}
        </TBody>
      </Table>
    </div>
  );
};

export default SizeConversionTable;
