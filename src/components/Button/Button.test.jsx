import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Button from './Button.jsx'

test('should render a button with a click event', () => {
  const onClick = vi.fn()

  render(<Button text="Contate-nos" onClick={onClick} />)

  const buttonElement = screen.getByText('Contate-nos')
  expect(buttonElement).toBeInTheDocument()

  buttonElement.click()
  expect(onClick).toHaveBeenCalled()
})