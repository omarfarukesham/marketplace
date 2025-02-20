import { merge } from '@/app/_lib/merge';
import { ReactNode } from 'react';

type TableType = {
  children: ReactNode;
  className?: string;
};

const Table = ({ children, className }: TableType) => {
  return (
    <div className='thin-scrollbar relative overflow-x-auto rounded-md border border-gray-300'>
      <table className={merge('w-full text-left text-sm text-gray-500 rtl:text-right', className)}>{children}</table>
    </div>
  );
};

export const THead = ({ children, className }: TableType) => {
  return (
    <thead className={merge('bg-gray-50 bg-gray-100 text-xs uppercase text-gray-700', className)}>
      <tr>{children}</tr>
    </thead>
  );
};

type THType = TableType & { scope?: string };

export const TH = ({ children, className, scope = 'col' }: THType) => {
  return (
    <th scope={scope} className={merge('border border-gray-300 px-6 py-3', className)}>
      {children}
    </th>
  );
};

export const TR = ({ children, className }: TableType) => {
  return <tr className={merge('even:bg-gray-50 border-b odd:bg-white', className)}>{children}</tr>;
};

export const TD = ({ children, className }: TableType) => {
  return <td className={merge('border border-gray-300 px-6 py-3 md:py-4', className)}>{children}</td>;
};

export const TBody = ({ children, className }: TableType) => {
  return <tbody className={className}>{children}</tbody>;
};

export default Table;
