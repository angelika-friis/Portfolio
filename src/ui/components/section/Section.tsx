import styles from './Section.module.css';

type Props = {
  title: string;
  children: React.ReactNode;
};

export function Section({ title, children }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.window}>
        <div className={styles.header}>
          <span>{title}</span>
          <div className={styles.controls}>
            <span className={`${styles.dot} ${styles.accent}`} />
            <span className={styles.dot} />
          </div>
        </div>

        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
}
