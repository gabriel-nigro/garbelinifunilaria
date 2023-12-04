import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Services from './Services.jsx';

test('should render a service component', () => {
    const services = render(<Services />)
    
    const serviceElement = services.container.querySelector('#services')
    expect(serviceElement).toBeInTheDocument()
})