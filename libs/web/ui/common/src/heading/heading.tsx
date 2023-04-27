import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const getStyle = (tag: string) => {
  const baseClasses =
    'tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100';

  switch (tag) {
    case 'h1':
      return `${baseClasses} text-lg font-medium`;
    case 'h2':
      return `${baseClasses} text-base font-medium`;
    case 'h3':
      return `${baseClasses} text-sm font-medium`;
    default:
      return `${baseClasses} text-sm font-normal`;
  }
};

export function Heading({
  as,
  children,
  className = '',
  ...props
}: HeadingProps) {
  const Tag = as;
  const style = getStyle(as);

  return (
    <Tag className={twMerge(style, className)} {...props}>
      {children}
    </Tag>
  );
}

export default Heading;
