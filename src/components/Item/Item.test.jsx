import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Item from './Item.jsx';

test('should render a item with a title and description', () => {
  const title = "title"
  const description = "description"
  const anchor = "anchor"

  render(<Item title={title} description={description} anchor={anchor} />)

  const titleElement = screen.getByText(title)
  expect(titleElement).toBeInTheDocument()

  const linkElement = screen.getByRole('link', { name: title })
  expect(linkElement).toHaveAttribute('href', anchor)
})