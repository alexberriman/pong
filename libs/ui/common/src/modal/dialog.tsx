import { Dialog as UIDialog } from '@headlessui/react';
import { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface DialogProps {
  title?: string | ReactNode;
  description?: string | ReactNode;
  footer?: string | ReactNode;
  icon: ReactNode;
  iconClass?: string;
}

export function Dialog({
  title,
  description,
  footer,
  icon,
  iconClass,
}: DialogProps) {
  return (
    <>
      <div>
        <div
          className={twMerge(
            'mx-auto flex items-center justify-center h-12 w-12 rounded-full',
            iconClass ?? ''
          )}
        >
          {icon}
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <UIDialog.Title
            as="h3"
            className="text-lg leading-6 font-medium text-gray-900"
          >
            {title}
          </UIDialog.Title>
          <div className="mt-2">
            {typeof description === 'string' && (
              <p className="text-sm text-gray-500">{description}</p>
            )}
            {typeof description !== 'string' && description}
          </div>
        </div>
      </div>
      {footer && <div className="mt-5 sm:mt-6">{footer}</div>}
    </>
  );
}
