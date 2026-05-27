import { useEffect } from 'react';
import ExternalLinkSolidIcon from '@iconify-react/pixel/external-link-solid';
import { Stack, Text } from '../primitives';
import { Window } from '../Window/Window';
import styles from './DocumentPreview.module.css';

type DocumentPreviewProps = {
  documentPath: string;
  isOpen: boolean;
  title: string;
  onClose: () => void;
};

const getPreviewDocumentPath = (documentPath: string) =>
  `${documentPath}${documentPath.includes('#') ? '&' : '#'}page=1&zoom=page-fit&view=Fit`;

export function DocumentPreview({
  documentPath,
  isOpen,
  title,
  onClose,
}: DocumentPreviewProps) {
  const previewDocumentPath = getPreviewDocumentPath(documentPath);

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
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <Window
          title={title}
          className={styles.previewWindow}
          contentClassName={styles.previewContent}
          contentPadding={false}
          onClose={onClose}
        >
          <div className={styles.previewBody}>
            <iframe
              className={styles.frame}
              src={previewDocumentPath}
              title={`${title} PDF preview`}
            />

            <a
              className={styles.documentLink}
              href={documentPath}
              target="_blank"
            >
              <Stack direction="horizontal" align="center">
                <ExternalLinkSolidIcon height="1rem" />
                <Text as="p" weight="bold">
                  Open PDF in new tab
                </Text>
              </Stack>
            </a>
          </div>
        </Window>
      </div>
    </div>
  );
}
