import styles from './Window.module.css';

type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  contentPadding?: boolean;
  onClose?: () => void;
};

export function Window({
  title,
  children,
  className,
  contentClassName,
  contentPadding = true,
  onClose,
}: Props) {
  const sectionClassName = className
    ? `${styles.section} ${className}`
    : styles.section;
  const baseContentClassName = contentPadding
    ? styles.content
    : `${styles.content} ${styles.contentFlush}`;
  const contentClasses = contentClassName
    ? `${baseContentClassName} ${contentClassName}`
    : baseContentClassName;

  return (
    <section className={sectionClassName}>
      <div className={styles.window}>
        <div className={styles.header}>
          <span>{title}</span>
          <div className={styles.controls}>
            {onClose ? (
              <button
                className={styles.closeButton}
                type="button"
                aria-label={`Close ${title}`}
                onClick={onClose}
              >
                X
              </button>
            ) : (
              <>
                <span className={styles.control} />
                <span className={styles.control} />
                <span className={`${styles.control} ${styles.red}`} />
              </>
            )}
          </div>
        </div>

        <div className={contentClasses}>{children}</div>
      </div>
    </section>
  );
}
