import { ENDPOINTS } from '@/app/_config/endpoints';
import { API, contentApi } from '@/app/_lib/api-service';
import catchAsync from '@/app/_lib/catch-async';

class ContentService {
  constructor(private api: API) {}

  upload = catchAsync((data: FormData) => {
    return this.api.post(ENDPOINTS.contentUpload, data, {
      config: {
        responseType: 'text',
      },
    });
  });
}

const contentService = new ContentService(contentApi);
export default contentService;
