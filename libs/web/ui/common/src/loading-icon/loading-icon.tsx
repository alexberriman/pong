import { twMerge } from 'tailwind-merge';

export interface LoadingIconProps {
  className?: string;
  strokeWidth?: number;
}

export function LoadingIcon({
  className = '',
  strokeWidth = 1,
}: LoadingIconProps) {
  return (
    <div
      className={twMerge(
        'flex items-center justify-center relative text-black-600',
        className
      )}
    >
      <svg
        className={
          'animate-[spin_0.8s_linear_infinite] absolute left-0 top-0 h-full w-full'
        }
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth={strokeWidth}
        ></circle>
        <path
          className="opacity-100"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          d="M12,2 a10,10 0 0,1 10,10"
        />
      </svg>
    </div>
  );
}
