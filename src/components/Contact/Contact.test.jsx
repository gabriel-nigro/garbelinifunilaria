import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from './Contact.jsx';
import Message from "../../assets/message.svg";

test('should render a contact with a link', () => {
  const src = Message
  const alt = "call"
  const href = "tel:+551120212289"
  const text = "(11) 2021-2289"

  render(<Contact src={src} alt={alt} href={href} text={text} />)

  const contactElement = screen.getByText(text)
  expect(contactElement).toBeInTheDocument()

  const linkElement = screen.getByRole('link', { name: text })
  expect(linkElement).toHaveAttribute('href', href)
})