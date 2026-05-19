import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type Props = {
  children: ReactNode;
  variant: 'accent' | 'primary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = 'accent',
  className,
  ...props
}: Props) {
  return (
    <button
      className={[styles.button, styles[variant], className ?? ''].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
