import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('should render a app component', () => {
    render(<App />)
    
    const appElement = screen.getByTestId('app')
    expect(appElement).toBeInTheDocument()
})