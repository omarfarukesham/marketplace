import DragNDropImages from '@/app/_components/ui/drag-n-drop/drag-n-drop-images';
import { ENDPOINTS } from '@/app/_config/endpoints';
import authService from '@/app/_services/auth/auth.service';
import productService from '@/app/_services/product/product.service';
import { useQueryClient } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import RatingSelection from './rating-selection';

const CreateReview = ({ productId }: { productId: string }) => {
  const [images, setImages] = useState<string[]>([]);
  const queryClient = useQueryClient();

  const handleReviewSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const reviewData = {
      rating: form.rating.value,
      review: form.review.value,
      images: images.map((img) => ({ url: img })),
      productId,
    };

    const { error } = await productService.createReview({ reviewInfo: reviewData });
    if (error) return toast.error(error.message);
    toast.success('Success');
    form.reset();
    setImages([]);
    queryClient.invalidateQueries({ queryKey: [ENDPOINTS.isReviewExists(productId), authService.getToken()] });
  };

  return (
    <div>
      <h2 className='font-semibold mb-3 text-lg'>Write a review</h2>
      <form className='grid gap-2' onSubmit={handleReviewSubmit}>
        <RatingSelection name='rating' />

        <textarea
          className='flex min-h-[80px] w-11/12 rounded-md border border-gray-200 bg-white px-3 py-2 text-label ring-offset-2 placeholder:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          placeholder='Write your review here.'
          name='review'
          required
        ></textarea>

        <DragNDropImages onChange={(images) => setImages(images)} reset={!images.length} />

        <button className='w-fit rounded bg-primary-800 px-5 py-2 text-white ring-offset-2 transition-all hover:bg-primary-900 active:ring-1'>
          Submit Your Review
        </button>
      </form>
    </div>
  );
};

export default CreateReview;
