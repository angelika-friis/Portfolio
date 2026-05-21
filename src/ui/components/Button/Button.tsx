import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import styles from './Button.module.css';

type BaseProps = {
  children: ReactNode;
  variant?: 'accent' | 'primary';
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>;

type Props = ButtonProps | AnchorProps;

export function Button({
  children,
  variant = 'accent',
  className,
  ...props
}: Props) {
  const buttonClassName = [
    styles.button,
    styles[variant],
    className ?? '',
  ].join(' ');

  if ('href' in props && props.href) {
    return (
      <a className={buttonClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClassName}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
