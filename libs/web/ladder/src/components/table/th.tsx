import { type ThHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const TH = ({
  children,
  className,
  ...props
}: ThHTMLAttributes<HTMLTableCellElement>) => (
  <th
    scope="col"
    className={twMerge(
      'px-3 py-2 sm:px-6 sm:py-5 text-left text-black-900 font-semibold capitalize tracking-wider',
      className
    )}
    {...props}
  >
    {children}
  </th>
);
