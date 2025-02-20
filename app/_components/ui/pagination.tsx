import { merge } from '@/app/_lib/merge';
import ArrowRight from '@/icons/arrows/arrow-right';
import { ComponentProps, Dispatch, SetStateAction } from 'react';

interface PaginationType {
  totalPages: number;
  currentPage: number;
  onPageChange?: (page: number) => void;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({ totalPages, currentPage, setCurrentPage, onPageChange }: PaginationType) => {
  const showEllipsis = totalPages > 5;
  let pagesToShow: number[] = [];

  if (!showEllipsis) {
    pagesToShow = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    if (currentPage <= 3) {
      pagesToShow = [1, 2, 3, 4, 5];
    } else if (currentPage >= totalPages - 2) {
      pagesToShow = [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
      pagesToShow = [currentPage - 1, currentPage, currentPage + 1];
    }
  }

  const changePage = (page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      if (onPageChange) onPageChange(page);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      changePage(currentPage + 1);
    }
  };

  return (
    <div className='flex w-fit items-center gap-3'>
      <Button disabled={currentPage === 1} onClick={goToPreviousPage}>
        <ArrowRight className='rotate-180' />
      </Button>

      {showEllipsis && currentPage > 3 && <Button onClick={() => changePage(1)}>1</Button>}

      {showEllipsis && currentPage > 4 && <span className='p-2.5'>...</span>}

      {pagesToShow.map((page) => (
        <Button
          key={page}
          onClick={() => changePage(page)}
          className={currentPage === page ? 'bg-secondary-900 text-white' : 'bg-gray-200'}
        >
          {page}
        </Button>
      ))}

      {showEllipsis && currentPage < totalPages - 3 && <span className='p-2.5'>...</span>}

      {showEllipsis && currentPage < totalPages - 2 && (
        <Button onClick={() => changePage(totalPages)}>{totalPages}</Button>
      )}

      <Button disabled={currentPage === totalPages} onClick={goToNextPage}>
        <ArrowRight />
      </Button>
    </div>
  );
};

const Button = ({ className, ...rest }: ComponentProps<'button'>) => {
  return (
    <button
      {...rest}
      className={merge('flex h-12 w-12 items-center justify-center rounded-full bg-gray-200', className)}
    >
      {rest.children}
    </button>
  );
};
export default Pagination;
