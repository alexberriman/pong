export type ComponentWithClassName<
  T extends { className?: string } = { className?: string }
> = React.ComponentType<T & { className?: string }>;
