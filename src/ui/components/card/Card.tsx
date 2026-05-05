import styles from './Card.module.css';

type Props = {
  title: string;
  children: React.ReactNode;
};

export function Card({ title, children }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
        </div>

        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
