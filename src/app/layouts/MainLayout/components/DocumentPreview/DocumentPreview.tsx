import { useEffect } from 'react';
import ExternalLinkSolidIcon from '@iconify-react/pixel/external-link-solid';
import { Button } from '../../../../../ui/components/Button';
import { Stack, Text } from '../../../../../ui/components/primitives';
import styles from './DocumentPreview.module.css';

type DocumentPreviewProps = {
  documentPath: string;
  isOpen: boolean;
  title: string;
  onClose: () => void;
};

export function DocumentPreview({
  documentPath,
  isOpen,
  title,
  onClose,
}: DocumentPreviewProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay} role="presentation" onClick={onClose}>
      <section
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="document-preview-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.header}>
          <Text as="h2" id="document-preview-title" variant="label">
            {title}
          </Text>
          <Button
            className={styles.closeButton}
            variant="primary"
            type="button"
            aria-label={`Close ${title}`}
            onClick={onClose}
          >
            <Text variant="label">X</Text>
          </Button>
        </div>

        <iframe
          className={styles.frame}
          src={documentPath}
          title={`${title} PDF preview`}
        />

        <a className={styles.documentLink} href={documentPath} target="_blank">
          <Stack direction="horizontal" align="center">
            <ExternalLinkSolidIcon height="1rem" />
            <Text as="p" weight="bold">
              Open PDF in new tab
            </Text>
          </Stack>
        </a>
      </section>
    </div>
  );
}
