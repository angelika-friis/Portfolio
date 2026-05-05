import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type Props = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...props }: Props) {
  return (
    <button className={[styles.button, className ?? ''].join(' ')} {...props}>
      {children}
    </button>
  );
}
