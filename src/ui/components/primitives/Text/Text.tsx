import type { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Text.module.css';

type Size = 'sm' | 'md' | 'lg';

type Props<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  size?: Size;
  weight?: 'bold';
  muted?: boolean;
} & ComponentPropsWithoutRef<T>;

export function Text<T extends ElementType = 'p'>({
  as,
  children,
  size = 'md',
  weight,
  muted,
  className,
  ...props
}: Props<T>) {
  const Tag = as || 'p';

  return (
    <Tag
      className={[
        styles.text,
        styles[size],
        weight ? styles[weight] : '',
        muted ? styles.muted : '',
        className ?? '',
      ].join(' ')}
      {...props}
    >
      {children}
    </Tag>
  );
}
