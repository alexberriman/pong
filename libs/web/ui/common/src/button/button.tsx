import classNames from 'classnames';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  intent?: 'primary' | 'secondary' | 'custom';
  type?: 'submit' | 'button' | 'reset';
}

const defaultProps = {
  className: '',
  type: 'button' as 'submit' | 'button' | 'reset',
  intent: 'primary' as 'primary' | 'secondary' | 'custom',
};

export const DefaultClassNames =
  'inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors transition-150 disabled:bg-indigo-300 disabled:text-white';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, intent, type, ...buttonProps } = props;

  return (
    <button
      ref={ref}
      type={type}
      className={twMerge(
        classNames(DefaultClassNames, {
          'bg-indigo-600 hover:bg-indigo-700 text-white': intent === 'primary',
          '': intent === 'secondary',
        }),
        className
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
});

Button.defaultProps = defaultProps;

export { Button };
