import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header', () => {
  render(<App />);
  expect(screen.getByText('~/dev/portfolio')).toBeInTheDocument();
});
