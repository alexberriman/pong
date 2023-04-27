import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface RootProps {
  children: ReactNode | ReactNode[];
  className?: string;
}

export function Root({ className = '', children }: RootProps) {
  return <div className={twMerge('flex grow', className)}>{children}</div>;
}
