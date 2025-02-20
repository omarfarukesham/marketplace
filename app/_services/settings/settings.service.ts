import { ENDPOINTS } from '@/app/_config/endpoints';
import { settingsApi } from '@/app/_lib/api-service';
import { APIFiltersType } from '@/app/_types/api.type';
import { StateType } from '@/app/_types/settings.type';

export class SettingsService {
  fetchStates = async ({ filters }: { filters?: APIFiltersType }): Promise<StateType[]> => {
    const data = await settingsApi.get(ENDPOINTS.states, { filters });
    return data.data.content;
  };

  fetchAreas = async ({ filters }: { filters?: APIFiltersType }): Promise<StateType[]> => {
    const data = await settingsApi.get(ENDPOINTS.areas, { filters });
    return data.data.content;
  };

  fetchZones = async ({ filters }: { filters?: APIFiltersType }): Promise<StateType[]> => {
    const data = await settingsApi.get(ENDPOINTS.zones, { filters });
    return data.data.content;
  };
}

const settingsService = new SettingsService();
export default settingsService;
