import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface MainProps {
  className?: string;
  children: ReactNode | ReactNode[];
}

export function Main({ className = '', children }: MainProps) {
  return (
    <main
      className={twMerge('main-content w-full pb-8 mt-16 px-4 py-4', className)}
    >
      {children}
    </main>
  );
}
