import { twMerge } from 'tailwind-merge';
import { LoadingIcon } from './loading-icon';

interface LoadingContainerProps {
  className?: string;
  iconClassName?: string;
}

export function LoadingContainer({
  className = '',
  iconClassName = '',
}: LoadingContainerProps) {
  return (
    <div
      className={twMerge(
        'w-full flex items-center justify-center pt-2 mt-2',
        className
      )}
    >
      <LoadingIcon
        className={twMerge('w-9 h-9 text-indigo-600', iconClassName)}
        strokeWidth={2}
      />
    </div>
  );
}
