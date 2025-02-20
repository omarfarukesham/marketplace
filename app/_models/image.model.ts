import { ImageType } from '../_types/product.type';

const imageModel = (data: any): ImageType => {
  return {
    url: data?.url || '',
    altText: data?.altText || '',
    title: data?.title || '',
    isPrimary: !!data?.isPrimary,
    metaDescription: data?.metaDescription || '',
    position: data?.position || '',
  };
};

export default imageModel;
