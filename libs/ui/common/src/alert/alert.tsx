import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid';
import classNames from 'classnames';
import { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface AlertProps {
  type: 'danger' | 'warning' | 'info' | 'success';
  title?: string | ReactNode;
  titleClassName?: string;
  description?: string | ReactNode;
  descriptionClassName?: string;
  className?: string;
  hideIcon?: boolean;
  copyClassName?: string;
  children?: ReactNode | ReactNode[];
}

export function Alert({
  type,
  title,
  titleClassName = '',
  description,
  descriptionClassName = '',
  className = '',
  hideIcon = false,
  copyClassName = '',
  children,
}: AlertProps) {
  return (
    <div
      className={twMerge(
        'rounded-md p-4 flex',
        classNames({
          'bg-red-50': type === 'danger',
          'bg-yellow-50': type === 'warning',
          'bg-blue-50': type === 'info',
          'bg-green-50': type === 'success',
        }),
        className
      )}
    >
      {!hideIcon && (
        <div className="flex-shrink-0">
          {type === 'danger' && (
            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          )}
          {type === 'warning' && (
            <ExclamationTriangleIcon
              className="h-5 w-5 text-yellow-400"
              aria-hidden="true"
            />
          )}
          {type === 'info' && (
            <InformationCircleIcon
              className="h-5 w-5 text-blue-400"
              aria-hidden="true"
            />
          )}
          {type === 'success' && (
            <CheckCircleIcon
              className="h-5 w-5 text-green-400"
              aria-hidden="true"
            />
          )}
        </div>
      )}

      <div className={twMerge('ml-3', copyClassName)}>
        {title && (
          <h3
            className={twMerge(
              'text-sm font-medium',
              classNames({
                'text-red-800': type === 'danger',
                'text-yellow-800': type === 'warning',
                'text-blue-800': type === 'info',
                'text-green-800': type === 'success',
              }),
              titleClassName
            )}
          >
            {title}
          </h3>
        )}
        {description && (
          <div
            className={twMerge(
              'text-sm',
              classNames({
                'mt-2': title,
                'text-red-700': type === 'danger',
                'text-yellow-700': type === 'warning',
                'text-blue-700': type === 'info',
                'text-green-700': type === 'success',
              }),
              descriptionClassName
            )}
          >
            <p>{description}</p>
          </div>
        )}
      </div>

      {children}
    </div>
  );
}
