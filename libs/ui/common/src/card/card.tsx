import { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface CardProps {
  image?: string | ReactNode;
  title: string | ReactNode;
  description?: string | ReactNode;
  className?: string;
  contentClassName?: string;
}

export function Card({
  image,
  title,
  description,
  className = '',
  contentClassName = '',
}: CardProps) {
  return (
    <div
      className={twMerge('bg-white rounded overflow-hidden border', className)}
    >
      {image && typeof image === 'string' && <img src={image} alt="" />}
      {image && typeof image !== 'string' && image}

      <div className={twMerge('p-4', contentClassName)}>
        <div className="text-gray-800 font-medium">{title}</div>
        {description && (
          <div className="text-gray-500 text-sm mt-1">{description}</div>
        )}
      </div>
    </div>
  );
}
