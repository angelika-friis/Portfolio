import type { ReactNode, HTMLAttributes } from 'react';
import styles from './Stack.module.css';

type Direction = 'vertical' | 'horizontal';
type Gap = 'sm' | 'md';

type Props = {
  children: ReactNode;
  direction?: Direction;
  gap?: Gap;
  align?: 'center';
  justify?: 'between';
} & HTMLAttributes<HTMLDivElement>;

export function Stack({
  children,
  direction = 'vertical',
  gap = 'md',
  align,
  justify,
  className,
  ...props
}: Props) {
  return (
    <div
      className={[
        styles.stack,
        styles[direction],
        styles[`gap-${gap}`],
        align ? styles[align] : '',
        justify ? styles[justify] : '',
        className ?? '',
      ].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}
