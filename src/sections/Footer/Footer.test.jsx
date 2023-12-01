import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer.jsx';

test('should render a footer', () => {

  render(<Footer />);

  const footerElement = screen.getByTestId('footer');
  expect(footerElement).toBeInTheDocument();
})