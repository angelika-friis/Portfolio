import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders all HomePage sections', () => {
  render(<HomePage />);

  expect(screen.getByText('hello.txt')).toBeInTheDocument();
  expect(screen.getByText('updates.txt')).toBeInTheDocument();
  expect(screen.getByText('clouds.img')).toBeInTheDocument();
  expect(screen.getByText('about_me.txt')).toBeInTheDocument();
  expect(screen.getByText('contact.cfg')).toBeInTheDocument();
  expect(screen.getByText('my_companion.img')).toBeInTheDocument();
  expect(screen.getByText('tech_stack.md')).toBeInTheDocument();

  expect(screen.getByText('> Det jag använder mest')).toBeInTheDocument();
  expect(screen.getByText('> Erfarenhet av')).toBeInTheDocument();
  expect(screen.getByRole('region', { name: 'Projekt' })).toBeInTheDocument();
});
