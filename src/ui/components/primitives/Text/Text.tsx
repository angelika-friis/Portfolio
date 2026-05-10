import type { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Text.module.css';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type Variant =
  | 'display'
  | 'heading'
  | 'subheading'
  | 'body'
  | 'caption'
  | 'label'
  | 'overline';
type Weight = 'regular' | 'medium' | 'bold';
type Tone = 'default' | 'muted' | 'accent';
type Align = 'left' | 'center' | 'right';

type Props<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  weight?: Weight;
  tone?: Tone;
  align?: Align;
  muted?: boolean;
} & ComponentPropsWithoutRef<T>;

export function Text<T extends ElementType = 'p'>({
  as,
  children,
  variant = 'body',
  size = 'md',
  weight,
  tone = 'default',
  align,
  muted,
  className,
  ...props
}: Props<T>) {
  const Tag = as || 'p';
  const textTone = muted ? 'muted' : tone;

  return (
    <Tag
      className={[
        styles.text,
        styles[variant],
        styles[size],
        styles[textTone],
        weight ? styles[`weight-${weight}`] : '',
        align ? styles[`align-${align}`] : '',
        className ?? '',
      ].join(' ')}
      {...props}
    >
      {children}
    </Tag>
  );
}
