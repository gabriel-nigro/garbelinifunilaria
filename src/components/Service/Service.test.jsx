import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Service from './Service.jsx';


test('should render a service with a title and icon', () => {
    const title = "title"
    const icon = "icon"
    const iconFallback = "iconFallback"
    
    render(<Service title={title} icon={icon} iconFallback={iconFallback} />)
    
    const titleElement = screen.getByText(title)
    expect(titleElement).toBeInTheDocument()
    
    const iconElement = screen.getByRole('img', { name: title })
    expect(iconElement).toHaveAttribute('src', iconFallback)
    expect(iconElement).toHaveAttribute('alt', title)
})