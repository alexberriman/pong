import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { ComponentProps, Fragment, type ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

interface DropdownItem {
  onClick?: () => void;
  icon?: (props: ComponentProps<'svg'>) => ReactElement;
  label: string;
}
export type DropdownType =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'light';

export interface DropdownProps {
  className?: string;
  label: string;
  position?: 'right' | 'left';
  type?: DropdownType;
  items: DropdownItem[];
  buttonClassName?: string;
  buttonLabelClassName?: string;
  itemsContainerClassName?: string;
  itemClassName?: string;
  itemIconClassName?: string;
  icon?: (props: ComponentProps<'svg'>) => ReactElement;
}

interface Color {
  background: string;
  text: string;
}

type BadgeColors = {
  [T in DropdownType]: Color;
};

const colors = (background: string, text: string): Color => ({
  background,
  text,
});
const formatColors = (color: Color) => `${color.background} ${color.text}`;

const badgeColors: BadgeColors = {
  primary: colors('bg-indigo-600', 'text-white'),
  info: colors('bg-blue-600', 'text-white'),
  success: colors('bg-emerald-600', 'text-white'),
  warning: colors('bg-amber-500', 'text-white'),
  danger: colors('bg-red-600', 'text-white'),
  dark: colors('bg-gray-800', 'text-gray-50'),
  light: colors('bg-gray-100', 'text-gray-800'),
};

export function Dropdown({
  items,
  icon: Icon,
  className = '',
  label,
  type = 'primary',
  position = 'right',
  buttonClassName = '',
  itemClassName = '',
  itemsContainerClassName = '',
  itemIconClassName = '',
  buttonLabelClassName = '',
}: DropdownProps) {
  const colors = badgeColors[type];

  return (
    <div className={twMerge('', className)}>
      <Menu as="div" className="relative inline-block text-left h-full">
        <Menu.Button
          className={twMerge(
            `inline-flex w-full items-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 opacity-90 hover:opacity-100 transition-colors duration-500 ${formatColors(
              badgeColors[type]
            )}`,
            buttonClassName
          )}
        >
          {Icon && <Icon className={`w-5 h-5 mr-1.5 ${colors.text}`} />}
          <span className={buttonLabelClassName}>{label}</span>
          <ChevronDownIcon
            className={`ml-2 -mr-1 h-4 w-4 ${colors.text}`}
            aria-hidden="true"
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={twMerge(
              classNames(
                'absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
                {
                  'right-0': position === 'right',
                  'left-0': position === 'left',
                }
              ),
              itemsContainerClassName
            )}
          >
            <div className="px-1 py-1 ">
              {items.map(({ icon: Icon, label, onClick }) => (
                <Menu.Item key={label}>
                  {({ active }) => (
                    <button
                      className={twMerge(
                        `${
                          active ? 'bg-gray-100/75' : ''
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900`,
                        itemClassName
                      )}
                      onClick={() => {
                        if (onClick) {
                          onClick();
                        }
                      }}
                    >
                      {Icon && (
                        <Icon
                          className={twMerge('mr-2 h-5 w-5', itemIconClassName)}
                          aria-hidden="true"
                        />
                      )}
                      {label}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
