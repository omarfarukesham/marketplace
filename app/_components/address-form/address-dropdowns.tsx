import { DEFAULT_COUNTRY_OPTION } from '@/app/_config/constants';
import { useAreas, useStates, useZones } from '@/app/_services/settings/use-settings';
import { useFormContext, useWatch } from 'react-hook-form';
import FormDropdown from '../ui/form/form-dropdown';

export const StateInput = () => {
  const { data: states, isLoading } = useStates({});
  const { setValue } = useFormContext();

  return (
    <FormDropdown
      name='stateId'
      label='Division'
      options={states?.map((state) => ({ label: state.name, value: state.id })) || []}
      onChange={(selectedOption) => {
        setValue('stateName', selectedOption.label);
      }}
      validations={{ required: 'Please select your state' }}
      isLoading={isLoading}
    />
  );
};

export const ZoneInput = () => {
  const stateId = useWatch({ name: 'stateId' });

  const { data: zones, isLoading } = useZones({ filters: { stateId: stateId ? stateId : null } });
  const { setValue } = useFormContext();

  return (
    <FormDropdown
      name='zoneId'
      label='District'
      options={zones?.map((zone) => ({ label: zone.name, value: zone.id })) || []}
      onChange={(selectedOption) => {
        setValue('zoneName', selectedOption.label);
      }}
      validations={{ required: 'Please select your zone' }}
      isLoading={isLoading}
    />
  );
};

export const AreaInput = () => {
  const zoneId = useWatch({ name: 'zoneId' });
  const { data: areas, isLoading } = useAreas({ filters: { zoneId: zoneId ? zoneId : null } });
  const { setValue } = useFormContext();

  return (
    <FormDropdown
      name='areaId'
      label='Thana'
      options={areas?.map((area) => ({ label: area.name, value: area.id })) || []}
      onChange={(selectedOption) => {
        setValue('areaName', selectedOption.label);
      }}
      validations={{ required: 'Please select your area' }}
      isLoading={isLoading}
    />
  );
};

export const CountryInput = () => {
  return (
    <FormDropdown
      name='countryId'
      label='Country'
      options={[{ label: DEFAULT_COUNTRY_OPTION.name, value: DEFAULT_COUNTRY_OPTION.id }]}
      validations={{ required: 'Please select your country' }}
      defaultValue={DEFAULT_COUNTRY_OPTION.id}
      disabled
      extraInfo='Only available in Bangladesh'
    />
  );
};
