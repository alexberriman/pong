import type { ReactElement, SVGProps } from 'react';

export type Icon = (props: SVGProps<SVGSVGElement>) => ReactElement;

export type ComponentWithClassName<
  T extends { className?: string } = { className?: string }
> = React.ComponentType<T & { className?: string }>;
