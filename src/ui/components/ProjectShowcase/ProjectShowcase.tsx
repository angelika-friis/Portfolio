import { useMemo, useState } from 'react';
import type { Project } from '../../../types/project';
import { Window } from '../Window/Window';
import { Chip } from '../Chip';
import { Button } from '../Button';
import styles from './ProjectShowcase.module.css';

type Props = {
  projects: Record<string, Project>;
};

export function ProjectShowcase({ projects }: Props) {
  const projectList = useMemo(() => Object.values(projects), [projects]);
  const [selectedProjectId, setSelectedProjectId] = useState(
    projectList[0]?.id ?? '',
  );
  const selectedProject =
    projectList.find((project) => project.id === selectedProjectId) ??
    projectList[0];

  if (!selectedProject) {
    return null;
  }

  return (
    <section className={styles.showcase} aria-label="Projects">
      <Window
        title={selectedProject.fileName}
        className={styles.projectWindow}
        contentClassName={styles.projectContent}
      >
        <h2 className={styles.title}>{selectedProject.title}</h2>
        <p className={styles.description}>{selectedProject.description}</p>

        <ul className={styles.techList} aria-label="Technologies used">
          {selectedProject.technologies.map((technology) => (
            <Chip key={technology}>{technology}</Chip>
          ))}
        </ul>

        <div className={styles.actions}>
          {selectedProject.links.map((link) => (
            <Button
              href={link.href}
              key={link.label}
              rel="noreferrer"
              target="_blank"
              variant={link.variant}
            >
              {link.label}
            </Button>
          ))}
        </div>
      </Window>

      <nav className={styles.projectList} aria-label="Project list">
        {projectList.map((project) => {
          const isSelected = project.id === selectedProject.id;

          return (
            <button
              aria-current={isSelected ? 'true' : undefined}
              className={`${styles.projectListItem} ${
                isSelected ? styles.selectedProject : ''
              }`}
              key={project.id}
              onClick={() => setSelectedProjectId(project.id)}
              type="button"
            >
              <span className={styles.indicator} aria-hidden="true">
                {isSelected ? '▶' : ''}
              </span>
              <span>
                <span className={styles.projectName}>{project.title}</span>
                <span className={styles.projectFile}>{project.fileName}</span>
              </span>
            </button>
          );
        })}
      </nav>
    </section>
  );
}
