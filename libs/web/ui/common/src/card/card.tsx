import { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Heading } from '../heading';

export interface CardProps {
  className?: string;
  children: ReactNode | ReactNode[];
  title?: string | ReactNode | ReactNode[];
}

export function Card({ className = '', children, title }: CardProps) {
  return (
    <div
      className={twMerge(
        'bg-white rounded shadow text-gray-600 flex flex-col break-words relative px-3 py-4',
        className
      )}
    >
      {title && typeof title === 'string' && (
        <div className="mt-3 flex items-center justify-between px-4 sm:px-5">
          <Heading as="h2">{title}</Heading>
        </div>
      )}

      <div className="p-4">{children}</div>
    </div>
  );
}
