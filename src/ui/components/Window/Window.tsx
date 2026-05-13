import styles from './Window.module.css';

type Props = {
  title: string;
  children: React.ReactNode;
  contentPadding?: boolean;
};

export function Window({ title, children, contentPadding = true }: Props) {
  const contentClassName = contentPadding
    ? styles.content
    : `${styles.content} ${styles.contentFlush}`;

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

        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}
