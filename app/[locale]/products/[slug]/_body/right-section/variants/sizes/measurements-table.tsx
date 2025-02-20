import Table, { TBody, TD, TH, THead, TR } from '@/app/_components/ui/table';

const headers = [
  { label: 'Size', value: 'size' },
  { label: 'US', value: 'us' },
  { label: 'Shoulder', value: 'shoulder' },
  { label: 'Bust Size', value: 'bustSize' },
  { label: 'Length', value: 'length' },
  { label: 'Sleeve Length', value: 'sleeveLength' },
];

const measurements = [
  { size: 'S', us: '36', shoulder: '17.7', bustSize: '41.8', length: '27.6', sleeveLength: '25.6' },
  { size: 'M', us: '38', shoulder: '18.1', bustSize: '43.3', length: '27.6', sleeveLength: '25.6' },
  { size: 'L', us: '40', shoulder: '18.6', bustSize: '45.3', length: '27.6', sleeveLength: '25.6' },
  { size: 'XL', us: '42', shoulder: '19.1', bustSize: '47.3', length: '27.6', sleeveLength: '25.6' },
];

const MeasurementsTable = () => {
  return (
    <div className='mt-5 md:mt-6'>
      <h2 className='mb-3 text-label font-medium md:mb-4 md:text-base md:font-bold'>Product Measurements</h2>
      <Table>
        <THead>
          {headers.map((header) => (
            <TH key={header.value}>{header.label}</TH>
          ))}
        </THead>

        <TBody>
          {measurements.map((measurement) => (
            <TR key={measurement.size} className='border border-gray-300'>
              <TD className='bg-gray-100'>{measurement.size}</TD>
              <TD>{measurement.us}</TD>
              <TD>{measurement.shoulder}</TD>
              <TD>{measurement.bustSize}</TD>
              <TD>{measurement.length}</TD>
              <TD>{measurement.sleeveLength}</TD>
            </TR>
          ))}
        </TBody>
      </Table>
    </div>
  );
};

export default MeasurementsTable;
