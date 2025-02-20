import { merge } from '@/app/_lib/merge';
import LoadingSpinner from './loading-spinner';

type LoadingFullScreenType = {
  className?: string;
  text?: string;
};

const LoadingFullScreen = (props: LoadingFullScreenType) => {
  return (
    <div className='fixed left-0 top-0 z-10 flex h-screen w-screen max-w-full items-center justify-center bg-black/50'>
      <LoadingSpinner className={merge('h-full w-full', props.className)} text={props.text} />
    </div>
  );
};

export default LoadingFullScreen;
