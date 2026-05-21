export type Project = {
  id: string;
  title: string;
  fileName: string;
  description: string;
  technologies: string[];
  links: {
    label: string;
    href: string;
    variant?: 'accent' | 'primary';
  }[];
};
