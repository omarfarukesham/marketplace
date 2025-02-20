import contentService from '@/app/_services/content/content.service';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import DragNDrop from './drag-n-drop';
import ImagesPreview from './images-preview';

const DragNDropImages = ({
  onUpload,
  onRemove,
  onChange,

  reset,
}: {
  onChange?: (images: string[]) => void;
  onUpload?: (image: string) => void;
  onRemove?: (index: number) => void;

  reset?: boolean;
}) => {
  const [images, setImages] = useState<string[]>([]);

  const handleDrop = (files: File[]) => {
    files.forEach(async (file) => {
      const toastId = toast.loading('Uploading...');
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileType', 'REVIEW_PRODUCT_IMAGE');

      const { data: newImage, error } = await contentService.upload(formData);

      if (error) {
        toast.error(error.message, { id: toastId });
        return;
      }

      setImages((prevImages) => [...prevImages, newImage]);
      onUpload?.(newImage);
      toast.success('Uploaded', { id: toastId });
    });
  };

  const handleRemove = (index: number) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages.splice(index, 1);
      return newImages;
    });
    onRemove?.(index);
  };

  useEffect(() => {
    onChange?.(images);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  useEffect(() => {
    if (reset) {
      setImages([]);
    }
  }, [reset]);

  return (
    <div>
      <DragNDrop onDrop={handleDrop} />
      <ImagesPreview images={images} handleRemove={handleRemove} />
    </div>
  );
};

export default DragNDropImages;
