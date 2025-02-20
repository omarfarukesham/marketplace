'use client';
import Button from '@/app/_components/ui/button';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  // useEffect(() => {
  //   // Log the error to an error reporting service
  //   console.error(error);
  // }, [error]);

  return (
    <div className='grid justify-center gap-3 p-5'>
      <h2>Failed to load this! Try again!</h2>
      <Button color='secondary' size='lg' onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
