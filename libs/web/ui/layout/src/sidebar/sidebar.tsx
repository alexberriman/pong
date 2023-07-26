import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { ComponentWithClassName } from '../types';

interface SideBarMenuItem {
  url: string;
  name: string;
  icon: ComponentWithClassName;
}

export interface SideBarProps {
  className?: string;
  logo?: ReactNode | ReactNode[];
  iconClassName?: string;
  menuItems: SideBarMenuItem[];
}

export function SideBar({
  className = '',
  logo,
  iconClassName = '',
  menuItems,
}: SideBarProps) {
  return (
    <div
      className={twMerge(
        'print:hidden h-full shrink-0 w-20 z-20 bg-white hidden sm:block',
        className
      )}
    >
      <div className="flex h-full w-full flex-col items-center border-r border-slate-100 bg-white dark:border-navy-700 dark:bg-navy-800">
        {logo && (
          <div className="flex pt-4">
            <Link to="/">{logo}</Link>
          </div>
        )}

        <div className="flex grow flex-col space-y-4 overflow-y-auto pt-6">
          {menuItems.map(({ icon: Icon, url }) => (
            <Link
              key={url}
              to={url}
              className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-primary-50 text-primary outline-none transition-colors duration-200 focus:bg-primary-50 active:bg-primary-100 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
            >
              <Icon className={twMerge('h-7 w-7', iconClassName)} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
