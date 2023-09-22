import { type TdHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const TD = ({
  children,
  className,
  ...props
}: TdHTMLAttributes<HTMLTableCellElement>) => (
  <td
    className={twMerge(
      'px-3 py-2 sm:px-6 sm:py-5 whitespace-nowrap transition-all duration-200 bg-white group-hover:bg-slate-100/75',
      className
    )}
    {...props}
  >
    {children}
  </td>
);
