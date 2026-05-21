import styles from './Chip.module.css';

type Props = {
  children: string;
};

export function Chip({ children }: Props) {
  return <li className={styles.Chip}>{children}</li>;
}
