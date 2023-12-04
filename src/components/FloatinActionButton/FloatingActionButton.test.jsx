import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FloatingActionButton from './FloatingActionButton.jsx';
import { onClick } from './FloatingActionButton.utils';

window.open = vi.fn();

test('should render a floating action button with a click event', () => {

  render(<FloatingActionButton />)

  const buttonElement0 = screen.getByTestId('action-button-0')
  expect(buttonElement0).toBeInTheDocument()

  const buttonElement1 = screen.getByTestId('action-button-1')
  expect(buttonElement1).toBeInTheDocument()

  const buttonElement2 = screen.getByTestId('action-button-2')
  expect(buttonElement2).toBeInTheDocument()

  const buttonElement3 = screen.getByTestId('action-button-3')
  expect(buttonElement2).toBeInTheDocument()

  buttonElement0.click()
  buttonElement1.click()
  buttonElement2.click()
  buttonElement3.click()
})

test('should call onClick', () => {
  onClick(); // Chama a função onClick

  // Verifica se window.open foi chamado
  expect(global.open).toBeCalled()

  window.open.mockClear()
});