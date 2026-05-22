import {
  experienceTechStack,
  primaryTechStack,
} from '../../../../data/techStacks';
import { Stack, Text } from '../../../../../ui/components/primitives';
import { Window } from '../../../../../ui/components/Window/Window';
import styles from './TechStackSection.module.css';

export function TechStackSection() {
  return (
    <section className={styles.techStackSection}>
      <Window title="tech_stack.md">
        <Stack direction="vertical" gap="md" className={styles.techStack}>
          <div>
            <Text as="h2" variant="heading" size="lg">
              {`> What I use the most`}
            </Text>
            <ul className={styles.techBadgeList}>
              {primaryTechStack.map((tech) => (
                <li key={tech} className={styles.techBadge}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Text as="h3" variant="heading" size="lg">
              {`> Experience in`}
            </Text>
            <ul className={styles.techBadgeList}>
              {experienceTechStack.map((tech) => (
                <li key={tech} className={styles.techBadge}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </Stack>
      </Window>
    </section>
  );
}
