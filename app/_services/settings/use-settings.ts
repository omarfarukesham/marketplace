import { ENDPOINTS } from '@/app/_config/endpoints';
import { APIFiltersType, QueryConfig } from '@/app/_types/api.type';
import { StateType } from '@/app/_types/settings.type';
import { useQuery } from '@tanstack/react-query';
import settingsService from './settings.service';

export const useStates = ({
  filters,
  queryOptions,
}: {
  filters?: APIFiltersType;
  queryOptions?: QueryConfig<StateType[]>;
}) => {
  return useQuery<StateType[]>({
    queryKey: [ENDPOINTS.states, JSON.stringify(filters)],
    queryFn: () => settingsService.fetchStates({ filters }),
    ...queryOptions,
  });
};

export const useAreas = ({
  filters,
  queryOptions,
}: {
  filters?: APIFiltersType;
  queryOptions?: QueryConfig<StateType[]>;
}) => {
  return useQuery<StateType[]>({
    queryKey: [ENDPOINTS.areas, JSON.stringify(filters)],
    queryFn: () => settingsService.fetchAreas({ filters }),
    ...queryOptions,
  });
};

export const useZones = ({
  filters,
  queryOptions,
}: {
  filters?: APIFiltersType;
  queryOptions?: QueryConfig<StateType[]>;
}) => {
  return useQuery<StateType[]>({
    queryKey: [ENDPOINTS.zones, JSON.stringify(filters)],
    queryFn: () => settingsService.fetchZones({ filters }),
    ...queryOptions,
  });
};
