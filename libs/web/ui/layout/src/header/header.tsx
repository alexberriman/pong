import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface HeaderProps {
  className?: string;
  left?: ReactNode | ReactNode[];
  children?: ReactNode | ReactNode[];
}

export function Header({ className = '', left, children }: HeaderProps) {
  return (
    <nav
      className={twMerge(
        'bg-white dark:bg-gray-700 print:hidden fixed h-16 right-0 top-0 border-b border-slate-100 z-10 w-full hidden sm:flex items-center justify-center pl-20',
        className
      )}
    >
      <div className="relative flex w-full bg-white dark:bg-gray-700 print:hidden">
        <div className="flex w-full items-center justify-between">
          {left ?? <div />}
          {children}
        </div>
      </div>
    </nav>
  );
}
