import type { ReactNode } from 'react';
import styles from './ContactButton.module.css';

import { Button } from '../../../../../ui/components/Button';
import { Stack, Text } from '../../../../../ui/components/primitives';

type ContactButtonProps = {
  href: string;
  icon: ReactNode;
  title: string;
  text: string;
};

export function ContactButtons({
  href,
  icon,
  title,
  text,
}: ContactButtonProps) {
  return (
    <Button href={href} className={styles.contactButton}>
      <Stack direction="horizontal" align="center">
        {icon}
        <Stack direction="vertical" gap="xs" className={styles.buttonText}>
          <Text as="p" weight="bold">
            {title}
          </Text>
          <Text as="p" className={styles.at}>
            {text}
          </Text>
        </Stack>
      </Stack>
    </Button>
  );
}
