import { Fragment, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Dialog, Transition } from '@headlessui/react';

export interface ModalProps {
  children: ReactNode;
  open?: boolean;
  onClose?: (value: boolean) => void;
  className?: string;
}

export function Modal({
  open,
  onClose,
  children,
  className = 'sm:max-w-sm sm:w-full',
}: ModalProps) {
  const handleOnClose = (value: boolean) => {
    if (onClose) {
      return onClose(value);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-20 inset-0 overflow-y-auto"
        onClose={handleOnClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity cursor-pointer" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={twMerge(
                'inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 sm:p-6 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle',
                className
              )}
            >
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
