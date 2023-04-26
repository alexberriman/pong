import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { type ReactNode } from 'react';
import { Dialog } from './dialog';

export interface ErrorDialogProps {
  title: string | ReactNode;
  description: string | ReactNode;
  footer: string | ReactNode;
}

export function ErrorDialog(props: ErrorDialogProps) {
  return (
    <Dialog
      {...props}
      iconClass="bg-red-100"
      icon={
        <ExclamationTriangleIcon
          className="h-6 w-6 text-red-600"
          aria-hidden="true"
        />
      }
    />
  );
}
