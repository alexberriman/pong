import classNames from 'classnames';
import { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps {
  type:
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'dark'
    | 'light';
  children: ReactNode | ReactNode[];
  withDot?: boolean;
  rounded?: boolean;
  className?: string;
}
interface Color {
  background: string;
  text: string;
  dot: string;
}

const colors = (background: string, text: string, dot: string): Color => ({
  background,
  text,
  dot,
});
const formatColors = (color: Color) => `${color.background} ${color.text}`;

type BadgeColors = {
  [T in BadgeProps['type']]: Color;
};

const badgeColors: BadgeColors = {
  primary: colors('bg-indigo-300', 'text-indigo-700', 'bg-indigo-700'),
  info: colors('bg-blue-300', 'text-blue-700', 'bg-blue-700'),
  success: colors('bg-emerald-300', 'text-emerald-700', 'bg-emerald-700'),
  warning: colors('bg-amber-300', 'text-amber-700', 'bg-amber-700'),
  danger: colors('bg-red-300', 'text-red-700', 'bg-red-700'),
  dark: colors('bg-gray-800', 'text-gray-50', 'bg-gray-50'),
  light: colors('bg-gray-100', 'text-gray-800', 'bg-gray-800'),
};

export function Badge({
  type,
  children,
  withDot,
  rounded,
  className = '',
}: BadgeProps) {
  return (
    <div
      className={twMerge(
        classNames(
          'text-sm inline-flex px-2.5 py-1 gap-1.5 items-center font-medium',
          formatColors(badgeColors[type]),
          {
            'rounded-full': rounded,
            'rounded-md': !rounded,
          }
        ),
        className
      )}
    >
      {withDot && (
        <span
          className={`p-1 rounded-full ${badgeColors[type].dot} w-2 h-2`}
        ></span>
      )}
      {children}
    </div>
  );
}
