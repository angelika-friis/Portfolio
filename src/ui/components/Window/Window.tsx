import styles from './Window.module.css';

type Props = {
  title: string;
  children: React.ReactNode;
};

export function Window({ title, children }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.window}>
        <div className={styles.header}>
          <span>{title}</span>
          <div className={styles.controls}>
            <span className={styles.control} />
            <span className={styles.control} />
            <span className={`${styles.control} ${styles.red}`} />
          </div>
        </div>

        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
}
