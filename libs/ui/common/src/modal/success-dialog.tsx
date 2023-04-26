import { CheckIcon } from '@heroicons/react/24/outline';
import { type ReactNode } from 'react';
import { Dialog } from './dialog';

export interface SuccessDialogProps {
  title: string | ReactNode;
  description: string | ReactNode;
  footer?: string | ReactNode;
}

export function SuccessDialog(props: SuccessDialogProps) {
  return (
    <Dialog
      {...props}
      iconClass="bg-green-100"
      icon={<CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />}
    />
  );
}
