import type { ElementType, ComponentPropsWithoutRef } from 'react';

type Props<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

export function Box<T extends ElementType = 'div'>({ as, ...props }: Props<T>) {
  const Tag = as || 'div';
  return <Tag {...props} />;
}
