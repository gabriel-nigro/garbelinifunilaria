import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header.jsx';

test('should render a header component', () => {
    render(<Header />)
    
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument()
})